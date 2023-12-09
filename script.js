document.addEventListener("DOMContentLoaded", function() {
    
    const navLinks = document.querySelectorAll('#navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    
    var navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#233240";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});