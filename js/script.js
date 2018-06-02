/*global document*/
/*global window*/
/*global $*/
/*$ = jQuery*/

$(document).ready(function() {
    "use strict";

    var $scrollLink = $('.nav-link');
    var $backToTop = $(".back-to-top");

    //    var $menuOpen = $(".menu-icon");
    //    var $menuClose = $(".close-icon");
    //
    //    //hamburgerMenu toogle onClick
    //    $menuClose.hide();
    //
    //    $menuOpen.onclick(function () {
    //        $menuOpen.hide();
    //        $menuClose.show();
    //    });
    //
    //    $menuClose.onclick(function () {
    //        $menuOpen.show();
    //        $menuClose.hide();
    //    });



    // Hide/Show navbar on scroll position
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $("nav").slideDown(400);
        } else {
            $("nav").slideUp(400);
        }
        prevScrollpos = currentScrollPos;
    }


    // Smooth scrolling through respective sections on clicking nav-links
    $scrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 140
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {

        var scrollbarLocation = $(this).scrollTop();

        $scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 160;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

        //scroll animation on click
        $backToTop.on("click", function() {
            $("html, body").stop().animate({
                scrollTop: 0
            }, 2000);
            return false;
        });

    });

    //collapsing nav bar when clicked on nav links
    $scrollLink.on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

});