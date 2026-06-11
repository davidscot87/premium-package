import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { forumThreads } from '../../data/lmsData'
import { ThumbsUp, MessageSquare, CheckCircle, ArrowLeft } from 'lucide-react'
import './Forum.css'

const ThreadView = () => {
  const { threadId } = useParams()
  const navigate = useNavigate()
  const [thread, setThread] = useState(null)
  const [replies, setReplies] = useState([])
  const [newReply, setNewReply] = useState('')
  const [upvoted, setUpvoted] = useState(false)

  useEffect(() => {
    const foundThread = forumThreads.find(t => t.id === threadId)
    setThread(foundThread)
    
    // Load replies from localStorage
    const storedReplies = JSON.parse(localStorage.getItem(`replies-${threadId}`) || '[]')
    setReplies(storedReplies)
  }, [threadId])

  const handleUpvote = () => {
    setUpvoted(!upvoted)
    setThread({ ...thread, upvotes: upvoted ? thread.upvotes - 1 : thread.upvotes + 1 })
  }

  const handleReply = () => {
    if (!newReply.trim()) return

    const reply = {
      id: `reply-${Date.now()}`,
      author: 'Current User',
      authorAvatar: 'CU',
      createdAt: new Date().toISOString(),
      content: newReply
    }

    const updatedReplies = [...replies, reply]
    setReplies(updatedReplies)
    localStorage.setItem(`replies-${threadId}`, JSON.stringify(updatedReplies))
    setNewReply('')
  }

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const seconds = Math.floor((now - date) / 1000)
    
    if (seconds < 60) return 'Just now'
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
    return `${Math.floor(seconds / 86400)}d ago`
  }

  if (!thread) return <div>Loading...</div>

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page">
        <button className="btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '20px' }}>
          <ArrowLeft size={18} />
          Back to Forum
        </button>

        <div className="thread-view-container">
          <div className="thread-main">
            <div className="thread-main-header">
              <div>
                <h1>{thread.title}</h1>
                <div className="thread-meta">
                  <span className="thread-author">{thread.author}</span>
                  <span className="thread-time">{getTimeAgo(thread.createdAt)}</span>
                  <div className="thread-tags">
                    {thread.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="thread-actions">
                <button 
                  className={`btn-action ${upvoted ? 'active' : ''}`}
                  onClick={handleUpvote}
                >
                  <ThumbsUp size={18} />
                  {thread.upvotes}
                </button>
                {thread.solved && (
                  <span className="solved-badge">
                    <CheckCircle size={16} />
                    Solved
                  </span>
                )}
              </div>
            </div>

            <div className="thread-main-content">
              <p>{thread.content}</p>
            </div>

            <div className="replies-section">
              <h3>
                <MessageSquare size={20} style={{ display: 'inline', marginRight: '8px' }} />
                {replies.length} Replies
              </h3>

              {replies.map(reply => (
                <div key={reply.id} className="reply-card">
                  <div className="reply-avatar">
                    {reply.authorAvatar}
                  </div>
                  <div className="reply-content">
                    <div className="reply-author">{reply.author}</div>
                    <div className="reply-time">{getTimeAgo(reply.createdAt)}</div>
                    <div className="reply-text">{reply.content}</div>
                  </div>
                </div>
              ))}

              <div className="reply-form">
                <h3>Post a Reply</h3>
                <textarea
                  placeholder="Share your thoughts..."
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                />
                <button onClick={handleReply}>Post Reply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ThreadView
