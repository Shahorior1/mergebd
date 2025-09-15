// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Clients auto-scrolling slider
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.clients-track');
    if (!track) return;

    // Duplicate logos for seamless loop if needed
    const clones = track.innerHTML;
    track.innerHTML = track.innerHTML + clones;
});

// PDF Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const openPdfBtn = document.getElementById('openPdfModal');
    const closePdfBtn = document.getElementById('closePdfModal');
    const pdfModal = document.getElementById('pdfModal');
    const pdfViewer = document.getElementById('pdfViewer');
    const pdfFallback = document.getElementById('pdfFallback');
    
    if (openPdfBtn && pdfModal) {
        openPdfBtn.addEventListener('click', function() {
            pdfModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Check if PDF loads successfully after a short delay
            setTimeout(function() {
                checkPdfLoad();
            }, 2000);
        });
    }
    
    if (closePdfBtn && pdfModal) {
        closePdfBtn.addEventListener('click', function() {
            pdfModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Reset fallback when closing
            if (pdfFallback) {
                pdfFallback.style.display = 'none';
            }
        });
    }
    
    if (pdfModal) {
        pdfModal.addEventListener('click', function(e) {
            if (e.target === pdfModal) {
                pdfModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Reset fallback when closing
                if (pdfFallback) {
                    pdfFallback.style.display = 'none';
                }
            }
        });
    }

    function checkPdfLoad() {
        if (pdfViewer && pdfFallback) {
            try {
                // Try to access the iframe content
                const iframeDoc = pdfViewer.contentDocument || pdfViewer.contentWindow.document;
                
                // If we can't access it or it's blank, show fallback
                if (!iframeDoc || iframeDoc.body.innerHTML.trim() === '' || 
                    iframeDoc.documentElement.innerHTML.includes('about:blank')) {
                    pdfFallback.style.display = 'flex';
                }
            } catch (e) {
                // If there's a cross-origin error or other issue, show fallback
                console.log('PDF viewer fallback activated due to loading issues');
                pdfFallback.style.display = 'flex';
            }
        }
    }

    // Handle iframe load errors
    if (pdfViewer) {
        pdfViewer.addEventListener('error', function() {
            if (pdfFallback) {
                pdfFallback.style.display = 'flex';
            }
        });

        pdfViewer.addEventListener('load', function() {
            setTimeout(checkPdfLoad, 1000);
        });
    }
});

// Video Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoCards = document.querySelectorAll('.video-card');
    const videoModal = document.getElementById('videoModal');
    const closeVideoBtn = document.getElementById('closeVideoModal');
    const modalVideoTitle = document.getElementById('modalVideoTitle');
    
    videoCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const videoTitle = this.querySelector('.video-title').textContent;
            
            if (modalVideoTitle && videoModal) {
                modalVideoTitle.textContent = videoTitle;
                videoModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    if (closeVideoBtn && videoModal) {
        closeVideoBtn.addEventListener('click', function() {
            videoModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) {
                videoModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Image Slider Navigation
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const heroSection = document.querySelector('.hero');
    const indicators = document.querySelectorAll('.indicator');
    
    // Array of slide content (images and text)
    const slideContent = [
        {
            image: 'image/slide1.jpg',
            subtitle: 'OUR EXPERTISE FOR',
            title: 'ONE STOP SOLUTION',
            description: 'Experience the art of interior design with our expert designers who will curate a space that expresses elegance, comfort, and sophistication.<br>Discover the perfect balance of aesthetics and functionality in every corner.'
        },
        {
            image: 'image/slide2.png',
            subtitle: 'CREATING BEAUTIFUL',
            title: 'ELEGANT INTERIOR',
            description: 'Each client is unique and we take the time to listen and understand your specific requirements.<br>Your satisfaction is our priority, and we tailor our services to exceed your expectations with free consultation.'
        },
        {
            image: 'image/slide3.jpg',
            subtitle: 'MAKING',
            title: 'YOUR LIFE EASIER',
            description: 'We believe that every detail matters. From the selection of materials to the placement of furniture,<br>we ensure reasonable pricing to create a space that is both stunning and functional.'
        },
        {
            image: 'image/slide4.png',
            subtitle: 'TRANSFORMING SPACES',
            title: 'BEYOND EXPECTATIONS',
            description: 'Our commitment to excellence drives us to deliver interior solutions that not only meet but exceed your vision.<br>Let us transform your space into a masterpiece of design and functionality.'
        }
    ];
    
    let currentSlide = 0;
    const totalSlides = slideContent.length;

    // Get text elements
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');

    function updateSlide() {
        const currentContent = slideContent[currentSlide];
        
        // Update the background image with smooth transition
        heroSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${currentContent.image}')`;
        
        // Update text content with fade effect
        heroSubtitle.style.opacity = '0';
        heroTitle.style.opacity = '0';
        heroDescription.style.opacity = '0';
        
        setTimeout(function() {
            heroSubtitle.textContent = currentContent.subtitle;
            heroTitle.textContent = currentContent.title;
            heroDescription.innerHTML = currentContent.description;
            
            heroSubtitle.style.opacity = '1';
            heroTitle.style.opacity = '1';
            heroDescription.style.opacity = '1';
        }, 200);
        
        // Update indicators
        indicators.forEach(function(indicator, index) {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        console.log('Current slide:', currentSlide, 'Content:', currentContent.title);
    }

    // Auto-slide functionality (optional)
    function autoSlide() {
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        updateSlide();
    }

    // Auto-slide every 5 seconds (optional - you can remove this if you don't want auto-slide)
    setInterval(autoSlide, 5000);

    prevButton.addEventListener('click', function() {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
        updateSlide();
    });

    nextButton.addEventListener('click', function() {
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        updateSlide();
    });

    // Add click functionality to indicators
    indicators.forEach(function(indicator, index) {
        indicator.addEventListener('click', function() {
            currentSlide = index;
            updateSlide();
        });
    });

    // Initialize with first slide
    updateSlide();
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
    // Footer year
    var yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initialize testimonials slider after a short delay
    setTimeout(function() {
        initTestimonialsSlider();
    }, 500);
});

// Add hover effects to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .nav-arrow');
    
    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('nav-arrow') ? 
                'translateY(-50%) scale(1.1)' : 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('nav-arrow') ? 
                'translateY(-50%)' : 'translateY(0)';
        });
    });
});

