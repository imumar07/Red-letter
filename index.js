function increaseNumber(targetElement, endValue) {
    let currentNumber = 0;
    const duration = 2300;
    let step = 20;
    if (endValue === 20) {
        step = 1;
    }
    const interval = duration / (endValue / step);
    const timer = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= endValue) {
            clearInterval(timer);
            currentNumber = endValue;
        }
        targetElement.textContent = currentNumber;
        let content = targetElement.textContent;
        targetElement.textContent = content + "+";
    }, interval);


}
const lastStats = document.getElementById("lastStats");
const placement2021Element = document.getElementById('placement-2021');
const placement2022Element = document.getElementById('placement-2022');
const placement2023Element = document.getElementById('placement-2023');
const statisticsSection = document.getElementById('placement-stats');
const facultNumberElement = document.getElementById("facultyNumber");
const studentNumberElement = document.getElementById("studentsNumber");
const experienceNumberElement = document.getElementById("experienceNumber");

const observer_1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            increaseNumber(placement2021Element, 500);
            increaseNumber(placement2022Element, 900);
            increaseNumber(placement2023Element, 690);
            observer_1.unobserve(statisticsSection);
        }
    });
});

const observer_2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            increaseNumber(placement2021Element, 500);
            increaseNumber(placement2022Element, 900);
            increaseNumber(placement2023Element, 690);
            increaseNumber(facultNumberElement, 500);
            increaseNumber(studentNumberElement, 5000);
            increaseNumber(experienceNumberElement, 20);
            observer_2.unobserve(lastStats);
        }
    });
});

observer_1.observe(statisticsSection);
observer_2.observe(lastStats);


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const navbar2 = document.querySelector('.navbar-expand-lg');
    const showDiv = document.querySelector('.placement-content');
    navbar.style.backgroundColor = 'transparent';
    navbar2.style.backgroundColor = 'transparent';
    // rgba(0, 0, 0, 0.6)

    let hasVisitedShowDiv = false;


    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function updateNavbarBackground() {
        if (!hasVisitedShowDiv && isInViewport(showDiv)) {
            navbar.style.backgroundColor = '#b1040e'; 
            hasVisitedShowDiv = true; 
        }
    }

    updateNavbarBackground();
    window.addEventListener('scroll', updateNavbarBackground);
});





