// const menuBtn = document.getElementById("menuBtn");
// const navbar = document.getElementById("navbar");

// menuBtn.addEventListener("click", () => {
//     navbar.classList.toggle("active");
//     // toggle class "active"
// });


const navbar = document.querySelector('.navbar-nav');
const collapse = document.getElementById('navbarNav');

collapse.addEventListener('show.bs.collapse', () => {
    navbar.classList.add('bg-secondary-subtle');
});

collapse.addEventListener('hidden.bs.collapse', () => {
    navbar.classList.remove('bg-secondary-subtle');
});