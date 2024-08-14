document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNav');
    const navbarHeight = navbar.offsetHeight;

    // // Manejar el cambio de tamaño del navbar cuando se hace scroll
    // window.addEventListener('scroll', function() {
    //     if (window.scrollY > navbarHeight) {
    //         navbar.classList.add('scrolled');
    //         carousel.style.marginTop = '50px'; // Ajusta el margen según el tamaño del navbar cuando se hace scroll
    //     } else {
    //         navbar.classList.remove('scrolled');
    //         carousel.style.marginTop = `${navbarHeight}px`; // Ajusta el margen según el tamaño del navbar en la parte superior
    //     }
    // });

    // Smooth scroll to the top when clicking "home"
    const homeLink = document.querySelector('#homeLink');
    if (homeLink) {
        homeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll to the top when the page loads
    window.addEventListener('load', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Close the navbar when clicking a nav link in mobile view
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            var collapse = document.querySelector('.navbar-collapse');
            if (collapse) {
                var bsCollapse = bootstrap.Collapse.getInstance(collapse);
                if (bsCollapse && bsCollapse._isShown()) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Load the default page (inicio.html) when the site loads
    function loadPage(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Load the default page (inicio.html) when the site loads
    window.onload = function() {
        loadPage('inicio.html');
    };

    // Handle link clicks to load pages dynamically
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const url = this.getAttribute('href');
            loadPage(url);
        });
    });
});
