const AdConfig = {
    publisherId: "ca-pub-XXXXXXXXXXXXXXXX",
    leaderboardSlot: "0000000000", 
    rectangleSlot: "1111111111",   
    responsiveSlot: "2222222222",  
    showAds: true
};

const AdManager = {
    init() {
        if (!AdConfig.showAds) return;
        this.loadAdSenseScript();
        this.renderAds();
    },

    loadAdSenseScript() {
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AdConfig.publisherId}`;
        script.async = true;
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
    },

    renderAds() {
        const slots = document.querySelectorAll('.ad-manager-placeholder');
        const isMobile = window.innerWidth < 768;

        slots.forEach(slot => {
            const type = slot.dataset.adType; 
            
            if (type === 'leaderboard' && isMobile) {
                slot.style.display = 'none';
                return;
            }
            
            if (type === 'rectangle' && !isMobile) {
                slot.style.display = 'none';
                return;
            }

            const ins = document.createElement('ins');
            ins.className = "adsbygoogle";
            ins.style.display = "block";
            ins.style.margin = "15px auto";
            ins.dataset.adClient = AdConfig.publisherId;

            if (type === 'leaderboard') {
                ins.dataset.adSlot = AdConfig.leaderboardSlot;
                ins.dataset.adFormat = "horizontal";
                ins.style.minHeight = "90px";
            } 
            else if (type === 'rectangle') {
                ins.dataset.adSlot = AdConfig.rectangleSlot;
                ins.style.width = "300px";
                ins.style.height = "250px";
            } 
            else {
                ins.dataset.adSlot = AdConfig.responsiveSlot;
                ins.dataset.adFormat = "auto";
                ins.dataset.fullWidthResponsive = "true";
                ins.style.minHeight = "250px";
            }

            slot.innerHTML = '';
            slot.appendChild(ins);

            try {
                (adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {}
        });
    }
};

document.addEventListener('DOMContentLoaded', () => AdManager.init());
