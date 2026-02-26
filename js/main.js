const RojgarTools = {
    init() {
        this.injectMeta();
        this.injectSchema();
        this.loadComponents();
    },

    injectMeta() {
        const base = 'https://tools.rojgarsangam.in';
        const pathname = window.location.pathname;

        const ogImageMap = {
            '/':                                         '/images/og/home.webp',
            '/index.html':                               '/images/og/home.webp',
            '/tools/merge-pdf':                          '/images/og/merge-pdf.webp',
            '/tools/merge-pdf.html':                     '/images/og/merge-pdf.webp',
            '/tools/split-pdf':                          '/images/og/split-pdf.webp',
            '/tools/split-pdf.html':                     '/images/og/split-pdf.webp',
            '/tools/compress-pdf':                       '/images/og/compress-pdf.webp',
            '/tools/compress-pdf.html':                  '/images/og/compress-pdf.webp',
            '/tools/word-to-pdf':                        '/images/og/word-to-pdf.webp',
            '/tools/word-to-pdf.html':                   '/images/og/word-to-pdf.webp',
            '/tools/jpg-to-pdf':                         '/images/og/jpg-to-pdf.webp',
            '/tools/jpg-to-pdf.html':                    '/images/og/jpg-to-pdf.webp',
            '/tools/pdf-to-jpg':                         '/images/og/pdf-to-jpg.webp',
            '/tools/pdf-to-jpg.html':                    '/images/og/pdf-to-jpg.webp',
            '/tools/image-resizer':                      '/images/og/image-resizer.webp',
            '/tools/image-resizer.html':                 '/images/og/image-resizer.webp',
            '/tools/remove-bg':                          '/images/og/remove-bg.webp',
            '/tools/remove-bg.html':                     '/images/og/remove-bg.webp',
            '/tools/age-calculator':                     '/images/og/age-calculator.webp',
            '/tools/age-calculator.html':                '/images/og/age-calculator.webp',
            '/tools/name-dob-on-photo':                  '/images/og/name-dob-on-photo.webp',
            '/tools/name-dob-on-photo.html':             '/images/og/name-dob-on-photo.webp',
            '/tools/photo-signature-joiner':             '/images/og/photo-signature-joiner.webp',
            '/tools/photo-signature-joiner.html':        '/images/og/photo-signature-joiner.webp',
            '/tools/percentage-cgpa-converter':          '/images/og/percentage-cgpa-converter.webp',
            '/tools/percentage-cgpa-converter.html':     '/images/og/percentage-cgpa-converter.webp',
            '/legal/about-us':                           '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/about-us.html':                      '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/privacy-policy':                     '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/privacy-policy.html':                '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/terms-and-conditions':               '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/terms-and-conditions.html':          '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/disclaimer':                         '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/disclaimer.html':                    '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/contact-us':                         '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
            '/legal/contact-us.html':                    '/images/og/about-rojgar-sangam-tools-free-online-tools.webp',
        };

        const imagePath = ogImageMap[pathname] || '/images/og/home.webp';
        const image = base + imagePath;
        const url = window.location.href;
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content || '';

        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.sizes = '512x512';
        favicon.href = '/RGSG-Avtar.png';
        document.head.appendChild(favicon);

        const appleFavicon = document.createElement('link');
        appleFavicon.rel = 'apple-touch-icon';
        appleFavicon.href = '/RGSG-Avtar.png';
        document.head.appendChild(appleFavicon);

        const ogTags = [
            { property: 'og:locale', content: 'en-GB' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: url },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:image', content: image },
            { property: 'og:image:width', content: '1200' },
            { property: 'og:image:height', content: '630' },
            { property: 'og:image:type', content: 'image/webp' },
            { property: 'og:site_name', content: 'Rojgar Sangam Tools' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: url },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image }
        ];

        ogTags.forEach(tag => {
            const meta = document.createElement('meta');
            if (tag.property) meta.setAttribute('property', tag.property);
            if (tag.name) meta.setAttribute('name', tag.name);
            meta.setAttribute('content', tag.content);
            document.head.appendChild(meta);
        });
    },

    injectSchema() {
        const base = 'https://tools.rojgarsangam.in';
        const pathname = window.location.pathname;
        const title = document.title;

        const breadcrumbItems = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": base + "/"
            }
        ];

        if (pathname !== '/' && pathname !== '/index.html') {
            const segments = pathname.replace(/\.html$/, '').split('/').filter(Boolean);
            let builtPath = base;
            segments.forEach((segment, index) => {
                builtPath += '/' + segment;
                const name = segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
                breadcrumbItems.push({
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": index === segments.length - 1 ? title : name,
                    "item": builtPath
                });
            });
        }

        const schemas = [
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Rojgar Sangam Tools",
                "url": base + "/",
                "logo": base + "/rojgar-sangam-logo.png",
                "sameAs": ["https://rojgarsangam.in/"]
            },
            {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Rojgar Sangam Tools",
                "url": base + "/",
                "author": {
                    "@type": "Organization",
                    "name": "Rojgar Sangam",
                    "url": "https://rojgarsangam.in/"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Rojgar Sangam Tools",
                    "url": base + "/",
                    "logo": {
                        "@type": "ImageObject",
                        "url": base + "/rojgar-sangam-logo.png"
                    }
                }
            },
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbItems
            }
        ];

        schemas.forEach(data => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(data);
            document.head.appendChild(script);
        });
    },

    async loadComponents() {
        const header = document.getElementById('header-placeholder');
        const footer = document.getElementById('footer-placeholder');
        if (!header || !footer) return;
        if (header.dataset.loaded === 'true') return;
        header.dataset.loaded = 'true';

        try {
            const [headerRes, footerRes] = await Promise.all([
                fetch('/components/header.html'),
                fetch('/components/footer.html')
            ]);
            const [headerHtml, footerHtml] = await Promise.all([
                headerRes.text(),
                footerRes.text()
            ]);
            header.innerHTML = headerHtml;
            footer.innerHTML = footerHtml;
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

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => RojgarTools.init());
