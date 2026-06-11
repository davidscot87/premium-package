import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Search, Filter, ChevronRight, Clock, User, Bookmark, Download, ExternalLink, X, Star } from 'lucide-react'

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

const books = [
  { id: 1, title: 'Introduction to Algorithms', author: 'Thomas H. Cormen', isbn: '978-0262033848', subject: 'Computer Science', year: 2022, copies: 10, available: 4, pages: 1312, edition: 4, status: 'Available' },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin', isbn: '978-0132350884', subject: 'Computer Science', year: 2008, copies: 8, available: 2, pages: 464, edition: 1, status: 'Available' },
  { id: 3, title: 'Design Patterns', author: 'Gang of Four', isbn: '978-0201633610', subject: 'Computer Science', year: 1994, copies: 6, available: 1, pages: 416, edition: 1, status: 'Limited' },
  { id: 4, title: 'Principles of Economics', author: 'N. Gregory Mankiw', isbn: '978-0357722718', subject: 'Economics', year: 2020, copies: 12, available: 5, pages: 864, edition: 9, status: 'Available' },
  { id: 5, title: 'Organic Chemistry', author: 'Jonathan Clayden', isbn: '978-0199270293', subject: 'Chemistry', year: 2012, copies: 7, available: 3, pages: 1234, edition: 2, status: 'Available' },
  { id: 6, title: 'Molecular Biology of the Cell', author: 'Bruce Alberts', isbn: '978-0815344643', subject: 'Biology', year: 2014, copies: 5, available: 1, pages: 1464, edition: 6, status: 'Limited' },
  { id: 7, title: 'Engineering Mathematics', author: 'K.A. Stroud', isbn: '978-0831133276', subject: 'Mathematics', year: 2013, copies: 15, available: 8, pages: 1248, edition: 7, status: 'Available' },
  { id: 8, title: 'Thermodynamics: An Engineering Approach', author: 'Yunus A. Cengel', isbn: '978-0073398174', subject: 'Engineering', year: 2014, copies: 8, available: 3, pages: 944, edition: 8, status: 'Available' },
  { id: 9, title: 'The Art of Computer Programming', author: 'Donald E. Knuth', isbn: '978-0201896831', subject: 'Computer Science', year: 1997, copies: 4, available: 0, pages: 672, edition: 3, status: 'Issued' },
  { id: 10, title: 'Microelectronic Circuits', author: 'Adel S. Sedra', isbn: '978-0199339136', subject: 'Electronics', year: 2015, copies: 6, available: 2, pages: 1392, edition: 7, status: 'Available' },
  { id: 11, title: 'Introduction to Quantum Mechanics', author: 'David J. Griffiths', isbn: '978-1107189638', subject: 'Physics', year: 2016, copies: 5, available: 2, pages: 512, edition: 3, status: 'Available' },
  { id: 12, title: 'Calculus: Early Transcendentals', author: 'James Stewart', isbn: '978-1337613927', subject: 'Mathematics', year: 2020, copies: 20, available: 10, pages: 1376, edition: 9, status: 'Available' },
  { id: 13, title: 'Artificial Intelligence: A Modern Approach', author: 'Stuart Russell', isbn: '978-0134610993', subject: 'Computer Science', year: 2020, copies: 10, available: 4, pages: 1136, edition: 4, status: 'Available' },
  { id: 14, title: 'Fluid Mechanics', author: 'Frank M. White', isbn: '978-0073398273', subject: 'Engineering', year: 2015, copies: 7, available: 2, pages: 864, edition: 8, status: 'Available' },
  { id: 15, title: 'Principles of Corporate Finance', author: 'Richard A. Brealey', isbn: '978-1260565553', subject: 'Business', year: 2019, copies: 8, available: 4, pages: 1088, edition: 13, status: 'Available' },
]

const subjects = ['All', 'Computer Science', 'Mathematics', 'Engineering', 'Physics', 'Chemistry', 'Biology', 'Economics', 'Business', 'Electronics']

