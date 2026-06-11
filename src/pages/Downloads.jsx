import { Download, FileText, File, Calendar, Search } from 'lucide-react'
import './Downloads.css'

const Downloads = () => {
  const categories = [
    { name: 'Admission Forms', count: 12 },
    { name: 'Academic Documents', count: 25 },
    { name: 'Examination Forms', count: 18 },
    { name: 'Fee Structures', count: 8 },
    { name: 'Syllabus', count: 45 },
    { name: 'Certificates', count: 15 }
  ]

  const documents = [
    { title: 'Admission Application Form 2024-25', category: 'Admission', size: '2.5 MB', date: '2024-01-15' },
    { title: 'Fee Structure - All Programs', category: 'Fee', size: '1.8 MB', date: '2024-01-10' },
    { title: 'Academic Calendar 2024-25', category: 'Academic', size: '3.2 MB', date: '2024-01-05' },
    { title: 'Examination Form - Semester 6', category: 'Examination', size: '1.5 MB', date: '2024-01-20' },
    { title: 'B.Tech CSE Syllabus', category: 'Syllabus', size: '4.5 MB', date: '2024-01-12' },
    { title: 'Transfer Certificate Application', category: 'Certificates', size: '800 KB', date: '2024-01-08' }
  ]

  return (
    <div className="downloads-page">
      <section className="downloads-hero">
        <div className="container-custom">
          <h1>Downloads & Forms</h1>
          <p>Access all important documents and forms</p>
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Search documents..." />
          </div>
        </div>
      </section>

      <section className="downloads-content">
        <div className="container-custom">
          <div className="downloads-grid">
            <div className="categories-sidebar">
              <h3>Categories</h3>
              {categories.map((cat, index) => (
                <button key={index} className="category-item">
                  <FileText size={18} />
                  <span>{cat.name}</span>
                  <span className="count">{cat.count}</span>
                </button>
              ))}
            </div>

            <div className="documents-list">
              {documents.map((doc, index) => (
                <div key={index} className="document-card">
                  <File size={40} />
                  <div className="doc-info">
                    <h3>{doc.title}</h3>
                    <div className="doc-meta">
                      <span>{doc.category}</span>
                      <span>{doc.size}</span>
                      <span><Calendar size={14} /> {doc.date}</span>
                    </div>
                  </div>
                  <button className="btn-download">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Downloads
