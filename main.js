
        // All the JavaScript from the original code remains the same
        // Including publications data, events data, gallery data, and functionality
        
        // Publications data
        const publications = {
            webArticles: [
                {
                    title: "Reporters",
                    excerpt: "Natanem, owner of Natanem's Couture, is a multi-facetted fashion designer who has recently joined the fashion industry with a bold and memorable debut. The designer has a unique style of assembling clothes that manage to combine culture, structure and contemporary looks.",
                    url: "https://www.thereporterethiopia.com/23862/",
                    image: "Img/about.jpg",
                    badge: "Featured"
                },
                {
                    title: "Capital Magazine",
                    excerpt: "Custom-made and ready to wear clothing",
                    url: "https://capitalethiopia.com/2024/09/17/natanem-wondwossen/?amp=1",
                    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Shega",
                    excerpt: "Natanem designs and manufactures fashionable wear to meet specific requirements. Every cloth is made with carefully selected garments and authentic storytelling embroidery.",
                    url: "https://shega.co/news/ethiopias-fashion-entrepreneurs-get-a-boost-from-creative-dna-initiative",
                    image: "Img/shega.jpg",
                    badge: "Exclusive"
                },
                {
                    title: "Tadias Magazine",
                    excerpt: "Addis Ababa's Runway to Cultural Nexus: HAFW 2024 Shaping the Global Fashion Scene",
                    url: "http://www.tadias.com/02/02/2024/addis-ababas-runway-to-cultural-nexus-hafw-2024-shaping-the-global-fashion-scene/",
                    image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Vogue",
                    excerpt: "Cultural heritage meets modern design",
                    url: "https://www.vogue.com/article/10-designers-addis-ababa-hub-of-africa-fashion-week",
                    image: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Fashion Scout",
                    excerpt: "Natanem Couture is where elegance meets style.",
                    url: "https://fashionscout.com/page-1-creative-dna-eth-1-1-1-1-1-1",
                    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
            ],
            instagram: [
                {
                    title: "Miss World",
                    excerpt: "Telangana, where dreams are crowned by Natanem Couture",
                    url: "https://www.instagram.com/p/DKaOtA6sBIR/?igsh=MWY0aGx2bXp1MG5iaA%3D%3D",
                    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Miss Earth",
                    excerpt: "natanem_couture inspired to show our unique flower the Adey ababa only found in Ethiopia for the national costume competition",
                    url: "https://www.instagram.com/reel/C09xbKtvZGE/?igsh=bXB2b3JnYmd4ejJj",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Guzang",
                    excerpt: "Ethiopian based Natanem Couture's capsule collection-Where Elegance Meets Style",
                    url: "https://www.instagram.com/p/CzolI4YOOvV/?img_index=1&igsh=MXg3YmV5aG9ybGYyaA%3D%3D",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Hub of Africa",
                    excerpt: "CDNA program this brand Brought amazing pieces @natanem_couture giving a new perspective on demure fashion ",
                    url: "https://www.instagram.com/p/C2P2I3Ao-qj/?igsh=MWwxOHhjdnVkbm5taw%3D%3D",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "British Council",
                    excerpt: "Meet Creative DNA: Ethiopia designer Natanem Wondwossen, the mind behind the custom fashion brand ",
                    url: "https://www.instagram.com/reel/CxSTZkVIWC6/?igsh=eTc4am1nOWd6bDJn",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "AFRICAN MONIQUE",
                    excerpt: "Our next High Tea x Fashion event is just 4 days away!",
                    url: "https://www.instagram.com/p/CzEY8GJIR0y/?igsh=MXhlZWJpdzg2N2p0Ng%3D%3D",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "FASHION PHENOMENALS",
                    excerpt: "A night to remember. Where we took music and fashion experience to the next level. ",
                    url: "https://www.instagram.com/tv/Ce9I_egoHjt/?igsh=MWRxZ29sdXphejF4Yw%3D%3D",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "ALLIANCE ETHIOFRANCIES",
                    excerpt: "Natanem is a young and enthusiastic Ethiopian designer born and raised in Addis Ababa, who is working to make an impact in Ethiopia and abroad with her unique and elegant style. ",
                    url: "https://www.instagram.com/p/CZKF1d-qWUl/?igsh=am1vYmRjeWk4MzVu",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "BAF",
                    excerpt: "Natanem Couture from Ethiopia will be one of our presenting brands during this Thursday's Media Equity event.",
                    url: "https://www.instagram.com/p/C3SzC4II-iA/?igsh=Z210eGYzbWg3emNk",
                    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
            ],
            youtube: [
                {
                    title: "HABESHA BEER",
                    url: "https://www.youtube.com/watch?v=R383p9u347A",
                    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "DINK TV",
                    excerpt: "Natanem interview at Techno Event",
                    url: "https://youtu.be/ByDCL5oyDqo",
                    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "FENDISHA ENTERTAINMENT",
                    excerpt: "Interview with our creative director",
                    url: "https://www.youtube.com/watch?v=designer-interview",
                    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "EBS",
                    excerpt: "Natanem Interview on EBS TV",
                    url: "https://youtu.be/PjqN9dwKXAg?si=RnFu0z7MtwgE-AOM",
                    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Design + thought prodcast",
                    excerpt: "Natanem Interview in Design + Thought Podcast",
                    url: "https://youtu.be/mjQ7o34dTXs",
                    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                },
                {
                    title: "Nesant",
                    excerpt: "Natanem Interview in Nesant Podcast",
                    url: "https://youtu.be/UzPE2tp1mi8?si=sAq9gsu9jotIKpNx",
                    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                }
            ]
        };

        // Function to create publication card
        function createPublicationCard(pub, showPlatformIcon = false) {
            return `
                <div class="burgundy-bg text-white shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 rounded-lg">
                    <div class="relative h-48 overflow-hidden">
                        <img src="${pub.image}" alt="${pub.title}" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        ${pub.badge ? `<div class="absolute ${pub.badge === 'Exclusive' ? 'top-4 right-4' : 'bottom-4 left-4'}">
                            <span class="${pub.badge === 'Exclusive' ? 'bg-burgundy text-white' : 'bg-gold text-burgundy'} px-2 py-1 text-xs font-bold">${pub.badge}</span>
                        </div>` : ''}
                        ${showPlatformIcon ? `
                        <div class="absolute top-4 left-4 bg-black bg-opacity-70 rounded-full p-2">
                            <i class="${pub.platform === 'instagram' ? 'fab fa-instagram' : 'fab fa-youtube'} text-white"></i>
                        </div>` : ''}
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gold mb-2 font-serif">${pub.title}</h3>
                        <p class="text-burgundy mb-4">"${pub.excerpt}"</p>
                        <a href="${pub.url}" target="_blank" class="inline-flex items-center text-gold hover:text-burgundy font-medium">
                            ${pub.platform === 'youtube' ? 'Watch Video' : pub.platform === 'instagram' ? 'View Post' : 'Read Article'}
                            <i class="fas fa-external-link-alt ml-2 text-sm"></i>
                        </a>
                    </div>
                </div>
            `;
        }

        // Events data
        const eventsData = {
            "events": [
            {
                "id": 1,
                "title": "Hub of africa addis",
                "date": "January 28, 2024",
                "description": "These moments celebrate our fusion of tradition and modernity, bringing cultural storytelling to life.",
                "location": "African Fashion Center",
                "image": "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            },
            {
                "id": 2,
                "title": "Upcoming Event",
                "date": "November 5-7, 2025",
                "description": "Private viewing of our latest collection at the historic Hôtel de Crillon with the designer present.",
                "location": "Addis Ababa",
                "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                "id": 3,
                "title": "Upcoming Event",
                "date": "March 15-17, 2025",
                "description": "Private viewing of our latest collection at the historic Hôtel de Crillon with the designer present.",
                "location": "Federal Palace Hotel, Lagos",
                "image": "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            }
            ]
        };

        // Gallery data
        const galleryData = {
            1: {
                title: "Hub of africa addis",
                date: "January 28, 2024",
                location: "African Fashion Center",
                description: "Natanem Couture made a stunning debut at the prestigious Hub of Africa Addis fashion week, showcasing our 'Heritage Reimagined' collection. The runway presentation featured 25 looks that blended traditional Ethiopian textiles with contemporary silhouettes, earning standing ovations from the international fashion press in attendance. Our designer was honored with the 'Emerging Talent' award for this groundbreaking collection that paid homage to Ethiopian craftsmanship while pushing the boundaries of modern African fashion.",
                images: [
                    "Img/runwayImg1.jpg",
                    "Img/runwayImg2.jpg",
                    "Img/runwayImg3.jpg",
                    "Img/runwayImg4.jpg",
                    "Img/runwayImg5.jpg",
                    "Img/runwayImg6.jpg",
                    "Img/runwayImg7.jpg",
                    "Img/runwayImg8.jpg",
                    "Img/runwayImg9.jpg",
                    "Img/runwayImg10.jpg",
                    "Img/runwayImg11.jpg",
                    "Img/runwayImg12.jpg",
                    "Img/runwayImg13.jpg",
                    "Img/runwayImg14.jpg",
                    "Img/runwayImg15.jpg",
                    "Img/runwayImg16.jpg",
                    "Img/runwayImg17.jpg",
                    "Img/runwayImg18.jpg",
                ]
            },
            2: {
                title: "Upcoming Event",
                date: "November 5-7, 2025",
                location: "Addis Ababa",
                description: "We're thrilled to announce our upcoming exclusive event in Addis Ababa this November. This invite-only presentation will unveil our Spring/Summer 2026 collection 'Echoes of the Nile', featuring innovative fabric treatments developed in collaboration with Ethiopian textile artisans. The three-day event will include a runway show, private appointments with our design team, and an exhibition of the traditional craftsmanship techniques that inspire our work. Limited spaces available for VIP clients and press.",
                images: [
                    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ]
            }
        };

        // Additional scroll animation
        document.addEventListener('DOMContentLoaded', function() {
            // Scroll reveal animation
            const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
            
            const scrollReveal = function() {
                scrollRevealElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('revealed');
                    }
                });
            };
            
            window.addEventListener('scroll', scrollReveal);
            scrollReveal(); // Check on load
            
            // Navbar scroll effect
            const nav = document.getElementById('main-nav');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    nav.classList.add('nav-scrolled');
                } else {
                    nav.classList.remove('nav-scrolled');
                }
            });
            
            // Mobile menu functionality
            const mobileMenuButton = document.querySelector('.mobile-menu-button');
            mobileMenuButton.addEventListener('click', function() {
                // Create mobile menu overlay if it doesn't exist
                let mobileMenu = document.getElementById('mobile-menu');
                if (!mobileMenu) {
                    mobileMenu = document.createElement('div');
                    mobileMenu.id = 'mobile-menu';
                    mobileMenu.className = 'fixed inset-0 bg-white z-50 flex flex-col items-center justify-center lg:hidden';
                    mobileMenu.innerHTML = `
                        <button class="absolute top-6 right-6 text-3xl text-darkGray">
                            <i class="fas fa-times"></i>
                        </button>
                        <div class="flex flex-col space-y-8 text-center">
                            <a href="#our-collections-section" class="font-serif text-2xl text-darkGray hover:text-gold transition-colors duration-300">NEW</a>
                            <a href="#our-collections-section" class="font-serif text-2xl text-darkGray hover:text-gold transition-colors duration-300">WOMEN</a>
                            <a href="#our-collections-section" class="font-serif text-2xl text-darkGray hover:text-gold transition-colors duration-300">MEN</a>
                            <a href="#our-collections-section" class="font-serif text-2xl text-darkGray hover:text-gold transition-colors duration-300">HATS</a>
                            <a href="#join-us" class="font-serif text-2xl text-darkGray hover:text-gold transition-colors duration-300">JOIN US</a>
                            <a href="./pages/Events.html" class="font-serif text-2xl text-darkGray hover:text-gold transition-colors duration-300">UPCOMING EVENTS</a>

                        </div>
                    `;
                    document.body.appendChild(mobileMenu);
                    
                    // Close mobile menu
                    mobileMenu.querySelector('button').addEventListener('click', function() {
                        mobileMenu.remove();
                    });
                }
            });

            // Initialize publications when DOM is loaded
            // Add platform info to each publication
            publications.webArticles.forEach(pub => pub.platform = 'web');
            publications.instagram.forEach(pub => pub.platform = 'instagram');
            publications.youtube.forEach(pub => pub.platform = 'youtube');
            
            // Load all web articles
            const articlesContainer = document.getElementById('articles-container');
            publications.webArticles.forEach(pub => {
                articlesContainer.innerHTML += createPublicationCard(pub);
            });
            
            // Load all Instagram posts
            const instagramContainer = document.getElementById('instagram-container');
            publications.instagram.forEach(pub => {
                instagramContainer.innerHTML += createPublicationCard(pub, true);
            });
            
            // Load all YouTube videos
            const youtubeContainer = document.getElementById('youtube-container');
            publications.youtube.forEach(pub => {
                youtubeContainer.innerHTML += createPublicationCard(pub, true);
            });
            
            // Tab functionality
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remove active class from all buttons and tabs
                    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active', 'border-b-2', 'border-burgundy'));
                    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
                    
                    // Add active class to clicked button
                    this.classList.add('active', 'border-b-2', 'border-burgundy');
                    
                    // Show corresponding tab
                    const tabId = this.getAttribute('data-tab') + '-tab';
                    document.getElementById(tabId).classList.remove('hidden');
                });
            });

            // Events functionality
            const eventsContainer = document.getElementById('events-container');

            eventsData.events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'bg-white shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer event-card rounded-lg';
                eventCard.setAttribute('data-event', event.id);

                eventCard.innerHTML = `
                <div class="relative h-64 overflow-hidden">
                    <img src="${event.image}" alt="${event.title}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div class="p-6">
                    <div class="flex items-center text-gold mb-2">
                    <i class="far fa-calendar-alt mr-2"></i>
                    <span>${event.date}</span>
                    </div>
                    <h3 class="text-xl font-bold text-burgundy mb-2 font-serif">${event.title}</h3>
                    <p class="text-gray-600 mb-4">${event.description}</p>
                    <div class="flex justify-between items-center">
                    <div class="flex items-center text-sm text-gray-500">
                        <i class="fas fa-map-marker-alt mr-1"></i>
                        <span>${event.location}</span>
                    </div>
                    <a href="#" class="text-gold hover:text-burgundy font-medium">View Gallery</a>
                    </div>
                </div>
                `;

                eventsContainer.appendChild(eventCard);
            });

            // Gallery functionality
            const galleryModal = document.getElementById('galleryModal');
            const closeGalleryBtn = document.getElementById('closeGallery');
            const eventCards = document.querySelectorAll('.event-card');
            const eventNavBtns = document.querySelectorAll('.event-nav-btn');
            
            // Function to load gallery data
            function loadGallery(eventId) {
                const eventData = galleryData[eventId];
                if (!eventData) return;
                
                // Update modal header
                document.getElementById('galleryTitle').textContent = eventData.title;
                document.getElementById('galleryDate').textContent = eventData.date;
                document.getElementById('galleryLocation').textContent = eventData.location;
                document.getElementById('galleryDescription').textContent = eventData.description;
                
                // Load images
                const galleryContainer = document.getElementById('galleryContainer');
                galleryContainer.innerHTML = '';
                
                eventData.images.forEach(imageUrl => {
                    galleryContainer.innerHTML += `
                        <div class="relative group overflow-hidden rounded-lg">
                            <img src="${imageUrl}" alt="${eventData.title}" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span class="font-serif text-3xl text-center mb-12 gold-text">${eventData.title}</span>
                            </div>
                        </div>
                    `;
                });
                
                // Update active nav button
                eventNavBtns.forEach(btn => {
                    btn.classList.toggle('bg-gold', btn.dataset.event === eventId);
                    btn.classList.toggle('text-burgundy', btn.dataset.event === eventId);
                    btn.classList.toggle('text-lightGold', btn.dataset.event !== eventId);
                });
            }
            
            // Event card click handlers
            eventCards.forEach(card => {
                card.addEventListener('click', function() {
                    const eventId = this.dataset.event;
                    loadGallery(eventId);
                    galleryModal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden';
                });
            });
            
            // Gallery navigation click handlers
            eventNavBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const eventId = this.dataset.event;
                    loadGallery(eventId);
                });
            });
            
            // Close gallery handler
            closeGalleryBtn.addEventListener('click', function() {
                galleryModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
            
            // Close when clicking outside content
            galleryModal.addEventListener('click', function(e) {
                if (e.target === galleryModal) {
                    galleryModal.classList.add('hidden');
                    document.body.style.overflow = 'auto';
                }
            });

            // Product category functionality
            const productsPerLoad = 6; // Number of products to show initially and load more
            let displayedProductCounts = {}; // To keep track of how many products are currently shown per category
            let activeCategory = 'new'; // Keep track of the currently active category

            // DOM elements
            const categoryButtons = document.querySelectorAll('.category-btn');
            const productGrids = document.querySelectorAll('#category-products > div[id$="-products"]');
            const mainLoadMoreBtn = document.getElementById('main-load-more-btn');
            const searchIcon = document.getElementById('search-icon');
            const navbarSearchContainer = document.getElementById('navbar-search-container');
            const navbarSearchInput = document.getElementById('navbar-search-input');
            const collectionsSection = document.getElementById('our-collections-section'); // Select the "OUR COLLECTIONS" section

            // --- Helper Functions ---

            /**
             * Initializes the display for a given category grid:
             * Hides all products, then shows the first 'productsPerLoad' items.
             * Updates displayedProductCounts for the category.
             * Manages the visibility of the main "Load More" button.
             * @param {HTMLElement} categoryGrid - The div element containing products for a category.
             */
            function initializeCategoryDisplay(categoryGrid) {
                const category = categoryGrid.id.replace('-products', '');
                const cards = Array.from(categoryGrid.querySelectorAll('.product-card'));

                cards.forEach(card => card.style.display = 'none'); // Hide all

                const initialCount = Math.min(cards.length, productsPerLoad);
                for (let i = 0; i < initialCount; i++) {
                    cards[i].style.display = 'block';
                }
                displayedProductCounts[category] = initialCount;

                // Update main load more button state
                updateLoadMoreButton(category, cards.length);
            }

            /**
             * Updates the visibility and data-category of the single main-load-more-btn.
             * @param {string} category - The category currently being displayed.
             * @param {number} totalProducts - Total number of products in the current category.
             */
            function updateLoadMoreButton(category, totalProducts) {
                mainLoadMoreBtn.dataset.category = category;
                if (displayedProductCounts[category] < totalProducts) {
                    mainLoadMoreBtn.classList.remove('hidden');
                } else {
                    mainLoadMoreBtn.classList.add('hidden');
                }
            }

            /**
             * Shows the specified category and initializes its display.
             * Hides all other categories.
             * @param {string} categoryToShow - The category ID (e.g., 'new', 'men').
             */
            function showCategory(categoryToShow) {
                activeCategory = categoryToShow;
                productGrids.forEach(grid => {
                    if (grid.id === `${categoryToShow}-products`) {
                        grid.classList.remove('hidden');
                        initializeCategoryDisplay(grid); // Initialize or re-initialize display
                    } else {
                        grid.classList.add('hidden');
                    }
                });
                navbarSearchInput.value = ''; // Clear search input when changing category
                filterProducts(''); // Reset search filter when changing categories
            }

            /**
             * Sets the active class on the clicked category button.
             * @param {HTMLElement} clickedButton - The category button that was clicked.
             */
            function setActiveButton(clickedButton) {
                categoryButtons.forEach(button => {
                    button.classList.remove('active-category');
                });
                clickedButton.classList.add('active-category');
            }

            /**
             * Filters products within the active category based on a search term.
             * Controls visibility of products and the "Load More" button.
             * @param {string} searchTerm - The search term to filter by.
             */
            function filterProducts(searchTerm) {
                const currentGrid = document.getElementById(`${activeCategory}-products`);
                if (!currentGrid) return; // Should not happen if activeCategory is always valid

                const cards = Array.from(currentGrid.querySelectorAll('.product-card'));
                searchTerm = searchTerm.toLowerCase().trim(); // Trim whitespace from search term

                let visibleCount = 0;
                let foundMatch = false; // Flag to check if any product matches the search

                cards.forEach(card => {
                    const productName = card.querySelector('.product-name').textContent.toLowerCase();
                    const productKeywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';

                    const matchesSearch = productName.includes(searchTerm) || productKeywords.includes(searchTerm);

                    if (searchTerm.length > 0) { // Search is active
                        if (matchesSearch) {
                            card.style.display = 'block';
                            visibleCount++;
                            foundMatch = true; // Set flag if a match is found
                        } else {
                            card.style.display = 'none';
                        }
                    } else { // No search term, revert to initial load/load more logic
                        if (visibleCount < displayedProductCounts[activeCategory]) {
                             card.style.display = 'block';
                             visibleCount++;
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });

                // Manage Load More button based on search state
                if (searchTerm.length > 0) {
                    mainLoadMoreBtn.classList.add('hidden'); // Hide load more during active search
                } else {
                    // Re-evaluate load more visibility based on initial/current counts
                    const totalProductsInActiveCategory = cards.length;
                    updateLoadMoreButton(activeCategory, totalProductsInActiveCategory);
                }

                // Scroll to collections section if a search term is active and matches are found
                if (searchTerm.length > 0 && foundMatch && collectionsSection) {
                    collectionsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            // --- Event Listeners ---

            // Category buttons click handler
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.dataset.category;
                    showCategory(category);
                    setActiveButton(this);
                });
            });

            // Main "Load More" button click handler
            mainLoadMoreBtn.addEventListener('click', function() {
                const category = mainLoadMoreBtn.dataset.category;
                const categoryGrid = document.getElementById(`${category}-products`);
                if (!categoryGrid) return;

                const cards = Array.from(categoryGrid.querySelectorAll('.product-card'));
                let currentDisplayCount = displayedProductCounts[category];

                let newDisplayCount = currentDisplayCount + productsPerLoad;

                // Show the next batch of products
                for (let i = currentDisplayCount; i < Math.min(newDisplayCount, cards.length); i++) {
                    cards[i].style.display = 'block';
                }
                displayedProductCounts[category] = Math.min(newDisplayCount, cards.length);

                // Hide button if all products are shown
                updateLoadMoreButton(category, cards.length);
            });

            // Search bar toggle
            searchIcon.addEventListener('click', function() {
                navbarSearchContainer.classList.toggle('active');
                if (navbarSearchContainer.classList.contains('active')) {
                    navbarSearchInput.focus();
                } else {
                    navbarSearchInput.value = '';
                    filterProducts(''); // Clear search and reset display when closed
                }
            });

            // Search input keyup for filtering
            navbarSearchInput.addEventListener('keyup', function() {
                filterProducts(navbarSearchInput.value);
            });

            // Add to Cart functionality
            let cartItemCount = 0;
            const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    cartItemCount++;
                    const productName = this.closest('.product-card').querySelector('.product-name').textContent;
                    console.log(`Added "${productName}" to cart.`);
                    alert(`${productName} added to cart!`);
                });
            });

            // --- Initial Setup on Page Load ---

            // Initialize all categories (this populates displayedProductCounts)
            productGrids.forEach(grid => {
                // We're just populating displayedProductCounts here, not actually showing/hiding yet
                // The actual showing/hiding is done by showCategory.
                const category = grid.id.replace('-products', '');
                const cards = Array.from(grid.querySelectorAll('.product-card'));
                displayedProductCounts[category] = Math.min(cards.length, productsPerLoad);
            });

            // Set 'NEW' as the initial active category and display its products
            const initialCategoryButton = document.querySelector('.category-btn[data-category="new"]');
            if (initialCategoryButton) {
                showCategory('new'); // This also calls initializeCategoryDisplay and updateLoadMoreButton
                setActiveButton(initialCategoryButton);
            }
        });
