import { useState, useRef, useCallback } from 'react'
import { Camera, Upload, X, Check, RotateCcw, ZoomIn, ZoomOut, RefreshCw, Image } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import './ProfilePictureUpload.css'

const ProfilePictureUpload = ({ currentPicture, onClose }) => {
  const [step, setStep] = useState('choose') // choose | crop | camera
  const [preview, setPreview] = useState(null)
  const [rawImage, setRawImage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [cameraError, setCameraError] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [rotation, setRotation] = useState(0)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const fileInputRef = useRef(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const cropCanvasRef = useRef(null)
  const streamRef = useRef(null)
  const { updateProfilePicture } = useAuth()

  //  File Upload 
  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      alert('Image must be under 10MB.')
      return
    }
    const reader = new FileReader()
    reader.onloadend = () => {
      setRawImage(reader.result)
      setZoom(1)
      setRotation(0)
      setDragOffset({ x: 0, y: 0 })
      setStep('crop')
    }
    reader.readAsDataURL(file)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setRawImage(reader.result)
        setZoom(1)
        setRotation(0)
        setDragOffset({ x: 0, y: 0 })
        setStep('crop')
      }
      reader.readAsDataURL(file)
    }
  }

  //  Camera 
  const startCamera = async () => {
    setCameraError(null)
    setStep('camera')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }
      })
      streamRef.current = stream
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
    } catch (err) {
      setCameraError('Camera access denied or unavailable on this device.')
    }
  }

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return
    const video = videoRef.current
    const canvas = canvasRef.current
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(video, 0, 0)
    const imageData = canvas.toDataURL('image/jpeg', 0.95)
    stopCamera()
    setRawImage(imageData)
    setZoom(1)
    setRotation(0)
    setDragOffset({ x: 0, y: 0 })
    setStep('crop')
  }

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
  }

  //  Crop / Transform 
  const getCroppedImage = useCallback(() => {
    if (!rawImage || !cropCanvasRef.current) return null
    const canvas = cropCanvasRef.current
    const size = 400
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')

    const img = new window.Image()
    img.src = rawImage

    ctx.clearRect(0, 0, size, size)
    ctx.save()
    ctx.translate(size / 2 + dragOffset.x, size / 2 + dragOffset.y)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.scale(zoom, zoom)

    const drawSize = Math.min(img.naturalWidth, img.naturalHeight)
    const sx = (img.naturalWidth - drawSize) / 2
    const sy = (img.naturalHeight - drawSize) / 2

    ctx.drawImage(img, sx, sy, drawSize, drawSize, -size / 2, -size / 2, size, size)
    ctx.restore()

    // Circular clip
    const finalCanvas = document.createElement('canvas')
    finalCanvas.width = size
    finalCanvas.height = size
    const fCtx = finalCanvas.getContext('2d')
    fCtx.beginPath()
    fCtx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    fCtx.closePath()
    fCtx.clip()
    fCtx.drawImage(canvas, 0, 0)

    return finalCanvas.toDataURL('image/jpeg', 0.92)
  }, [rawImage, zoom, rotation, dragOffset])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX - dragOffset.x, y: e.clientY - dragOffset.y })
  }
  const handleMouseMove = (e) => {
    if (!isDragging) return
    setDragOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
  }
  const handleMouseUp = () => setIsDragging(false)

  const handleTouchStart = (e) => {
    const t = e.touches[0]
    setIsDragging(true)
    setDragStart({ x: t.clientX - dragOffset.x, y: t.clientY - dragOffset.y })
  }
  const handleTouchMove = (e) => {
    if (!isDragging) return
    const t = e.touches[0]
    setDragOffset({ x: t.clientX - dragStart.x, y: t.clientY - dragStart.y })
  }

  //  Save 
  const handleSave = () => {
    const cropped = getCroppedImage()
    if (!cropped) return
    setUploading(true)
    setTimeout(() => {
      updateProfilePicture(cropped)
      setUploading(false)
      onClose()
    }, 600)
  }

  const handleCancel = () => {
    stopCamera()
    onClose()
  }

  const goBack = () => {
    stopCamera()
    setStep('choose')
    setRawImage(null)
    setPreview(null)
  }

  //  Render 
  return (
    <div className="ppu-overlay" onClick={handleCancel}>
      <div className="ppu-modal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="ppu-header">
          <div className="ppu-header-left">
            {step !== 'choose' && (
              <button className="ppu-back-btn" onClick={goBack} title="Back">
                &larr;
              </button>
            )}
            <h2>
              {step === 'choose' && 'Update Profile Picture'}
              {step === 'camera' && 'Take a Photo'}
              {step === 'crop' && 'Adjust & Crop'}
            </h2>
          </div>
          <button className="ppu-close-btn" onClick={handleCancel}>
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div className="ppu-body">

          {/*  STEP: CHOOSE  */}
          {step === 'choose' && (
            <div className="ppu-choose">
              {/* Current picture preview */}
              <div className="ppu-current-preview">
                <img
                  src={currentPicture || `https://ui-avatars.com/api/?name=User&size=200&background=1a237e&color=fff&bold=true`}
                  alt="Current"
                  className="ppu-current-img"
                />
                <p className="ppu-current-label">Current Photo</p>
              </div>

              {/* Drop zone */}
              <div
                className="ppu-dropzone"
                onDrop={handleDrop}
                onDragOver={e => e.preventDefault()}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="ppu-dropzone-icon">
                  <Image size={40} />
                </div>
                <p className="ppu-dropzone-title">Drag & drop your photo here</p>
                <p className="ppu-dropzone-sub">or click to browse files</p>
                <p className="ppu-dropzone-hint">JPG, PNG, WEBP -- max 10MB</p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />

              <div className="ppu-divider"><span>or</span></div>

              <button className="ppu-camera-btn" onClick={startCamera}>
                <Camera size={22} />
                Take Photo with Camera
              </button>
            </div>
          )}

          {/*  STEP: CAMERA  */}
          {step === 'camera' && (
            <div className="ppu-camera">
              {cameraError ? (
                <div className="ppu-camera-error">
                  <Camera size={48} />
                  <p>{cameraError}</p>
                  <button className="ppu-retry-btn" onClick={startCamera}>
                    <RefreshCw size={18} /> Retry
                  </button>
                </div>
              ) : (
                <>
                  <div className="ppu-video-wrapper">
                    <video ref={videoRef} className="ppu-video" autoPlay playsInline muted />
                    <div className="ppu-video-overlay">
                      <div className="ppu-face-guide" />
                    </div>
                  </div>
                  <canvas ref={canvasRef} style={{ display: 'none' }} />
                  <div className="ppu-camera-actions">
                    <button className="ppu-shutter-btn" onClick={capturePhoto}>
                      <div className="ppu-shutter-inner" />
                    </button>
                    <p className="ppu-shutter-hint">Click to capture</p>
                  </div>
                </>
              )}
            </div>
          )}

          {/*  STEP: CROP  */}
          {step === 'crop' && rawImage && (
            <div className="ppu-crop">
              <p className="ppu-crop-hint">Drag to reposition . Scroll to zoom</p>

              <div
                className="ppu-crop-viewport"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
                onWheel={e => setZoom(z => Math.min(3, Math.max(0.5, z - e.deltaY * 0.001)))}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              >
                <img
                  src={rawImage}
                  alt="Crop"
                  className="ppu-crop-img"
                  style={{
                    transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                    transition: isDragging ? 'none' : 'transform 0.1s ease'
                  }}
                  draggable={false}
                />
                <div className="ppu-crop-circle-mask" />
              </div>

              {/* Hidden canvas for processing */}
              <canvas ref={cropCanvasRef} style={{ display: 'none' }} />

              {/* Controls */}
              <div className="ppu-crop-controls">
                <div className="ppu-control-group">
                  <label>Zoom</label>
                  <div className="ppu-control-row">
                    <button onClick={() => setZoom(z => Math.max(0.5, z - 0.1))}><ZoomOut size={18} /></button>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.05"
                      value={zoom}
                      onChange={e => setZoom(parseFloat(e.target.value))}
                      className="ppu-slider"
                    />
                    <button onClick={() => setZoom(z => Math.min(3, z + 0.1))}><ZoomIn size={18} /></button>
                  </div>
                </div>

                <div className="ppu-control-group">
                  <label>Rotate</label>
                  <div className="ppu-control-row">
                    <button onClick={() => setRotation(r => r - 90)}><RotateCcw size={18} /></button>
                    <input
                      type="range"
                      min="-180"
                      max="180"
                      step="1"
                      value={rotation}
                      onChange={e => setRotation(parseInt(e.target.value))}
                      className="ppu-slider"
                    />
                    <button onClick={() => setRotation(r => r + 90)} style={{ transform: 'scaleX(-1)' }}><RotateCcw size={18} /></button>
                  </div>
                </div>

                <button
                  className="ppu-reset-btn"
                  onClick={() => { setZoom(1); setRotation(0); setDragOffset({ x: 0, y: 0 }) }}
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {(step === 'crop') && (
          <div className="ppu-footer">
            <button className="ppu-btn-secondary" onClick={goBack}>
              Back
            </button>
            <button
              className="ppu-btn-primary"
              onClick={handleSave}
              disabled={uploading}
            >
              {uploading ? (
                <span className="ppu-saving">
                  <span className="ppu-spinner" /> Saving...
                </span>
              ) : (
                <>
                  <Check size={18} />
                  Save Profile Picture
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePictureUpload
