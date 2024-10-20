document.addEventListener('DOMContentLoaded', function() {
    const messageToggle = document.getElementById('message-toggle');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    messageToggle.addEventListener('change', function() {
        if (this.checked) {
            heroTitle.textContent = "Sidestep the spam and take control of your career.";
            heroSubtitle.textContent = "Find the remote job you've been dreaming of!";
        } else {
            heroTitle.textContent = "Get more remote job interviews.";
            heroSubtitle.textContent = "You've got it from there (remember to unmute your mic though 😉)";
        }
    });

    // Job Application Calculator
    const jobApps = document.getElementById('job-apps');
    const desiredSalary = document.getElementById('desired-salary');
    const startTime = document.getElementById('start-time');
    const timeTaken = document.getElementById('time-taken');
    const sidestepTime = document.getElementById('sidestep-time');

    function calculateTime() {
        const apps = parseInt(jobApps.value) || 0;
        const salary = parseInt(desiredSalary.value) || 0;
        const months = parseInt(startTime.value) || 1;

        const regularTime = apps * 2 * months; // Assuming 2 hours per application
        const sidestepTimeValue = regularTime * 0.6; // 40% faster with sidestep

        timeTaken.textContent = `${regularTime} hours`;
        sidestepTime.textContent = `${sidestepTimeValue.toFixed(1)} hours`;
    }

    jobApps.addEventListener('input', calculateTime);
    desiredSalary.addEventListener('input', calculateTime);
    startTime.addEventListener('change', calculateTime);

    // Countdown timer
    function updateCountdown() {
        const now = new Date();
        const target = new Date(now.getFullYear(), now.getMonth() + 1, 1); // First day of next month
        const diff = target - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.querySelector('.countdown span:nth-child(1)').style.setProperty('--value', days);
        document.querySelector('.countdown span:nth-child(2)').style.setProperty('--value', hours);
        document.querySelector('.countdown span:nth-child(3)').style.setProperty('--value', minutes);
        document.querySelector('.countdown span:nth-child(4)').style.setProperty('--value', seconds);
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });
});
