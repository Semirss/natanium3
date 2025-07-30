        // Mobile menu toggle would go here
        document.querySelector('.mobile-menu-button').addEventListener('click', function() {
            // Toggle mobile menu
        });

        // Gallery data for each event
        const galleryData = {
            1: {
                title: "Hub of Africa Addis",
                date: "January 28, 2024",
                description: "Brighten up your summer wardrobe with our colorful SS16 collection!",
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
                description: "Private viewing of our latest collection at the historic Hôtel de Crillon with the designer present.",
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

        // DOM elements
        const galleryModal = document.getElementById('galleryModal');
        const closeGalleryBtn = document.getElementById('closeGallery');
        const galleryTitle = document.getElementById('galleryTitle');
        const galleryDate = document.getElementById('galleryDate');
        const galleryContainer = document.getElementById('galleryContainer');
        const eventCards = document.querySelectorAll('.event-card');
        const eventNavButtons = document.querySelectorAll('.event-nav-btn');

        // Function to open gallery
        function openGallery(eventId) {
            const eventData = galleryData[eventId];
            if (!eventData) return;
            
            // Update gallery content
            galleryTitle.textContent = eventData.title;
            galleryDate.textContent = eventData.date;
            
            // Clear previous images
            galleryContainer.innerHTML = '';
            
            // Add new images
            eventData.images.forEach(imgSrc => {
                const imgElement = document.createElement('div');
                imgElement.className = 'relative overflow-hidden rounded-lg';
                imgElement.innerHTML = `
                    <img src="${imgSrc}" alt="${eventData.title}" class="w-full h-64 object-cover gallery-image">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p class="text-white text-sm garamond">${eventData.description}</p>
                    </div>
                `;
                galleryContainer.appendChild(imgElement);
            });
            
            // Highlight active navigation button
            eventNavButtons.forEach(btn => {
                if (btn.dataset.event === eventId) {
                    btn.classList.add('bg-yellow-600', 'text-white');
                    btn.classList.remove('text-gray-300');
                } else {
                    btn.classList.remove('bg-yellow-600', 'text-white');
                    btn.classList.add('text-gray-300');
                }
            });
            
            // Show modal with animation
            galleryModal.classList.remove('hidden');
            setTimeout(() => {
                galleryModal.classList.add('modal-active');
            }, 10);
        }

        // Event listeners
        eventCards.forEach(card => {
            card.addEventListener('click', function() {
                const eventId = this.dataset.event;
                openGallery(eventId);
            });
        });

        eventNavButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const eventId = this.dataset.event;
                openGallery(eventId);
            });
        });

        closeGalleryBtn.addEventListener('click', function() {
            galleryModal.classList.remove('modal-active');
            setTimeout(() => {
                galleryModal.classList.add('hidden');
            }, 300);
        });

        // Close modal when clicking outside content
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                galleryModal.classList.remove('modal-active');
                setTimeout(() => {
                    galleryModal.classList.add('hidden');
                }, 300);
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
        const productsPerLoad = 5; // Number of products to show initially and load more
        let displayedProductCounts = {}; // To keep track of how many products are currently shown per category
        let activeCategory = 'new'; // Keep track of the currently active category

        // DOM elements
        const categoryButtons = document.querySelectorAll('.category-btn');
        const productGrids = document.querySelectorAll('#category-products > div[id$="-products"]');
        const mainLoadMoreBtn = document.getElementById('main-load-more-btn');
        const searchIcon = document.getElementById('search-icon');
        const navbarSearchContainer = document.getElementById('navbar-search-container');
        const navbarSearchInput = document.getElementById('navbar-search-input');
        const cartCountDisplay = document.getElementById('cart-count-display');
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        const collectionsSection = document.querySelector('section.py-16.px-6'); // Select the "OUR COLLECTIONS" section


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

        // Mobile menu toggle (placeholder for functionality)
        document.querySelector('.mobile-menu-button').addEventListener('click', function() {
            console.log("Mobile menu button clicked!");
            // Add/remove classes here to show/hide a mobile menu overlay
        });

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
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                cartItemCount++;
                cartCountDisplay.textContent = `BAG (${cartItemCount})`;
                const productName = this.dataset.productName;
                // const productPrice = this.dataset.productPrice; // If you need price for a cart summary
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