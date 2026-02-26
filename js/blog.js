let allPosts = [];

async function loadBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;
    try {
        const response = await fetch('/data/blog-posts.json');
        allPosts = await response.json();
        renderPosts(allPosts);
        setupFilters();
    } catch (error) {
        console.error('Blog posts load error:', error);
        container.innerHTML = '<p style="text-align:center;color:#667799;padding:60px 20px;grid-column:1/-1;">Blog posts coming soon...</p>';
    }
}

function renderPosts(posts) {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = '';
    posts.forEach(post => {
        container.appendChild(createPostCard(post));
    });
    const comingSoon = document.createElement('div');
    comingSoon.className = 'coming-soon-card';
    comingSoon.innerHTML = `
        <div>
            <h3>More Guides Coming Soon</h3>
            <ul>
                <li>Age Calculator Complete Guide</li>
                <li>CGPA to Percentage Converter</li>
                <li>Image Resize for Govt Forms</li>
            </ul>
        </div>
    `;
    container.appendChild(comingSoon);
}

function createPostCard(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.dataset.category = post.category;
    const dateObj = new Date(post.date);
    const dateFormatted = dateObj.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    article.innerHTML = `
        <div class="card-image">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <span class="card-category-badge">${post.category}</span>
        </div>
        <div class="card-content">
            <h2><a href="/blog/${post.slug}/">${post.title}</a></h2>
            <p>${post.description}</p>
            <div class="article-meta">
                <i class="fas fa-calendar-alt"></i>
                <time datetime="${post.date}">${dateFormatted}</time>
                <span>•</span>
                <i class="fas fa-clock"></i>
                <span>${post.readTime} read</span>
            </div>
            <a href="/blog/${post.slug}/" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    return article;
}

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            if (filter === 'all') {
                renderPosts(allPosts);
            } else {
                const filtered = allPosts.filter(p => p.category === filter);
                renderPosts(filtered);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});
