$(document).ready(function () {
    $('.testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // dots: true,
        speed: 2000,
        infinite: true,
        autoplaySpeed: 3000,
        // autoplay: true,
        prevArrow: '<button type="button" class="slick-prev" id="prev-icon"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next" id="next-icon"><i class="fa-solid fa-angle-right"></i></button>',
        
    });
});