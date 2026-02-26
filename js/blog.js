document.addEventListener('DOMContentLoaded', () => {

    const blogGrid     = document.getElementById('blogGrid');
    const blogFilter   = document.getElementById('blogFilter');
    const viewMoreWrap = document.getElementById('viewMoreWrap');
    const viewMoreBtn  = document.getElementById('viewMoreBtn');
    const postList     = document.getElementById('postList');

    const MAX_GRID = 6;
    let allPosts      = [];
    let filteredPosts = [];

    function formatDate(dateStr) {
        const d = new Date(dateStr);
        return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    }

    function createGridCard(post) {
        const card = document.createElement('a');
        card.href = '/blog/' + post.slug + '/';
        card.className = 'blog-card';
        card.dataset.category = post.category;
        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${post.image}"
                     alt="${post.title}"
                     loading="lazy"
                     width="400"
                     height="200"
                     onerror="this.style.display='none'">
                <span class="card-category-badge">${post.category}</span>
            </div>
            <div class="card-content">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <div class="card-meta">
                    <i class="fas fa-user-pen"></i>
                    <span>Published by ${post.author}</span>
                </div>
                <div class="card-meta">
                    <i class="fas fa-rotate-right"></i>
                    <span>Last Updated on ${formatDate(post.lastUpdated)}</span>
                </div>
                <div class="card-meta">
                    <i class="fas fa-clock"></i>
                    <span>${post.readTime} read</span>
                </div>
                <span class="read-more">Read Article <i class="fas fa-arrow-right"></i></span>
            </div>
        `;
        return card;
    }

    function createListItem(post, index) {
        const item = document.createElement('a');
        item.href = '/blog/' + post.slug + '/';
        item.className = 'list-item';
        item.dataset.category = post.category;
        item.innerHTML = `
            <span class="list-item-num">${index + 1}.</span>
            <div class="list-item-info">
                <h4>${post.title}</h4>
                <span>
                    ${post.category}
                    &nbsp;•&nbsp;
                    Published by ${post.author}
                    &nbsp;•&nbsp;
                    Last Updated on ${formatDate(post.lastUpdated)}
                    &nbsp;•&nbsp;
                    ${post.readTime} read
                </span>
            </div>
            <i class="fas fa-arrow-right list-item-arrow"></i>
        `;
        return item;
    }

    function renderAll() {
        blogGrid.innerHTML = '';
        postList.innerHTML = '';
        viewMoreWrap.style.display = 'none';
        postList.classList.remove('visible');

        if (filteredPosts.length === 0) {
            blogGrid.innerHTML = `
                <div class="no-posts">
                    <i class="fas fa-pen-to-square"></i>
                    <h3>More Guides Coming Soon</h3>
                    <h4>We are working on guides for this category. Check back later!</h4>
                </div>
            `;
            return;
        }

        const gridPosts = filteredPosts.slice(0, MAX_GRID);
        gridPosts.forEach(post => {
            blogGrid.appendChild(createGridCard(post));
        });

        if (filteredPosts.length > MAX_GRID) {
            viewMoreWrap.style.display = 'block';
            const heading = document.createElement('h3');
            heading.className = 'post-list-heading';
            heading.textContent = 'All Blog Posts';
            postList.appendChild(heading);
            filteredPosts.forEach((post, i) => {
                postList.appendChild(createListItem(post, i));
            });
        }
    }

    function applyFilter(category) {
        filteredPosts = category === 'all'
            ? [...allPosts]
            : allPosts.filter(p => p.category === category);
        renderAll();
    }

    blogFilter.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            blogFilter.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
        });
    });

    viewMoreBtn.addEventListener('click', () => {
        viewMoreWrap.style.display = 'none';
        postList.classList.add('visible');
        postList.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    fetch('/data/blog-posts.json')
        .then(r => r.json())
        .then(data => {
            allPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
            blogGrid.innerHTML = '';
            applyFilter('all');
        })
        .catch(() => {
            blogGrid.innerHTML = `
                <div class="no-posts">
                    <i class="fas fa-exclamation-circle"></i>
                    <h3>Unable to Load Posts</h3>
                    <h4>Please check your connection and try again.</h4>
                </div>
            `;
        });
});