// WhatsApp button click tracking
document.addEventListener('DOMContentLoaded', function() {
    const whatsappButton = document.querySelector('.whatsapp-float a');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('click', function() {
            console.log('WhatsApp button clicked');
            // You can add analytics tracking here
        });
    }
});

// Video play button functionality
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const videoCard = this.closest('.video-card');
            const videoTitle = videoCard.querySelector('.video-title').textContent;
            
            // Show alert for demo purposes
            // In a real application, you would open a video player or modal
            alert('Playing video: ' + videoTitle + '\n\nIn a real application, this would open a video player.');
            
            console.log('Video play button clicked:', videoTitle);
        });
    });
    
    // Add hover effects for video cards
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Portfolio filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter portfolio items
            portfolioItems.forEach(function(item) {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    
                    // Animate in
                    setTimeout(function() {
                        item.style.transition = 'all 0.3s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.transition = 'all 0.3s ease';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    
                    // Hide after animation
                    setTimeout(function() {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            
            console.log('Portfolio filter applied:', filterValue);
        });
    });
    
    // Portfolio page lightbox functionality
    const portfolioLightboxModal = document.getElementById('portfolioLightboxModal');
    const closeLightbox = document.getElementById('closeLightbox');
    const lightboxGrid = document.getElementById('lightboxGrid');
    
    // Project-specific image collections for portfolio page - each project shows only its own images
    const portfolioProjectGalleries = {
        'ARCHITECTURE DESIGN': [
            // Add your Architecture Design project images here
            'image/architecture_01.jpg',
            'image/architecture_02.jpg',
            'image/architecture_03.jpg',
            'image/architecture_04.jpg',
            'image/architecture_05.jpg',
            'image/architecture_06.jpg',
            'image/architecture_07.jpg',
            'image/architecture_08.jpg'
        ],
        'CONSTRUCTION': [
            // Add your Construction project images here
            'image/construction_01.jpg',
            'image/construction_02.jpg',
            'image/construction_03.jpg',
            'image/construction_04.jpg',
            'image/construction_05.jpg',
            'image/construction_06.jpg',
            'image/construction_07.jpg',
            'image/construction_08.jpg',
            'image/construction_09.jpg'
        ],
        'CONSULTANCY': [
            // Add your Consultancy project images here
            'image/consultancy_01.jpg',
            'image/consultancy_02.jpg',
            'image/consultancy_03.jpg',
            'image/consultancy_04.jpg',
            'image/consultancy_05.jpg',
            'image/consultancy_06.jpg',
            'image/consultancy_07.jpg',
            'image/consultancy_08.jpg'
        ],
        'RESIDENTIAL INTERIOR': [
            // Add your Residential Interior project images here
            'image/residential_interior_01.jpg',
            'image/residential_interior_02.jpg',
            'image/residential_interior_03.jpg',
            'image/residential_interior_04.jpg',
            'image/residential_interior_05.jpg',
            'image/residential_interior_06.jpg',
            'image/residential_interior_07.jpg',
            'image/residential_interior_08.jpg',
            'image/residential_interior_09.jpg'
        ],
        'COMMERCIAL DESIGN': [
            // Add your Commercial Design project images here
            'image/commercial_01.jpg',
            'image/commercial_02.jpg',
            'image/commercial_03.jpg',
            'image/commercial_04.jpg',
            'image/commercial_05.jpg',
            'image/commercial_06.jpg',
            'image/commercial_07.jpg',
            'image/commercial_08.jpg'
        ],
        'EXTERIOR SETUP': [
            // Add your Exterior Setup project images here
            'image/exterior_01.jpg',
            'image/exterior_02.jpg',
            'image/exterior_03.jpg',
            'image/exterior_04.jpg',
            'image/exterior_05.jpg',
            'image/exterior_06.jpg',
            'image/exterior_07.jpg',
            'image/exterior_08.jpg',
            'image/exterior_09.jpg'
        ],
        'LUXURY BEDROOM': [
            // Add your Luxury Bedroom project images here
            'image/luxury_bedroom_01.jpg',
            'image/luxury_bedroom_02.jpg',
            'image/luxury_bedroom_03.jpg',
            'image/luxury_bedroom_04.jpg',
            'image/luxury_bedroom_05.jpg',
            'image/luxury_bedroom_06.jpg',
            'image/luxury_bedroom_07.jpg',
            'image/luxury_bedroom_08.jpg'
        ],
        'OFFICE COMPLEX': [
            // Add your Office Complex project images here
            'image/office_complex_01.jpg',
            'image/office_complex_02.jpg',
            'image/office_complex_03.jpg',
            'image/office_complex_04.jpg',
            'image/office_complex_05.jpg',
            'image/office_complex_06.jpg',
            'image/office_complex_07.jpg',
            'image/office_complex_08.jpg',
            'image/office_complex_09.jpg'
        ],
        'MODERN VILLA': [
            // Add your Modern Villa project images here
            'image/modern_villa_01.jpg',
            'image/modern_villa_02.jpg',
            'image/modern_villa_03.jpg',
            'image/modern_villa_04.jpg',
            'image/modern_villa_05.jpg',
            'image/modern_villa_06.jpg',
            'image/modern_villa_07.jpg',
            'image/modern_villa_08.jpg'
        ]
    };
    
    // Portfolio item click functionality
    portfolioItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const title = this.querySelector('.portfolio-content h3').textContent.trim();
            
            // Get gallery images for this project
            const galleryImages = portfolioProjectGalleries[title] || [
                'image/slide1.jpg', 'image/slide2.png', 'image/slide3.jpg', 'image/slide4.png',
                'image/Arman_uddin.png', 'image/Banasree_Dhaka.jpg', 'image/Restaurant.jpg', 'image/Khulshi.jpg',
                'image/younoos_centre.jpg', 'image/dhanmondi_project.jpg'
            ];
            
            // Populate lightbox grid
            if (lightboxGrid) {
                lightboxGrid.innerHTML = '';
                
                galleryImages.forEach(function(imageSrc, index) {
                    const imageContainer = document.createElement('div');
                    imageContainer.className = 'lightbox-image';
                    
                    imageContainer.innerHTML = `
                        <img src="${imageSrc}" alt="Project image ${index + 1}">
                        <div class="lightbox-overlay">
                            <div class="lightbox-icon">🔍</div>
                        </div>
                    `;
                    
                    // Add click event to each image for individual viewing
                    imageContainer.addEventListener('click', function(e) {
                        e.stopPropagation();
                        // Here you could add individual image viewing functionality
                        console.log('Viewing image:', imageSrc);
                    });
                    
                    lightboxGrid.appendChild(imageContainer);
                });
            }
            
            // Show lightbox modal
            if (portfolioLightboxModal) {
                portfolioLightboxModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close lightbox functionality for portfolio page
    if (closeLightbox) {
        closeLightbox.addEventListener('click', function() {
            if (portfolioLightboxModal) {
                portfolioLightboxModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close on background click for portfolio page
    if (portfolioLightboxModal) {
        portfolioLightboxModal.addEventListener('click', function(e) {
            if (e.target === portfolioLightboxModal) {
                portfolioLightboxModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Testimonials Slider Function
function initTestimonialsSlider() {
    let currentTestimonial = 0;
    let autoSlideInterval;
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');

    if (testimonialCards.length === 0) {
        return; // Exit if no testimonials found
    }

    function showTestimonial(index) {
        // Remove active class from all cards and dots
        testimonialCards.forEach(card => {
            card.classList.remove('active');
            card.style.display = 'none';
        });
        testimonialDots.forEach(dot => dot.classList.remove('active'));

        // Show current testimonial
        if (testimonialCards[index]) {
            testimonialCards[index].style.display = 'block';
            setTimeout(() => {
                testimonialCards[index].classList.add('active');
            }, 50);
        }
        if (testimonialDots[index]) {
            testimonialDots[index].classList.add('active');
        }
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextTestimonial, 4000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) {
            clearInterval(autoSlideInterval);
        }
    }

    // Event listeners for navigation buttons
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            stopAutoSlide();
            nextTestimonial();
            startAutoSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            stopAutoSlide();
            prevTestimonial();
            startAutoSlide();
        });
    }

    // Event listeners for dots
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopAutoSlide();
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
            startAutoSlide();
        });
    });

    // Initialize first testimonial
    showTestimonial(0);
    
    // Start auto-slide
    startAutoSlide();

    // Pause auto-slide on hover
    const testimonialSection = document.querySelector('.testimonials-slider');
    if (testimonialSection) {
        testimonialSection.addEventListener('mouseenter', stopAutoSlide);
        testimonialSection.addEventListener('mouseleave', startAutoSlide);
    }
}

// Home Portfolio Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
    const homePortfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioLightboxModal = document.getElementById('portfolioLightboxModal');
    const closePortfolioLightbox = document.getElementById('closePortfolioLightbox');
    const portfolioLightboxGrid = document.getElementById('portfolioLightboxGrid');
    
    // Project-specific image collections - each project shows only its own images
    const homeProjectGalleries = {
        'Satkania Project 10': [
            // Add your Satkania Project 10 images here
            'image/satkania_01.jpg',
            'image/satkania_02.jpg', 
            'image/satkania_03.jpg',
            'image/satkania_04.jpg',
            'image/satkania_05.jpg',
            'image/satkania_06.jpg',
            'image/satkania_07.jpg',
            'image/satkania_08.jpg',
            'image/satkania_09.jpg',
            'image/satkania_10.jpg',
            'image/satkania_11.jpg',
            'image/satkania_12.jpg',
            'image/satkania_13.jpg'
        ],
        'Restaurant ': [
            // Add your Restaurant project images here
            'image/restaurant_01.jpg',
            'image/restaurant_02.jpg',
            'image/restaurant_03.jpg',
            'image/restaurant_04.jpg',
            'image/restaurant_05.jpg',
            'image/restaurant_06.jpg',
            'image/restaurant_07.jpg',
            'image/restaurant_08.jpg'
        ],
        'Banasree Dhaka': [
            // Add your Banasree Dhaka project images here
            'image/banasree_01.jpg',
            'image/banasree_02.jpg',
            'image/banasree_03.jpg',
            'image/banasree_04.jpg',
            'image/banasree_05.jpg',
            'image/banasree_06.jpg',
            'image/banasree_07.jpg',
            'image/banasree_08.jpg',
            'image/banasree_09.jpg'
        ],
        'Residential House': [
            // Add your Residential House project images here
            'image/residential_01.jpg',
            'image/residential_02.jpg',
            'image/residential_03.jpg',
            'image/residential_04.jpg',
            'image/residential_05.jpg',
            'image/residential_06.jpg',
            'image/residential_07.jpg',
            'image/residential_08.jpg'
        ],
        'Project Khulshi': [
            // Add your Project Khulshi images here
            'image/khulshi_01.jpg',
            'image/khulshi_02.jpg',
            'image/khulshi_03.jpg',
            'image/khulshi_04.jpg',
            'image/khulshi_05.jpg',
            'image/khulshi_06.jpg',
            'image/khulshi_07.jpg',
            'image/khulshi_08.jpg',
            'image/khulshi_09.jpg'
        ],
        'Commercial Building': [
            // Add your Commercial Building images here
            'image/commercial_01.jpg',
            'image/commercial_02.jpg',
            'image/commercial_03.jpg',
            'image/commercial_04.jpg',
            'image/commercial_05.jpg',
            'image/commercial_06.jpg',
            'image/commercial_07.jpg',
            'image/commercial_08.jpg',
            'image/commercial_09.jpg'
        ],
        'Magura group': [
            // Add your Magura group project images here
            'image/magura_01.jpg',
            'image/magura_02.jpg',
            'image/magura_03.jpg',
            'image/magura_04.jpg',
            'image/magura_05.jpg'
        
        ],
        'Signature kacch': [
            // Add your Signature kacch project images here
            'image/signature_01.jpg',
            'image/signature_02.jpg',
            'image/signature_03.jpg',
            'image/signature_04.jpg',
            'image/signature_05.jpg',
            'image/signature_06.jpg',
            'image/signature_07.jpg',
            'image/signature_08.jpg',
            'image/signature_09.jpg'
        ],
        'Dhanmondi project': [
            // Add your Dhanmondi project images here
            'image/dhanmondi_01.jpg',
            'image/dhanmondi_02.jpg',
            'image/dhanmondi_03.jpg',
            'image/dhanmondi_04.jpg',
            'image/dhanmondi_05.jpg',
            'image/dhanmondi_06.jpg',
            'image/dhanmondi_07.jpg',
            'image/dhanmondi_08.jpg'
        ]
    };
    
    // Add click events to home portfolio items
    homePortfolioItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const title = this.querySelector('.portfolio-content h3').textContent.trim();
            
            // Get gallery images for this project
            const galleryImages = homeProjectGalleries[title] || [
                'image/slide1.jpg', 'image/slide2.png', 'image/slide3.jpg', 'image/slide4.png',
                'image/Arman_uddin.png', 'image/Banasree_Dhaka.jpg', 'image/Restaurant.jpg', 'image/Khulshi.jpg',
                'image/younoos_centre.jpg', 'image/dhanmondi_project.jpg'
            ];
            
            // Populate lightbox grid
            if (portfolioLightboxGrid) {
                portfolioLightboxGrid.innerHTML = '';
                
                galleryImages.forEach(function(imageSrc, index) {
                    const imageContainer = document.createElement('div');
                    imageContainer.className = 'lightbox-image';
                    
                    imageContainer.innerHTML = `
                        <img src="${imageSrc}" alt="Project image ${index + 1}">
                        <div class="lightbox-overlay">
                            <div class="lightbox-icon">🔍</div>
                        </div>
                    `;
                    
                    // Add click event to each image for individual viewing
                    imageContainer.addEventListener('click', function(e) {
                        e.stopPropagation();
                        // Here you could add individual image viewing functionality
                        console.log('Viewing image:', imageSrc);
                    });
                    
                    portfolioLightboxGrid.appendChild(imageContainer);
                });
            }
            
            // Show lightbox modal
            if (portfolioLightboxModal) {
                portfolioLightboxModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close lightbox functionality
    if (closePortfolioLightbox) {
        closePortfolioLightbox.addEventListener('click', function() {
            portfolioLightboxModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close on background click
    if (portfolioLightboxModal) {
        portfolioLightboxModal.addEventListener('click', function(e) {
            if (e.target === portfolioLightboxModal) {
                portfolioLightboxModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close on Escape key - handle both home and portfolio lightboxes
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Check home portfolio lightbox
            const homePortfolioModal = document.getElementById('portfolioLightboxModal');
            if (homePortfolioModal && homePortfolioModal.style.display === 'block') {
                homePortfolioModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            // Check portfolio page lightbox
            if (portfolioLightboxModal && portfolioLightboxModal.style.display === 'block') {
                portfolioLightboxModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// Process Steps Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const processSteps = document.querySelectorAll('.step-circle');
    console.log('Found process steps:', processSteps.length);
    
    processSteps.forEach(function(step, index) {
        step.addEventListener('click', function() {
            console.log('Clicked step:', index + 1);
            
            // Toggle between active (golden) and inactive (black with golden hover)
            if (this.classList.contains('step-circle-inactive')) {
                this.classList.remove('step-circle-inactive');
                console.log('Removed inactive class - now golden');
            } else {
                this.classList.add('step-circle-inactive');
                console.log('Added inactive class - now black');
            }
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
        
        // Add touch support for mobile
        step.addEventListener('touchstart', function(e) {
            e.preventDefault();
            this.click();
        });
    });
});

