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
            '/':                                         { path: 'https://tools.rojgarsangam.in/images/og/rojgar-sangam-tools-free-online-tools.webp', alt: 'Rojgar Sangam Tools - Free Online PDF and Image Tools', title: 'Free Online Tools - Rojgar Sangam Tools' },
            '/index.html':                               { path: 'https://tools.rojgarsangam.in/images/og/rojgar-sangam-tools-free-online-tools.webp', alt: 'Rojgar Sangam Tools - Free Online PDF and Image Tools', title: 'Free Online Tools - Rojgar Sangam Tools' },
            '/tools/merge-pdf':                          { path: 'https://tools.rojgarsangam.in/images/og/merge-pdf-online-free-rojgar-sangam.webp', alt: 'Merge PDF Online Free - Combine PDF Files Instantly', title: 'Merge PDF Online Free - Rojgar Sangam Tools' },
            '/tools/merge-pdf.html':                     { path: 'https://tools.rojgarsangam.in/images/og/merge-pdf-online-free-rojgar-sangam.webp', alt: 'Merge PDF Online Free - Combine PDF Files Instantly', title: 'Merge PDF Online Free - Rojgar Sangam Tools' },
            '/tools/split-pdf':                          { path: 'https://tools.rojgarsangam.in/images/og/split-pdf-online-free-rojgar-sangam.webp', alt: 'Split PDF Online Free - Separate PDF Pages Instantly', title: 'Split PDF Online Free - Rojgar Sangam Tools' },
            '/tools/split-pdf.html':                     { path: 'https://tools.rojgarsangam.in/images/og/split-pdf-online-free-rojgar-sangam.webp', alt: 'Split PDF Online Free - Separate PDF Pages Instantly', title: 'Split PDF Online Free - Rojgar Sangam Tools' },
           
            '/tools/compress-pdf':                       { path: 'https://tools.rojgarsangam.in/images/og/compress-pdf-online-free-rojgar-sangam.webp', alt: 'Compress PDF Online Free - Reduce PDF File Size Instantly', title: 'Compress PDF Online Free - Rojgar Sangam Tools' },
            '/tools/compress-pdf.html':                  { path: 'https://tools.rojgarsangam.in/images/og/compress-pdf-online-free-rojgar-sangam.webp', alt: 'Compress PDF Online Free - Reduce PDF File Size Instantly', title: 'Compress PDF Online Free - Rojgar Sangam Tools' },
            '/tools/word-to-pdf':                        { path: 'https://tools.rojgarsangam.in/images/og/word-to-pdf-converter-online-rojgar-sangam.webp', alt: 'Word to PDF Online Free - Convert DOC DOCX to PDF Instantly', title: 'Word to PDF Online Free - Rojgar Sangam Tools' },
            '/tools/word-to-pdf.html':                   { path: 'https://tools.rojgarsangam.in/images/og/word-to-pdf-converter-online-rojgar-sangam.webp', alt: 'Word to PDF Online Free - Convert DOC DOCX to PDF Instantly', title: 'Word to PDF Online Free - Rojgar Sangam Tools' },
           
            '/tools/jpg-to-pdf':                         { path: 'https://tools.rojgarsangam.in/images/og/jpg-to-pdf-converter-online-rojgar-sangam.webp', alt: 'JPG to PDF Online Free - Convert Images to PDF Instantly', title: 'JPG to PDF Online Free - Rojgar Sangam Tools' },
            '/tools/jpg-to-pdf.html':                    { path: 'https://tools.rojgarsangam.in/images/og/jpg-to-pdf-converter-online-rojgar-sangam.webp', alt: 'JPG to PDF Online Free - Convert Images to PDF Instantly', title: 'JPG to PDF Online Free - Rojgar Sangam Tools' },
            '/tools/pdf-to-jpg':                         { path: 'https://tools.rojgarsangam.in/images/og/pdf-to-jpg-converter-online-rojgar-sangam.webp', alt: 'PDF to JPG Online Free - Convert PDF Pages to Images Instantly', title: 'PDF to JPG Online Free - Rojgar Sangam Tools' },
            '/tools/pdf-to-jpg.html':                    { path: 'https://tools.rojgarsangam.in/images/og/pdf-to-jpg-converter-online-rojgar-sangam.webp', alt: 'PDF to JPG Online Free - Convert PDF Pages to Images Instantly', title: 'PDF to JPG Online Free - Rojgar Sangam Tools' },
            
            '/tools/image-resizer':                      { path: 'https://tools.rojgarsangam.in/images/og/image-resizer-online-free-rojgar-sangam.webp', alt: 'Image Resizer Online Free - Resize Images Without Losing Quality', title: 'Image Resizer Online Free - Rojgar Sangam Tools' },
            '/tools/image-resizer.html':                 { path: 'https://tools.rojgarsangam.in/images/og/image-resizer-online-free-rojgar-sangam.webp', alt: 'Image Resizer Online Free - Resize Images Without Losing Quality', title: 'Image Resizer Online Free - Rojgar Sangam Tools' },
            '/tools/remove-bg':                          { path: 'https://tools.rojgarsangam.in/images/og/remove-background-online-free-rojgar-sangam.webp', alt: 'Remove Image Background Online Free - Automatic Background Remover', title: 'Remove Background Online Free - Rojgar Sangam Tools' },
            '/tools/remove-bg.html':                     { path: 'https://tools.rojgarsangam.in/images/og/remove-background-online-free-rojgar-sangam.webp', alt: 'Remove Image Background Online Free - Automatic Background Remover', title: 'Remove Background Online Free - Rojgar Sangam Tools' },
  
            '/tools/age-calculator':                     { path: 'https://tools.rojgarsangam.in/images/og/age-calculator-online-free-rojgar-sangam.webp', alt: 'Age Calculator Online Free - Calculate Exact Age from Date of Birth', title: 'Age Calculator Online Free - Rojgar Sangam Tools' },
            '/tools/age-calculator.html':                { path: 'https://tools.rojgarsangam.in/images/og/age-calculator-online-free-rojgar-sangam.webp', alt: 'Age Calculator Online Free - Calculate Exact Age from Date of Birth', title: 'Age Calculator Online Free - Rojgar Sangam Tools' },
            '/tools/name-dob-on-photo':                  { path: 'https://tools.rojgarsangam.in/images/og/name-dob-on-photo-online-rojgar-sangam.webp', alt: 'Add Name and DOB on Photo Online Free - Print Text on Image', title: 'Name DOB on Photo Online Free - Rojgar Sangam Tools' },
            '/tools/name-dob-on-photo.html':             { path: 'https://tools.rojgarsangam.in/images/og/name-dob-on-photo-online-rojgar-sangam.webp', alt: 'Add Name and DOB on Photo Online Free - Print Text on Image', title: 'Name DOB on Photo Online Free - Rojgar Sangam Tools' },
            
            '/tools/photo-signature-joiner':             { path: 'https://tools.rojgarsangam.in/images/og/photo-signature-joiner-online-rojgar-sangam.webp', alt: 'Photo Signature Joiner Online Free - Combine Photo and Signature', title: 'Photo Signature Joiner Online Free - Rojgar Sangam Tools' },
            '/tools/photo-signature-joiner.html':        { path: 'https://tools.rojgarsangam.in/images/og/photo-signature-joiner-online-rojgar-sangam.webp', alt: 'Photo Signature Joiner Online Free - Combine Photo and Signature', title: 'Photo Signature Joiner Online Free - Rojgar Sangam Tools' },
            '/tools/percentage-cgpa-converter':          { path: 'https://tools.rojgarsangam.in/images/og/percentage-cgpa-converter-online-rojgar-sangam.webp', alt: 'Percentage CGPA Converter Online Free - Convert CGPA to Percentage', title: 'Percentage CGPA Converter Online Free - Rojgar Sangam Tools' },
            '/tools/percentage-cgpa-converter.html':     { path: 'https://tools.rojgarsangam.in/images/og/percentage-cgpa-converter-online-rojgar-sangam.webp', alt: 'Percentage CGPA Converter Online Free - Convert CGPA to Percentage', title: 'Percentage CGPA Converter Online Free - Rojgar Sangam Tools' },
            '/legal/about-us':                           { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'About Rojgar Sangam Tools - Free Online PDF and Image Tools', title: 'About Us - Rojgar Sangam Tools' },
            '/legal/about-us.html':                      { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'About Rojgar Sangam Tools - Free Online PDF and Image Tools', title: 'About Us - Rojgar Sangam Tools' },
            '/legal/privacy-policy':                     { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Privacy Policy - Rojgar Sangam Tools Free Online Tools', title: 'Privacy Policy - Rojgar Sangam Tools' },
            '/legal/privacy-policy.html':                { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Privacy Policy - Rojgar Sangam Tools Free Online Tools', title: 'Privacy Policy - Rojgar Sangam Tools' },
            '/legal/terms-and-conditions':               { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Terms and Conditions - Rojgar Sangam Tools Free Online Tools', title: 'Terms and Conditions - Rojgar Sangam Tools' },
            '/legal/terms-and-conditions.html':          { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Terms and Conditions - Rojgar Sangam Tools Free Online Tools', title: 'Terms and Conditions - Rojgar Sangam Tools' },
            '/legal/disclaimer':                         { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Disclaimer - Rojgar Sangam Tools Free Online Tools', title: 'Disclaimer - Rojgar Sangam Tools' },
            '/legal/disclaimer.html':                    { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Disclaimer - Rojgar Sangam Tools Free Online Tools', title: 'Disclaimer - Rojgar Sangam Tools' },
            '/legal/contact-us':                         { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Contact Us - Rojgar Sangam Tools Free Online Tools', title: 'Contact Us - Rojgar Sangam Tools' },
            '/legal/contact-us.html':                    { path: 'https://tools.rojgarsangam.in/images/og/about-rojgar-sangam-tools-free-online-tools.webp', alt: 'Contact Us - Rojgar Sangam Tools Free Online Tools', title: 'Contact Us - Rojgar Sangam Tools' },
        };

        const imageData = ogImageMap[pathname] || { path: '/images/og/home.webp', alt: 'Rojgar Sangam Tools - Free Online PDF and Image Tools', title: 'Free Online Tools - Rojgar Sangam Tools' };
        const image = base + imageData.path;
        const url = window.location.href;
        const title = document.title;
        const description = document.querySelector('meta[name="description"]')?.content || '';

        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.sizes = '512x512';
        favicon.href = 'https://tools.rojgarsangam.in/images/RGSG-Avtar.png';
        document.head.appendChild(favicon);

        const appleFavicon = document.createElement('link');
        appleFavicon.rel = 'apple-touch-icon';
        appleFavicon.href = 'https://tools.rojgarsangam.in/images/RGSG-Avtar.png';
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
            { property: 'og:image:alt', content: imageData.alt },
            { property: 'og:image:secure_url', content: image },
            { property: 'og:site_name', content: 'Rojgar Sangam Tools' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:url', content: url },
            { name: 'twitter:title', content: title },
            { name: 'twitter:description', content: description },
            { name: 'twitter:image', content: image },
            { name: 'twitter:image:alt', content: imageData.alt }
        ];
        ogTags.forEach(tag => {
            const meta = document.createElement('meta');
            if (tag.property) meta.setAttribute('property', tag.property);
            if (tag.name) meta.setAttribute('name', tag.name);
            meta.setAttribute('content', tag.content);
            document.head.appendChild(meta);
        });
        const imageSchema = {
            "@context": "https://schema.org",
            "@type": "ImageObject",
            "url": image,
            "width": 1200,
            "height": 630,
            "name": imageData.title,
            "description": imageData.alt,
            "contentUrl": image
        };
        const imgScript = document.createElement('script');
        imgScript.type = 'application/ld+json';
        imgScript.text = JSON.stringify(imageSchema);
        document.head.appendChild(imgScript);
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
                "logo": base + "https://tools.rojgarsangam.in/images/rojgar-sangam-logo.png",
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
                        "url": base + "https://tools.rojgarsangam.in/images/rojgar-sangam-logo.png"
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
