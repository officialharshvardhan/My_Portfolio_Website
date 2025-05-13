document.addEventListener("DOMContentLoaded", () => {
    const skillsSection = document.querySelector('.skills-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                if (entry.target.classList.contains('skills-section')) {
                    const progressBars = entry.target.querySelectorAll('.progress');
                    progressBars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-value') + '%';
                    });
                }
            } else {
                entry.target.classList.remove('show');
                if (entry.target.classList.contains('skills-section')) {
                    const progressBars = entry.target.querySelectorAll('.progress');
                    progressBars.forEach(bar => {
                        bar.style.width = '0';
                    });
                }
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation triggers
    });

    observer.observe(skillsSection);
});
