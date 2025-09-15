# Merge Studio - Architectural Design & Interior Solutions

A modern, responsive website for Merge Studio, a leading architectural design and interior solutions company based in Bangladesh. This website showcases the company's expertise in creating beautiful, functional spaces through comprehensive design services.

## 🏢 About Merge Studio

Merge Studio is where imagination meets precision. Since 2021, we've been shaping spaces that inspire, comfort, and endure. Our journey began with a simple vision: to merge creativity, functionality, and modern design into every project we touch.

## 🌟 Features

### 🎨 Modern Design
- **Responsive Layout**: Fully responsive design that works seamlessly across desktop, tablet, and mobile devices
- **Interactive Hero Section**: Dynamic image slider with smooth transitions and navigation controls
- **Professional Portfolio**: Filterable gallery showcasing various project categories
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions

### 🏗️ Services Showcase
- **Architectural Design**: Master planning and comprehensive architectural solutions
- **Interior Design**: Residential and commercial interiors with focus on beauty and functionality
- **Exterior & Landscape**: Exterior design and landscape architecture
- **Project Supervision**: Complete project management from concept to completion

### 📱 Interactive Features
- **Portfolio Filtering**: Dynamic filtering system for different project categories
- **Image Lightbox**: High-quality image galleries with lightbox functionality
- **Video Showcase**: Dedicated section for project videos and presentations
- **Team Profiles**: Meet our professional team with detailed profiles
- **Client Testimonials**: Rotating testimonials with smooth transitions
- **WhatsApp Integration**: Direct contact through WhatsApp floating button

### 🎯 Key Sections
1. **Hero Section**: Dynamic slider with company messaging
2. **Studio Showcase**: Overview of services and company philosophy
3. **Expertise Section**: Detailed breakdown of core competencies
4. **Services Features**: Six key service highlights with professional icons
5. **Portfolio Gallery**: Filterable project showcase with categories:
   - Residential Projects
   - Exterior Design
   - Office Interior
   - Restaurant Interior
6. **Process Section**: Four-step project workflow visualization
7. **Team Section**: Professional team member profiles
8. **Client Section**: Rotating client logos and testimonials
9. **Contact Information**: Multiple office locations and contact details

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup with proper structure
- **CSS3**: Modern styling with:
  - Flexbox and CSS Grid for layouts
  - CSS Transitions and Animations
  - Responsive design with media queries
  - Custom properties (CSS variables)
- **JavaScript (ES6+)**: Interactive functionality including:
  - Dynamic content switching
  - Smooth scrolling navigation
  - Modal and lightbox systems
  - Mobile-responsive hamburger menu
  - Portfolio filtering system
  - Testimonials slider
  - Image galleries

### External Resources
- **Font Awesome 6.4.0**: Professional icon library
- **Google Fonts**: Typography enhancement
- **Responsive Images**: Optimized image loading and display

## 📁 Project Structure

```
mergebd/
├── index.html              # Main homepage
├── about.html             # About us page
├── portfolio.html         # Portfolio showcase
├── services.html          # Services catalog
├── videos.html           # Project videos
├── styles.css            # Main stylesheet
├── script.js             # JavaScript functionality
├── Portfolio.pdf         # Company portfolio PDF
├── README.md             # Project documentation
└── image/                # Image assets
    ├── Logo.png          # Company logo
    ├── slide1-4.jpg/png  # Hero slider images
    ├── team photos/      # Team member photos
    ├── project images/   # Portfolio project images
    ├── client logos/     # Client testimonial photos
    └── service icons/    # Service category images
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Web server (for local development) or hosting platform

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mergebd.git
   cd mergebd
   ```

2. **Local Development**
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx http-server
   
   # Using PHP (if installed)
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deployment Options

#### GitHub Pages
1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (main/master)
4. Your site will be available at: `https://username.github.io/mergebd`

#### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on push to main branch
3. Custom domain configuration available

#### Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure proper file permissions
3. Configure domain if needed

## 🎨 Customization Guide

### Colors and Branding
The website uses a professional color scheme defined in CSS custom properties:

```css
:root {
    --primary-gold: #f4d03f;
    --secondary-gold: #d4a574;
    --dark-bg: #1a1a1a;
    --light-text: #ffffff;
    --accent-dark: #0f0f0f;
}
```

### Adding New Projects
1. **Add project images** to the `image/` directory
2. **Update portfolio section** in `index.html`:
   ```html
   <div class="portfolio-item [category]" data-category="[category]">
       <div class="portfolio-image">
           <img src="image/your-image.jpg" alt="Project Name">
           <div class="portfolio-overlay">
               <div class="portfolio-content">
                   <h3>Project Title</h3>
                   <p>Project Description</p>
               </div>
           </div>
       </div>
   </div>
   ```
3. **Update JavaScript galleries** in `script.js` for lightbox functionality

### Modifying Team Members
Update the team section in `index.html`:
```html
<div class="team-card">
    <img class="team-photo" src="image/member-photo.jpg" alt="Member Name" />
    <h3 class="team-name">Member Name</h3>
    <p class="team-role">Position Title</p>
    <p class="team-org">Merge Studio</p>
</div>
```

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

Key mobile features:
- Hamburger navigation menu
- Touch-friendly interface
- Optimized image loading
- Swipe-enabled sliders
- Mobile-optimized forms and buttons

## 🔧 Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 📞 Contact Information

**Merge Studio**
- **Dhaka Office**: Eastern Plaza, Hatirpool, Dhaka, Bangladesh
- **Chittagong Office**: 4th Floor, Jalal Plaza, Muradpur, Chittagong
- **Phone**: +880 1625-990701
- **Email**: mergestudiobd@gmail.com
- **Service Areas**: Dhaka, Chittagong, Sylhet, and across Bangladesh

### Social Media
- **Facebook**: [Merge47](https://www.facebook.com/Merge47)
- **Instagram**: [@merge_bd](https://www.instagram.com/merge_bd/)
- **YouTube**: [@mergebd](https://www.youtube.com/@mergebd)

## 🤝 Contributing

We welcome contributions to improve the website! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Merge Studio.

## 🙏 Acknowledgments

- **Team**: Hafizul Islam, Istiak Alam Mishu, Mahmudul Hasan, and the entire Merge Studio team
- **Clients**: All our valued clients who trusted us with their projects
- **Community**: The web development community for inspiration and best practices

## 📈 Performance Optimization

The website is optimized for performance with:
- **Lazy Loading**: Images load as needed
- **Minified Assets**: Compressed CSS and JavaScript
- **Optimized Images**: Properly sized and compressed images
- **Caching**: Browser caching for static assets
- **CDN**: External resources loaded from CDN

## 🔒 Security Features

- **HTTPS Ready**: Secure connection support
- **Input Validation**: Form validation and sanitization
- **XSS Protection**: Cross-site scripting prevention
- **Content Security**: Proper content security policies

---

**© 2024 Merge Studio. All rights reserved.**

*Transforming spaces, one project at a time.*
