document.addEventListener('DOMContentLoaded', function() {
    const messageToggle = document.getElementById('message-toggle');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const toggleLeftText = document.getElementById('toggle-left-text');
    const toggleRightText = document.getElementById('toggle-right-text');
    const heroTextContent = document.querySelector('.hero-text-content');

    if (messageToggle) {
        messageToggle.addEventListener('change', function() {
            if (this.checked) {
                heroTitle.textContent = "Find top remote talent for your team.";
                heroSubtitle.textContent = "Hire skilled professionals ready to contribute to your success.";
                toggleLeftText.classList.remove('font-bold');
                toggleRightText.classList.add('font-bold');
            } else {
                heroTitle.textContent = "Get more remote job interviews.";
                heroSubtitle.textContent = "You've got it from there (remember to unmute your mic though 😉)";
                toggleLeftText.classList.add('font-bold');
                toggleRightText.classList.remove('font-bold');
            }
            
            // Force a reflow to maintain the width
            heroTextContent.style.minWidth = heroTextContent.offsetWidth + 'px';
        });

        // Set initial state
        toggleLeftText.classList.add('font-bold');
        
        // Set initial width
        heroTextContent.style.minWidth = heroTextContent.offsetWidth + 'px';
    }

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

    if (jobApps && desiredSalary && startTime) {
        jobApps.addEventListener('input', calculateTime);
        desiredSalary.addEventListener('input', calculateTime);
        startTime.addEventListener('change', calculateTime);
    }

    // Countdown timer
    function updateCountdown() {
        const now = new Date();
        const launchDate = new Date('2024-11-20T00:00:00');
        const diff = launchDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const countdownElements = document.querySelectorAll('.countdown span');
        if (countdownElements.length === 4) {
            countdownElements[0].style.setProperty('--value', days);
            countdownElements[1].style.setProperty('--value', hours);
            countdownElements[2].style.setProperty('--value', minutes);
            countdownElements[3].style.setProperty('--value', seconds);
        }
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
