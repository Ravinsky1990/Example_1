jQuery(document).ready(function () {

    jQuery('.about').click(function () {
        var scr = $(".intro").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1900);
        if ($('.responsive_menu_marker').css('display') == "none") {} else {
            menu();
        }
    });
    jQuery('.stories').click(function () {
        var scr = $(".articles").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1900);
        if ($('.responsive_menu_marker').css('display') == "none") {} else {
            menu();
        }
    });
    jQuery('.hello').click(function () {
        var scr = $(".team").offset();
        $('body,html').animate({
            scrollTop: scr.top,
        }, 1900);
        if ($('.responsive_menu_marker').css('display') == "none") {} else {
            menu();
        }
    });

    var menu = function () {
        $('.responsive_menu_marker span:first-child').toggleClass('toggle_class_plus');
        $('.responsive_menu_marker span:last-child').toggleClass('toggle_class_minus');
        $('div.responsive_menu_marker div span:nth-child(2)').toggleClass('fade');
        $('.responsive_menu_ul,.responsive_menu_ul li').toggleClass('block_ul');
        $('div.responsive_menu').toggleClass('height');
    };
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > '200') {
            $('div.responsive_menu').css({
                display: 'block',
                position: 'fixed',
                'z-index': '99000'
            });
        } else {
            $('div.responsive_menu').css({
                display: 'none',
            });
        }
    });
    jQuery(document).ready(function () {
        $('.responsive_menu_marker').on("click", function () {
            menu();
        });
    });
});

