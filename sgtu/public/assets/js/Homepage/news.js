// ***** NEWS SECTION *****

$(document).ready(function () {
    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 1000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
});

