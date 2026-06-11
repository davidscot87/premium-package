# Premier College of Excellence - Advanced College Website

A fully functioning, premium college website built with React.js, featuring advanced animations, responsive design, and comprehensive functionality.

## 🌟 Features

### Core Features
- ✅ Unlimited Pages with dedicated sections
- ✅ Student / Teacher / Admin Login System
- ✅ Advanced Course Catalog with Categories
- ✅ Blog / News Section with filtering
- ✅ Event Calendar with detailed views
- ✅ Interactive Gallery with lightbox
- ✅ Advanced Admin Dashboard
- ✅ Student & Teacher Dashboards
- ✅ Performance Optimized
- ✅ Fully Responsive & Mobile-Friendly
- ✅ SEO Optimized with Meta Tags
- ✅ Social Media Integration
- ✅ Google Maps Integration
- ✅ Contact Form with validation

### Pages Included
1. **Home** - Flipping hero sections with animations
2. **About** - History, Vision, Mission, Leadership, Values
3. **Courses** - Comprehensive course catalog with filtering
4. **Events** - Event listings with detailed pages
5. **Gallery** - Image gallery with categories
6. **Blog/Insights** - News and articles with categories
7. **Contact** - Contact form with Google Maps
8. **Admissions** - Admission information
9. **Faculty** - Faculty member profiles
10. **Achievements** - College achievements timeline
11. **Infrastructure** - Facilities showcase
12. **Student Dashboard** - Student portal
13. **Teacher Dashboard** - Faculty portal
14. **Admin Dashboard** - Administrative panel

### Technical Highlights
- **React.js** - Modern component-based architecture
- **React Router** - Client-side routing
- **Lucide Icons** - Beautiful, consistent icons
- **Bootstrap** - Responsive grid system
- **Custom CSS** - Advanced animations and transitions
- **Vite** - Lightning-fast build tool
- **Performance Optimized** - Code splitting and lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
premium-college-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Courses.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   ├── StudentLogin.jsx
│   │   ├── TeacherLogin.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── TeacherDashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── [other pages]
│   ├── styles/
│   │   ├── global.css
│   │   └── animations.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Animations
- Fade in animations
- Slide animations
- Hover effects
- Smooth transitions
- Parallax effects
- Loading animations

### Color Scheme
- Primary: #1a237e (Deep Blue)
- Secondary: #0d47a1 (Blue)
- Accent: #ffd700 (Gold)
- Background: #f8f9fa (Light Gray)

### Typography
- Headings: Playfair Display
- Body: Poppins

## 🔐 Login Credentials (Demo)

### Student Login
- Username: Any student ID
- Password: Any password
- Redirects to: Student Dashboard

### Teacher Login
- Username: Any faculty ID
- Password: Any password
- Redirects to: Teacher Dashboard

### Admin Login
- Username: admin
- Password: Any password
- Redirects to: Admin Dashboard

*Note: This is a demo. In production, implement proper authentication.*

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 College Statistics

- 50+ Expert Faculty Members
- 1200+ Active Students
- 30+ Courses Offered
- 100+ Achievements
- 50+ Years of Legacy
- NAAC A++ Accredited

## 🛠️ Customization

### Changing Colors
Edit `src/styles/global.css` and modify CSS variables:
```css
:root {
  --primary-color: #1a237e;
  --secondary-color: #0d47a1;
  --accent-color: #ffd700;
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

### Modifying Content
- Course data: `src/pages/Courses.jsx`
- Event data: `src/pages/Events.jsx`
- Blog posts: `src/pages/Blog.jsx`
- Gallery images: `src/pages/Gallery.jsx`

## 📧 Contact Information

- Email: info@premiercollege.edu
- Phone: +1 (555) 123-4567
- Address: 123 Education Street, Knowledge City

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- Fonts from Google Fonts

---

Built with ❤️ for Premier College of Excellence
