import { useState } from 'react'
import { X, Image as ImageIcon, Camera, Award } from 'lucide-react'
import './Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Photos', icon: ImageIcon },
    { id: 'campus', name: 'Campus', icon: Camera },
    { id: 'events', name: 'Events', icon: Award },
    { id: 'labs', name: 'Labs', icon: Camera },
    { id: 'sports', name: 'Sports', icon: Award },
    { id: 'cultural', name: 'Cultural', icon: Award }
  ]

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=80", category: "campus", title: "Main Campus Building", featured: true },
    { id: 2, src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop&q=80", category: "campus", title: "Library", featured: true },
    { id: 3, src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&q=85&auto=format", category: "campus", title: "Lecture Hall" },
    { id: 4, src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&q=80", category: "events", title: "Tech Symposium", featured: true },
    { id: 5, src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop&q=80", category: "cultural", title: "Cultural Fest" },
    { id: 6, src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop&q=80", category: "labs", title: "Computer Lab" },
    { id: 7, src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop&q=80", category: "labs", title: "Science Lab" },
    { id: 8, src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop&q=80", category: "sports", title: "Sports Complex" },
    { id: 9, src: "https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&h=600&fit=crop&q=80", category: "sports", title: "Basketball Court" },
    { id: 10, src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop&q=80", category: "campus", title: "Student Lounge" },
    { id: 11, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&q=80", category: "events", title: "Graduation Ceremony" },
    { id: 12, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&q=80", category: "cultural", title: "Music Performance" }
  ]

  const filteredImages = galleryImages.filter(img => 
    selectedCategory === 'all' || img.category === selectedCategory
  )

  const featuredImages = galleryImages.filter(img => img.featured)

  const stats = [
    { value: "1000+", label: "Photos" },
    { value: "50+", label: "Albums" },
    { value: "100+", label: "Events Covered" },
    { value: "5", label: "Years Archive" }
  ]

  return (
    <div className="gallery-page">
      {/* Hero Section - Fixed Background */}
      <section 
        className="page-hero"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=2400&h=1600&fit=crop&q=85&auto=format)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <h1>Gallery</h1>
            <p>Glimpses of Campus Life</p>
          </div>
        </div>
      </section>

      {/* Spacer for scroll effect */}
      <div className="hero-spacer"></div>

      {/* Content that overlaps hero */}
      <div className="content-overlay">

      {/* Stats Section */}
      <section className="gallery-stats-section">
        <div className="container-custom">
          <div className="stats-grid-gallery">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-gallery">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Photos Section */}
      {featuredImages.length > 0 && (
        <section className="featured-gallery-section section-padding bg-light">
          <div className="container-custom">
            <div className="section-title-gallery">
              <h2>Featured Photos</h2>
              <p>Highlights from our campus life</p>
            </div>
            <div className="featured-gallery-grid">
              {featuredImages.map((image) => (
                <div
                  key={image.id}
                  className="featured-gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.src} alt={image.title} loading="lazy" />
                  <div className="featured-gallery-overlay">
                    <span className="featured-badge-gallery">Featured</span>
                    <div className="featured-gallery-content">
                      <h3>{image.title}</h3>
                      <p>{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Photos Section */}
      <section className="all-gallery-section section-padding">
        <div className="container-custom">
          <div className="section-title-gallery">
            <h2>Photo Gallery</h2>
            <p>Browse through our complete collection</p>
          </div>

          {/* Gallery Filters */}
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn-gallery ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="results-count-gallery">
            <p>Showing <strong>{filteredImages.length}</strong> {filteredImages.length === 1 ? 'photo' : 'photos'}</p>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                  <p>{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta-section">
        <div className="container-custom">
          <div className="cta-content-gallery">
            <Camera size={60} />
            <h2>Want to Share Your Photos?</h2>
            <p>Submit your campus photos to be featured in our gallery</p>
            <a href="mailto:gallery@premiercollege.edu" className="btn-cta-gallery">
              Submit Photos
              <ImageIcon size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)}>
            <X size={30} />
          </button>
          <img src={selectedImage.src} alt={selectedImage.title} />
          <div className="lightbox-caption">
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.category}</p>
          </div>
        </div>
      )}
      </div> {/* Close content-overlay */}
    </div>
  )
}

export default Gallery
