const navbar = document.querySelector('.navbar-nav');
const collapse = document.getElementById('navbarNav');

collapse.addEventListener('show.bs.collapse', () => {
    navbar.classList.add('bg-secondary-subtle');
});

collapse.addEventListener('hidden.bs.collapse', () => {
    navbar.classList.remove('bg-secondary-subtle');
});