// JavaScript untuk Transisi Halaman
window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});

window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});
document.addEventListener("DOMContentLoaded", function() {
    try {
        // Memuat transisi halaman
        document.body.classList.add("loaded");

        // Smooth scroll untuk navigasi
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute("href"));
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });

        // Parallax effect untuk home section
        window.addEventListener('scroll', () => {
            const homeContent = document.querySelector('.home-content');
            const homeImage = document.querySelector('.home-image');
            const scrolled = window.scrollY;
            
            if (homeContent && homeImage) {
                homeContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                homeImage.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        });

        // Cursor custom effect
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Portfolio image hover effect
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const img = item.querySelector('img');
                const xRotation = (y - rect.height / 2) / 20;
                const yRotation = (x - rect.width / 2) / 20;
                
                img.style.transform = `
                    perspective(1000px)
                    rotateX(${xRotation}deg)
                    rotateY(${yRotation}deg)
                    scale(1.1)
                `;
            });

            item.addEventListener('mouseleave', () => {
                const img = item.querySelector('img');
                img.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });

        // Dark/Light mode toggle
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        document.body.appendChild(themeToggle);

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            themeToggle.innerHTML = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
        });

        // Skill progress animation
        const skillBars = document.querySelectorAll('.skill-card');
        const animateSkills = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-skill');
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => animateSkills.observe(bar));

    } catch (error) {
        console.error("Terjadi kesalahan:", error);
    }
});
