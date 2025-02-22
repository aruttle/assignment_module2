// Swiper js for carousel
document.addEventListener("DOMContentLoaded", function () {

    // Initialize Swiper
    new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});