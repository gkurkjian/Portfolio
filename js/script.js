// ensuring all page content has loaded (like 'useEffect' hook in React.js)
document.addEventListener('DOMContentLoaded', (event) => {
console.log("DOMContentLoaded Successfully!")
// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked
// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

  /* --- CODE FOR INSERTING CURRENT COPYRIGHT YEAR --- */
  document.querySelector('#copyright_year').innerHTML = new Date().getFullYear();    
});