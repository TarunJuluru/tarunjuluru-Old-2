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

        scrollLink.on('click', function (event) {
            $(event.currentTarget).parent().addClass('active');
            $(event.currentTarget).parent().siblings().removeClass('active');
        });
    });

    //collapsing nav bar when clicked on nav links
    scrollLink.on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});