const LibraryCatalog = () => {
  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('All')
  const [selectedBook, setSelectedBook] = useState(null)

  const filtered = books.filter(b => {
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      b.isbn.includes(search)
    const matchSubject = subject === 'All' || b.subject === subject
    return matchSearch && matchSubject
  })

  return (
    <div className="library-page">
      <section className="page-hero" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
        padding: '100px 0 60px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, background: 'radial-gradient(circle at 30% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 70% 50%, #f59e0b 0%, transparent 50%)' }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h1 {...fadeUp} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
            <BookOpen size={40} style={{ display: 'inline', marginRight: 12, verticalAlign: 'middle', color: '#f59e0b' }} />
            Library Catalog
          </motion.h1>
          <motion.p {...fadeUp} style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
            Browse our collection of {books.length}+ books, journals, and digital resources
          </motion.p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ flex: 1, minWidth: 250, position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="text" placeholder="Search by title, author, or ISBN..." value={search} onChange={e => setSearch(e.target.value)}
                style={{ width: '100%', padding: '12px 12px 12px 40px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 14 }} />
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {subjects.map(s => (
                <button key={s} onClick={() => setSubject(s)}
                  style={{
                    padding: '8px 16px', borderRadius: 20, border: '1px solid #e2e8f0', cursor: 'pointer', fontSize: 13, fontWeight: 500,
                    background: subject === s ? '#1a237e' : 'white', color: subject === s ? 'white' : '#475569', transition: 'all 0.2s'
                  }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 16, marginBottom: 40 }}>
            {filtered.map((book, i) => (
              <motion.div key={book.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                className="card-custom" style={{ cursor: 'pointer', padding: 20, position: 'relative' }}
                onClick={() => setSelectedBook(selectedBook?.id === book.id ? null : book)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 16, marginBottom: 4, color: '#1a237e', lineHeight: 1.3 }}>{book.title}</h3>
                      <p style={{ fontSize: 13, color: '#64748b' }}><span>by </span><strong>{book.author}</strong></p>
                  </div>
                  <span style={{
                    padding: '3px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap',
                    background: book.status === 'Available' ? '#dcfce7' : book.status === 'Limited' ? '#fefce8' : '#fee2e2',
                    color: book.status === 'Available' ? '#16a34a' : book.status === 'Limited' ? '#a16207' : '#dc2626'
                  }}>{book.status}</span>
                </div>
                <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#94a3b8' }}>
                  <span><BookOpen size={12} style={{ marginRight: 3 }} /> {book.subject}</span>
                  <span><User size={12} style={{ marginRight: 3 }} /> Ed. {book.edition}</span>
                  <span><Star size={12} style={{ marginRight: 3 }} /> {book.year}</span>
                </div>
                <div style={{ marginTop: 8, display: 'flex', gap: 4 }}>
                  <span style={{ fontSize: 12, color: '#64748b' }}>Available: <strong style={{ color: book.available > 0 ? '#16a34a' : '#dc2626' }}>{book.available}/{book.copies}</strong></span>
                </div>
                {selectedBook?.id === book.id && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 13, color: '#475569' }}>
                      <span>ISBN: {book.isbn}</span>
                      <span>Pages: {book.pages}</span>
                    </div>
                    <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
                      <button className="btn-primary-custom" style={{ padding: '8px 16px', fontSize: 13, flex: 1, justifyContent: 'center' }}>
                        <Download size={14} /> Request Issue
                      </button>
                      <button style={{ padding: '8px 16px', borderRadius: 8, border: '1px solid #e2e8f0', fontSize: 13, cursor: 'pointer', background: 'white' }}>
                        <Bookmark size={14} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: 60, color: '#94a3b8' }}>
              <BookOpen size={48} style={{ margin: '0 auto 12px', opacity: 0.5 }} />
              <p>No books found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div className="section-title" {...fadeUp}>
            <span className="badge-custom">Digital Resources</span>
            <h2>E-Books & Digital Library</h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            {[
              { title: 'IEEE Journals', desc: 'Access to 200+ international journals', icon: <BookOpen size={32} /> },
              { title: 'E-Book Collection', desc: '5000+ digital books available 24/7', icon: <Download size={32} /> },
              { title: 'Research Database', desc: 'Springer, Scopus, Web of Science', icon: <ExternalLink size={32} /> },
              { title: 'Video Lectures', desc: 'Recorded lectures from expert faculty', icon: <Star size={32} /> },
            ].map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card-custom" style={{ textAlign: 'center' }}>
                <div style={{ color: '#f59e0b', marginBottom: 12 }}>{r.icon}</div>
                <h3 style={{ fontSize: 18 }}>{r.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default LibraryCatalog
