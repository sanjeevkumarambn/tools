const RojgarTools = {
    init() {
        this.loadComponents();
    },

    async loadComponents() {
        const isSubFolder = window.location.pathname.includes('/tools/');
        const pathPrefix = isSubFolder ? '../' : '';

        try {
            const headerRes = await fetch(pathPrefix + 'components/header.html');
            const headerHtml = await headerRes.text();
            document.getElementById('header-placeholder').innerHTML = headerHtml;

            const footerRes = await fetch(pathPrefix + 'components/footer.html');
            const footerHtml = await footerRes.text();
            document.getElementById('footer-placeholder').innerHTML = footerHtml;

            this.setupMobileMenu();
            this.setupActiveLinks();

        } catch (error) {
            console.error("Component loading failed:", error);
        }
    },

    setupMobileMenu() {
        const menuBtn = document.querySelector('.md\\:hidden');
        const navMenu = document.querySelector('nav');
        
        if (menuBtn && navMenu) {
            menuBtn.addEventListener('click', () => {
                navMenu.classList.toggle('hidden');
                navMenu.classList.toggle('flex-col');
                navMenu.classList.toggle('absolute');
                navMenu.classList.toggle('top-16');
                navMenu.classList.toggle('left-0');
                navMenu.classList.toggle('w-full');
                navMenu.classList.toggle('bg-white');
                navMenu.classList.toggle('p-5');
                navMenu.classList.toggle('shadow-lg');
                navMenu.classList.toggle('z-50');
            });
        }
    },

    setupActiveLinks() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPath.endsWith(linkPath) || (currentPath === '/' && linkPath.includes('index.html'))) {
                link.classList.add('active-link');
            }
        });
    },

    formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    },

    readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = e => reject(e);
            reader.readAsArrayBuffer(file);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => RojgarTools.init());
