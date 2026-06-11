import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../../components/DashboardLayout'
import { forumThreads } from '../../data/lmsData'
import { MessageSquare, Eye, ThumbsUp, CheckCircle, Plus, Search, Filter } from 'lucide-react'
import './Forum.css'

const ForumBoard = () => {
  const navigate = useNavigate()
  const [threads, setThreads] = useState(forumThreads)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTag, setFilterTag] = useState('All')

  const allTags = ['All', ...new Set(threads.flatMap(t => t.tags))]

  const filteredThreads = threads.filter(thread => {
    const matchesSearch = thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         thread.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTag = filterTag === 'All' || thread.tags.includes(filterTag)
    return matchesSearch && matchesTag
  })

  const handleCreateThread = () => {
    const title = prompt('Enter thread title:')
    if (title) {
      const newThread = {
        id: `thread-${Date.now()}`,
        courseId: 'lms-1',
        title,
        author: 'Current User',
        authorAvatar: 'CU',
        createdAt: new Date().toISOString(),
        replies: 0,
        views: 0,
        upvotes: 0,
        tags: ['General'],
        content: 'Thread content...',
        solved: false
      }
      setThreads([newThread, ...threads])
    }
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

  return (
    <DashboardLayout role="student">
      <div className="dashboard-page">
        <div className="page-header">
          <div>
            <h1>Discussion Forum</h1>
            <p>Ask questions, share knowledge, and connect with peers</p>
          </div>
          <button className="btn-create-thread" onClick={handleCreateThread}>
            <Plus size={20} />
            New Thread
          </button>
        </div>

        <div className="forum-filters">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="tag-filters">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-filter ${filterTag === tag ? 'active' : ''}`}
                onClick={() => setFilterTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="threads-list">
          {filteredThreads.map(thread => (
            <div 
              key={thread.id} 
              className="thread-card"
              onClick={() => navigate(`/student-dashboard/lms/forum/${thread.id}`)}
            >
              <div className="thread-avatar">
                {thread.authorAvatar}
              </div>
              <div className="thread-content">
                <div className="thread-header">
                  <h3>{thread.title}</h3>
                  {thread.solved && (
                    <span className="solved-badge">
                      <CheckCircle size={16} />
                      Solved
                    </span>
                  )}
                </div>
                <p className="thread-excerpt">{thread.content}</p>
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
              <div className="thread-stats">
                <div className="stat-item">
                  <MessageSquare size={18} />
                  <span>{thread.replies}</span>
                </div>
                <div className="stat-item">
                  <Eye size={18} />
                  <span>{thread.views}</span>
                </div>
                <div className="stat-item">
                  <ThumbsUp size={18} />
                  <span>{thread.upvotes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredThreads.length === 0 && (
          <div className="no-threads">
            <p>No discussions found</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default ForumBoard
