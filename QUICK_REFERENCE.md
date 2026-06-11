# QUICK REFERENCE GUIDE

## 🚀 Development Server
```bash
npm run dev
```
**URL**: http://localhost:3001/

---

## 📁 Key Files

### Pages
- `src/pages/Home.jsx` - Homepage
- `src/pages/About.jsx` - About page with Core Values
- `src/pages/Courses.jsx` - Courses page with 3-column grid
- `src/pages/Admissions.jsx` - Admissions page
- `src/pages/Contact.jsx` - Contact page

### Components
- `src/components/Navbar.jsx` - Navigation bar
- `src/components/Footer.jsx` - Footer

### Styles
- `src/styles/global.css` - Global styles and variables
- `src/styles/animations.css` - Animation definitions
- `src/pages/*.css` - Page-specific styles

---

## 🎨 Key Features

### Courses Page (3-Column Grid)
- **Desktop**: 3 columns per row
- **Tablet**: 2 columns per row
- **Mobile**: 1 column per row
- **Total**: 12 courses in 4 rows (desktop)
- **Scrolling**: Vertical only

### Core Values (About Page)
- **Layout**: 3-column image-based grid
- **Images**: Optimized, lazy-loaded
- **Interaction**: Hover to reveal text
- **Animations**: Zoom, rotate, shimmer, glow

### Navigation
- **Desktop**: Full horizontal menu
- **Mobile**: Hamburger menu
- **Dropdowns**: Z-index fixed, appear above content
- **Sticky**: Navbar stays at top

---

## 🔧 Common Tasks

### Add New Course
1. Open `src/pages/Courses.jsx`
2. Add object to `coursesData` array
3. Include: id, title, category, duration, seats, fees, image, description, highlights

### Modify Colors
1. Open `src/styles/global.css`
2. Edit CSS variables in `:root`
3. Colors: `--primary-color`, `--secondary-color`, `--accent-color`

### Add New Page
1. Create `src/pages/NewPage.jsx`
2. Create `src/pages/NewPage.css`
3. Add route in `src/App.jsx`
4. Add link in `src/components/Navbar.jsx`

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 1025px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Mobile */
@media (max-width: 768px) { }
```

---

## 🐛 Troubleshooting

### Horizontal Scrolling Appears
- Check for `overflow-x: scroll` in CSS
- Verify `width: 100%` and `max-width: 100vw` on containers
- Ensure no fixed-width elements exceed viewport

### Navbar Dropdowns Hidden
- Check z-index values (dropdowns: 99999, navbar: 10000)
- Verify no `overflow: hidden` on parent containers
- Ensure `overflow: visible` on navbar elements

### Flip Cards Not Working
- Desktop/tablet: Check hover state in CSS
- Mobile: Should show both sides stacked
- Verify `perspective: 1000px` on `.flip-card`

---

## 📊 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Footer.jsx
│   └── Footer.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── About.jsx
│   ├── About.css
│   ├── Courses.jsx
│   ├── Courses.css
│   └── ... (other pages)
├── styles/
│   ├── global.css
│   └── animations.css
├── App.jsx
└── main.jsx
```

---

## ✅ Completed Tasks

1. ✅ Core Values - Image-based vertical grid
2. ✅ Remove horizontal scrolling globally
3. ✅ Fix navbar dropdown z-index
4. ✅ Courses - 3-column vertical grid layout

---

## 📝 Documentation Files

- `COURSES_3_COLUMN_GRID_COMPLETE.md` - Courses implementation
- `PROJECT_STATUS_FINAL.md` - Complete project status
- `QUICK_REFERENCE.md` - This file
- `README.md` - Project overview

---

## 🎯 Testing URLs

- Home: http://localhost:3001/
- About: http://localhost:3001/about
- Courses: http://localhost:3001/courses
- Admissions: http://localhost:3001/admissions
- Contact: http://localhost:3001/contact

---

*Last updated: March 6, 2026*
