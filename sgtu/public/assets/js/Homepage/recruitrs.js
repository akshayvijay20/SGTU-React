// ***** RECRUITERS SECTION *****

const recruiterSwiper = new Swiper('.recruiterSwiper', {
    speed:2000,loop:true,slidesPerView:1.15,spaceBetween:10,autoplay:{delay:6000,disableOnInteraction:false},
    breakpoints: {
        560: {slidesPerView:1.5,spaceBetween:20},
        1024: {slidesPerView:2.2,spaceBetween:20}
    }
});

// $(document).ready(function () {
//     $('.hiring-slider').slick({
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         arrows: false,
//         speed: 2000,
//         infinite: true,
//         autoplaySpeed: 3000,
//         autoplay: true,
//         pauseOnHover: false,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                 }
//             },
//             {
//                 breakpoint: 769,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     arrows: false,
//                 }
//             }
//         ]
//     });
// });
