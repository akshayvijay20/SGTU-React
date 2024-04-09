$(document).ready(function () {

    function sticky_relocate() {    
        var window_top = $(window).scrollTop();
        var div_top = $('#sticky-anchor').offset().top;
        if (window_top > div_top) {
        $('.pageHeader').addClass('stick');
        } else {
        $('.pageHeader').removeClass('stick');
        }   
    }
    $(function () {
        $(window).scroll(sticky_relocate);
        sticky_relocate();
    });

    $('.mainNav > li').find('.sub-menu').siblings('a').attr('role','button').removeAttr('href');

    $('.hamburger').click(() => {
        $('body').toggleClass('nav-open');
        $('.menuWrapper, .hamburger').toggleClass('nav-open');
        if ($('.menuWrapper').hasClass('nav-open')) {
            $('.mainNav .active').removeClass('active');
            $('.sub-menu, .sub-menu .accordion-content').hide();
            $('.mainNav').removeClass('shiftMenu');
        } else {
            $('.mainNav .active').removeClass('active');
        }
    });

    $('.has-submenu a').on('click',function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub-menu').fadeToggle(300);

        $(this).parent().siblings().find('.active').toggleClass('active');
        $(this).parent().siblings().find('.sub-menu').fadeOut(100);

        if( $(window).width() < 1024 ) {
            $('.subMenu_L1 .has-submenu > a').on('click',function(e){
                e.preventDefault();
                $('.mainNav').addClass('shiftMenu');
                $('.menuContainer').animate({scrollTop:$(this).offset().top-1000},10);
            });

            $('.shiftBack').on('click',function(){
                $('.mainNav').removeClass('shiftMenu');
                $('.subMenu_L2').hide();
            });
        }

    });

});

// Menu Tabs

$('.menuTabBtn').on('click',function(){
    $(this).siblings().removeClass('active1');
    $(this).addClass('active1');
    var tabTrig = $(this).attr('rel');
    $(this).parents('.subMenu_L2').find('.'+ tabTrig).show();
    $(this).parents('.subMenu_L2').find('.'+ tabTrig).siblings('.accordion').hide();
});

// accordion item open close
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function () {
        // Toggle the 'active' class for the clicked item
        this.classList.toggle('active');
        // Close all other accordion items
        const allAccordions = document.querySelectorAll('.accordion-header');
        allAccordions.forEach(acc => {
            if (acc !== this && acc.classList.contains('active')) {
                acc.classList.remove('active');
                acc.nextElementSibling.style.display = 'none';
            }
        });
        // Toggle the display of the content for the clicked item
        const content = this.nextElementSibling;
        const contentDisplay = window.getComputedStyle(content).getPropertyValue('display');
        if (contentDisplay === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});

if( $(window).width() < 640 ) {
    $('.search-field').on('focus',function(){
        $('.header-logo').addClass('searchOpen');
    });
    $('.search-field').on('blur',function(){
        $('.header-logo').removeClass('searchOpen');
    });
}

/* Footer menu */

if ($(window).width() < 768) {
    $('.footMenuHead').on('click', function(){
        var headParent = $(this).parents('.footMenu');
        $(headParent).siblings().find('.footMenuContent').slideUp();
        $(headParent).siblings().find('.footMenuHead').removeClass('open');
        $(headParent).find('.footMenuContent').slideToggle();
        $(this).toggleClass('open');
    })
}