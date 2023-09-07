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
//Small Navbar js
let button = document.getElementById("button");
let flag = 0;
let icon = document.getElementById("changeItem");
let menu = document.getElementById("menuItems");
button.addEventListener("click", function() {
    if (flag === 0) {
        icon.classList.remove("fa-solid", "fa-bars");
        icon.classList.add("fa-solid", "fa-xmark");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 1;
    } else {
        icon.classList.remove("fa-solid", "fa-xmark");
        icon.classList.add("fa-solid", "fa-bars");
        menu.classList.toggle("small-navbar-menu-navbar");
        flag = 0;
    }
});

//Small Navbar js ends