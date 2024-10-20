document.addEventListener('DOMContentLoaded', function() {
    const messageToggle = document.getElementById('message-toggle');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const toggleLeftText = document.getElementById('toggle-left-text');
    const toggleRightText = document.getElementById('toggle-right-text');
    const heroTextContent = document.getElementById('hero-text-content');
    const jobActionBtns = document.querySelectorAll('.job-action-btn');
    const heroActionBtn = document.getElementById('hero-action-btn');

    // Set initial width
    let initialWidth = heroTextContent.offsetWidth;
    heroTextContent.style.width = `${initialWidth}px`;

    function updateContent(isReferring) {
        if (isReferring) {
            heroTitle.innerHTML = "Help your friends <span class='text-primary'>get noticed</span>";
            heroSubtitle.textContent = "5 minutes could change someone's career.";
            toggleLeftText.classList.remove('font-bold');
            toggleRightText.classList.add('font-bold');
            jobActionBtns.forEach(btn => btn.textContent = "Refer Someone");
            if (heroActionBtn) heroActionBtn.textContent = "Refer Someone";
        } else {
            heroTitle.innerHTML = "Get more <span class='text-primary'>remote job interviews</span>";
            heroSubtitle.textContent = "Then it's over to you. Just remember to unmute your mic 😉";
            toggleLeftText.classList.add('font-bold');
            toggleRightText.classList.remove('font-bold');
            jobActionBtns.forEach(btn => btn.textContent = "Get Referred");
            if (heroActionBtn) heroActionBtn.textContent = "Get Referred";
        }
    }

    if (messageToggle) {
        messageToggle.addEventListener('change', function() {
            updateContent(this.checked);
        });

        // Set initial state
        updateContent(messageToggle.checked);
    }



   // Calculator functionality
const jobApps = document.getElementById('job-apps');
const salaryRange = document.getElementById('salary-range');
const salaryDisplay = document.getElementById('salary-display');
const currencySelect = document.getElementById('currency-select');
const startTime = document.getElementById('start-time');
const timeTaken = document.getElementById('time-taken');
const sidestepTime = document.getElementById('sidestep-time');

function formatSalary(value) {
    return new Intl.NumberFormat('en-US').format(value);
}

function updateSalaryDisplay() {
    const currency = currencySelect.value;
    const salary = formatSalary(salaryRange.value);
    salaryDisplay.textContent = `${currency}${salary}`;
}

function calculateTime() {
    const apps = parseInt(jobApps.value) || 10;
    const salary = parseInt(salaryRange.value) || 50000;
    const months = parseInt(startTime.value) || 1;

    // Adjust time per application based on salary
    let timePerApp = 2; // Base time in hours
    if (salary > 100000) {
        timePerApp = 2.5;
    } else if (salary > 150000) {
        timePerApp = 3;
    } else if (salary > 200000) {
        timePerApp = 3.5;
    }

    const regularTime = apps * timePerApp * months;
    const sidestepTimeValue = regularTime * 0.6; // 40% faster with sidestep

    timeTaken.textContent = `${regularTime} hours`;
    sidestepTime.textContent = `${Math.round(sidestepTimeValue)} hours`;
}

if (salaryRange && salaryDisplay && currencySelect) {
    salaryRange.addEventListener('input', updateSalaryDisplay);
    currencySelect.addEventListener('change', updateSalaryDisplay);
    updateSalaryDisplay(); // Initial call
}

if (jobApps && salaryRange && startTime) {
    jobApps.addEventListener('input', calculateTime);
    salaryRange.addEventListener('input', calculateTime);
    startTime.addEventListener('change', calculateTime);
    calculateTime(); // Initial call
}

// Set initial placeholder for job applications
if (jobApps) {
    jobApps.placeholder = "10";
}

// Update salary display when page loads
document.addEventListener('DOMContentLoaded', function() {
    if (salaryRange && salaryDisplay && currencySelect) {
        updateSalaryDisplay();
    }
});






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
