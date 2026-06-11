import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react'

const BlogDetail = () => {
  const { id } = useParams()

  const post = {
    title: "Premier College Ranks Among Top 10 Institutions Nationally",
    category: "news",
    date: "March 1, 2026",
    author: "Admin",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    content: `
      <p>We are thrilled to announce that Premier College of Excellence has been ranked among the top 10 educational institutions in the country by the National Education Ranking Board. This prestigious recognition is a testament to our unwavering commitment to academic excellence, innovative teaching methodologies, and holistic student development.</p>
      
      <h3>A Journey of Excellence</h3>
      <p>Over the past 50 years, Premier College has consistently maintained its position as a leader in higher education. Our dedicated faculty, state-of-the-art infrastructure, and student-centric approach have been instrumental in achieving this milestone.</p>
      
      <h3>Key Factors Behind Our Success</h3>
      <p>Several factors contributed to this remarkable achievement:</p>
      <ul>
        <li>World-class faculty with extensive industry and research experience</li>
        <li>Modern laboratories and smart classrooms equipped with latest technology</li>
        <li>Strong industry partnerships ensuring 100% placement assistance</li>
        <li>Focus on research and innovation with numerous patents and publications</li>
        <li>Comprehensive student support services and mentorship programs</li>
      </ul>
      
      <h3>Looking Ahead</h3>
      <p>This recognition motivates us to continue our pursuit of excellence. We remain committed to providing our students with the best possible education and preparing them for successful careers in their chosen fields.</p>
      
      <p>We extend our heartfelt gratitude to our students, faculty, staff, and all stakeholders who have contributed to this achievement. Together, we will continue to reach new heights of excellence.</p>
    `
  }

  return (
    <div style={{marginTop: '80px'}}>
      <section className="page-hero" style={{backgroundImage: `url(${post.image})`}}>
        <div className="hero-overlay"></div>
        <div className="container-custom">
          <div className="hero-content">
            <span className="badge-custom">{post.category}</span>
            <h1 style={{marginTop: '1rem'}}>{post.title}</h1>
            <div style={{display: 'flex', gap: '2rem', marginTop: '1rem', opacity: 0.95}}>
              <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Calendar size={18} /> {post.date}
              </span>
              <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <User size={18} /> {post.author}
              </span>
              <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Clock size={18} /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <Link to="/blog" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--primary-color)',
              fontWeight: '600',
              marginBottom: '2rem'
            }}>
              <ArrowLeft size={20} />
              Back to Blog
            </Link>

            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div 
                style={{fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-dark)'}}
                dangerouslySetInnerHTML={{__html: post.content}}
              />

              <div style={{
                marginTop: '3rem',
                paddingTop: '2rem',
                borderTop: '2px solid var(--bg-light)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <strong>Share this article:</strong>
                </div>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer'
                }}>
                  <Share2 size={18} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail
