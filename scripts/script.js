document.addEventListener("DOMContentLoaded", function () {
    // Automatically update the copyright year
    document.querySelector('#year').textContent = new Date().getFullYear();

    // Initialize Swiper
    const swiper = new Swiper(".card-swiper", {
        centeredSlides: false,
        spaceBetween: 0,
        slidesPerView: 'auto'
    });
});