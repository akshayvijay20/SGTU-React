
$('.health-science').animate({ scrollLeft: $('.hsList .active').offset().left }, 500);

$(document).ready(function () {
    $('.our-professor-slider').slick({
        slidesToShow:4,slidesToScroll:4,arrows:false,dots:true,speed:2000,rows:2,infinite:true,autoplaySpeed:5000,autoplay:true,pauseOnHover: false,
        responsive: [
            {breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:3}},
            {breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},
        ]
    });
});

const recruiterSwiper = new Swiper('.recruiterSwiper', {
    speed:2000,loop:true,slidesPerView:1.15,spaceBetween:10,autoplay:{delay:6000,disableOnInteraction:false},
    breakpoints: {
        560: {slidesPerView:1.5,spaceBetween:20},
        1024: {slidesPerView:2.2,spaceBetween:20},
        1280: {slidesPerView:2.5,spaceBetween:20}
    }
});

const placementSwiper = new Swiper('.placementSwiper', {
    speed:3000,loop:true,slidesPerView:2,spaceBetween:5,autoplay:{delay:0,disableOnInteraction:false},
    breakpoints: {
        640: {slidesPerView:3},
        768: {slidesPerView:4},
        1024: {slidesPerView:5},
        1280: {slidesPerView:6},
        1536: {slidesPerView:7}
    }
});

const accredSwiper = new Swiper('.accredSwiper', {
    speed:2000,loop:true,slidesPerView:2,spaceBetween:30,autoplay:{delay:2000,disableOnInteraction:false},
    breakpoints: {
        640: {slidesPerView:3},
        768: {slidesPerView:4},
        1024: {slidesPerView:5},
    }
});

var labSwiper = new Swiper(".labSwiper", {
    effect: "coverflow", grabCursor: true, centeredSlides: true, loop: true,
    coverflowEffect: { rotate: 0, stretch: 0, depth: 100, modifier: 4, slideShadows: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination" },
    keyboard: { enabled: true },
    //mousewheel: { thresholdDelta: 70 },
    breakpoints: {
        767: { slidesPerView: 1.3 },
        1024: { slidesPerView: 1.5 },
    }
});

$(".pciContent").hide();
$('.profcatItem:first-child .pciContent').show();
$(".pciHead").click(function() {
    $(this).parents('.profcatItem').addClass('active');
    $(this).parents('.profcatItem').siblings().removeClass('active');
    $(this).parents('.profcatItem').siblings().find('.pciContent').hide();
    $(this).siblings('.pciContent').slideDown();            
    $('.our-professor-slider').slick('setPosition');
    var scltoHead = $(this).parents('.profcatItem');
    //if($(window).width()<768){
        $('html,body').animate({scrollTop:scltoHead.offset().top-70},500);
    //}
});

