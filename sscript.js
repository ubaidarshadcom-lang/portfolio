
/* ==============================
   SCROLL REVEAL ANIMATION
============================== */

document.addEventListener("DOMContentLoaded", function () {

    const revealElements = document.querySelectorAll(
        ".about-section, .services-section, .project-card, .portfolio-footer"
    );

    // Check if browser supports scroll observation
    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            observer.observe(element);
        });

    } else {

        // Show content normally in older browsers
        revealElements.forEach(function (element) {
            element.classList.add("active");
        });

    }

});


/* ==============================
   IMAGE LIGHTBOX FUNCTIONALITY
============================== */

document.addEventListener("DOMContentLoaded", function () {

    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeButton = document.getElementById("lightboxClose");

    // Select project images
    const projectImages = document.querySelectorAll(
        ".project-card img, .about-photo img"
    );

    // Open popup when an image is clicked
    projectImages.forEach(function (img) {

        img.style.cursor = "zoom-in";

        img.addEventListener("click", function () {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt || "Enlarged image";
            lightbox.classList.add("show");
            document.body.style.overflow = "hidden";
        });

    });

    // Close popup using the close button
    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking the dark background
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close using the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove("show");
        document.body.style.overflow = "";
    }

});
