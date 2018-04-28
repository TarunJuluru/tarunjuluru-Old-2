/*global document*/
/*global window*/
/*global $*/
/*$ = jQuery*/

$(document).ready(function () {
    "use strict";

    var scrollLink = $('.nav-link');

    // Smooth scrolling
    scrollLink.click(function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 140
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function () {

        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 160;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });

    });

    //collapsing nav bar when clicked on nav links
    scrollLink.on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});
