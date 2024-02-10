document.addEventListener("DOMContentLoaded", function() {
    const seeMoreLinks = document.querySelectorAll(".news-item a[href='#']");
    
    seeMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const newsItem = this.closest(".news-item");
            const details = newsItem.querySelector(".details");
            
            if (details) {
                details.classList.toggle("hidden");
                if (details.classList.contains("hidden")) {
                    this.innerText = "see more";
                } else {
                    this.innerText = "see less";
                }
            }
        });
    });
});
