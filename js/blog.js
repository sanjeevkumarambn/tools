document.addEventListener('DOMContentLoaded', () => {
    const blogGrid = document.getElementById('blogGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const viewMoreContainer = document.getElementById('viewMoreContainer');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const loadingIndicator = document.getElementById('loadingIndicator');

    let allPosts = [];
    let currentFilter = 'all';
    const postsPerPage = 6;
    let currentlyShown = 0;
    let filteredPosts = [];

    // Fetch posts from JSON
    fetch('/data/blog-posts.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Sort by date descending (newest first)
            allPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            loadingIndicator.style.display = 'none';
            applyFilter('all');
        })
        .catch(error => {
            console.error('Error loading blog posts:', error);
            blogGrid.innerHTML = `
                <div class="coming-soon-card" style="grid-column: 1 / -1;">
                    <div class="coming-soon-icon"><i class="fas fa-exclamation-triangle"></i></div>
                    <h3>Unable to load posts</h3>
                    <p>Please check your connection and try again later.</p>
                </div>
            `;
        });

    // Format Date from YYYY-MM-DD to Indian format (e.g., 20 January 2025)
    function formatDate(dateString) {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', options);
    }

    // Create a single blog card HTML string
    function createBlogCard(post) {
        // Enforce strict heading structure: Card title is H2.
        return `
            <a href="/blog/${post.slug}" class="blog-card blog-item" data-category="${post.category}">
                <div class="card-image-wrap">
                    <img src="${post.image}" alt="${post.title}" loading="lazy" onerror="this.src='/images/placeholder.webp';">
                </div>
                <div class="card-content">
                    <div class="card-meta">
                        <span class="card-category">${post.category}</span>
                        <span><i class="far fa-calendar-alt"></i> ${formatDate(post.date)}</span>
                    </div>
                    <h2 class="card-title">${post.title}</h2>
                    <p class="card-excerpt">${post.description}</p>
                    <div class="read-more">
                        Read Full Guide <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            </a>
        `;
    }

    // Render Posts based on current state
    function renderPosts() {
        blogGrid.innerHTML = ''; // Clear grid
        
        if (filteredPosts.length === 0) {
            // Strict structure: H3 then H4 for coming soon
            blogGrid.innerHTML = `
                <div class="coming-soon-card" style="grid-column: 1 / -1;">
                    <div class="coming-soon-icon"><i class="fas fa-pencil-alt"></i></div>
                    <h3>More Guides Coming Soon</h3>
                    <h4>Topics We Are Working On</h4>
                    <p>We are currently writing detailed guides for this category. Check back later!</p>
                </div>
            `;
            viewMoreContainer.style.display = 'none';
            return;
        }

        // Determine how many to show
        const postsToRender = filteredPosts.slice(0, currentlyShown);
        
        // Build HTML
        let htmlContent = postsToRender.map(post => createBlogCard(post)).join('');
        blogGrid.innerHTML = htmlContent;

        // Handle View More button visibility
        if (currentlyShown < filteredPosts.length) {
            viewMoreContainer.style.display = 'block';
        } else {
            viewMoreContainer.style.display = 'none';
        }
    }

    // Apply Filter Logic
    function applyFilter(category) {
        currentFilter = category;
        currentlyShown = postsPerPage; // Reset to initial 6 on filter change

        if (category === 'all') {
            filteredPosts = [...allPosts];
        } else {
            filteredPosts = allPosts.filter(post => post.category === category);
        }

        renderPosts();
    }

    // Event Listeners for Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            e.target.classList.add('active');
            
            const filterValue = e.target.getAttribute('data-filter');
            applyFilter(filterValue);
        });
    });

    // Event Listener for View More Button
    viewMoreBtn.addEventListener('click', () => {
        currentlyShown += postsPerPage;
        renderPosts();
    });
});
