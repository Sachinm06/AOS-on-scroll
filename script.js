// (function ($) {

//     // header-responsive

//     function setupHamburgerMenu() {
//         $(".hamburger-menu").click(function () {
//             $("nav").toggleClass("active");
//             $("body").toggleClass("no-scroll");

//             if ($("nav").hasClass("active")) {
//                 $(".hamburger-menu").html("&times;");
//             } else {
//                 $(".hamburger-menu").html("&#9776;");
//             }
//         });

//         $(window).on("scroll", function () {
//             if ($(window).scrollTop() > 0) {
//                 $(".blurred-top").fadeIn();
//             } else {
//                 $(".blurred-top").fadeOut();
//             }
//         });
//     }

//     function scrollToTopOnLoad() {
//         setTimeout(function () {
//             $(window).scrollTop(0);
//         }, 10);
//     }

//     // AOS Animation

//     function initializeScrollAnimations() {
//         let aosInitialized = false;
//         let divVisible = false;
//         let firstTimeAnimationDone = false;

//         $(window).scroll(function () {
//             let scrollTop = $(this).scrollTop();

//             if (scrollTop > 200 && !aosInitialized) {
//                 aosInitialized = true;
//                 initAOS();

//                 if (!firstTimeAnimationDone) {
//                     firstTimeAnimationDone = true;
//                     setTimeout(showInitialDelayedDivs, 100);
//                 }
//             }

//             if (aosInitialized) {
//                 if (scrollTop > 100 && !divVisible) {
//                     divVisible = true;
//                     showDelayedDivs(100);
//                 }

//                 if (scrollTop < 100 && divVisible) {
//                     divVisible = false;
//                     hideDelayedDivs();
//                 }
//             }
//         });
//     }

//     function initAOS() {
//         AOS.init({
//             duration: 1200,
//             easing: "ease-in-out",
//             once: false
//         });
//         AOS.refresh();
//     }

//     function showInitialDelayedDivs() {
//         animateDelayedDiv(".delayed-div", { left: "50%", opacity: 1 }, 500);
//         animateDelayedDiv(".delayed-div-right", { right: "50%", opacity: 1 }, 500);
//         animateDelayedDiv(".delayed-div-right-2", { right: "50%", opacity: 1 }, 500);
//     }

//     function showDelayedDivs(duration) {
//         animateDelayedDiv(".delayed-div", { left: "50%", opacity: 1 }, duration);
//         animateDelayedDiv(".delayed-div-right", { right: "50%", opacity: 1 }, duration);
//         animateDelayedDiv(".delayed-div-right-2", { right: "50%", opacity: 1 }, duration);
//     }

//     function hideDelayedDivs() {
//         animateHideDiv(".delayed-div", { left: "-50%", opacity: 0 });
//         animateHideDiv(".delayed-div-right", { right: "-50%", opacity: 0 });
//         animateHideDiv(".delayed-div-right-2", { right: "-50%", opacity: 0 });
//     }

//     function animateDelayedDiv(selector, props, duration) {
//         $(selector)
//             .css({ display: "block", opacity: 0 })
//             .animate(props, {
//                 duration: duration,
//                 easing: "easeOutCubic"
//             });
//     }

//     function animateHideDiv(selector, props) {
//         $(selector).animate(props, {
//             duration: 800,
//             easing: "easeInCubic",
//             complete: function () {
//                 $(this).css({ display: "none" });
//             }
//         });
//     }

//     // calender

//     function initializeCalendar() {
//         flatpickr("#calendar", {
//             inline: true,
//             dateFormat: "F d, Y",
//             defaultDate: "2025-02-08"
//         });
//     }

//     $(document).ready(function () {
//         setupHamburgerMenu();
//         scrollToTopOnLoad();
//         initializeScrollAnimations();
//         initializeCalendar();
//     });

// })(jQuery);

(function ($) {

    // header-responsive

    function setupHamburgerMenu() {
        $(".hamburger-menu").click(function () {
            $("nav").toggleClass("active");
            $("body").toggleClass("no-scroll");

            if ($("nav").hasClass("active")) {
                $(".hamburger-menu").html("&times;");
            } else {
                $(".hamburger-menu").html("&#9776;");
            }
        });
    }

    // Blurred top on scroll (disabled below 991px)
    function setupBlurredTopEffect() {
        function handleBlurredTopOnScroll() {
            if ($(window).width() >= 991) {
                if ($(window).scrollTop() > 0) {
                    $(".blurred-top").fadeIn();
                } else {
                    $(".blurred-top").fadeOut();
                }
            } else {
                $(".blurred-top").hide();
            }
        }

        $(window).on("scroll.headerEffect", handleBlurredTopOnScroll);

        $(window).on("resize", function () {
            if ($(window).width() < 991) {
                $(".blurred-top").hide();
            } else {
                handleBlurredTopOnScroll(); // Re-check on resize up
            }
        });

        handleBlurredTopOnScroll(); // Initial state
    }

    function scrollToTopOnLoad() {
        setTimeout(function () {
            $(window).scrollTop(0);
        }, 10);
    }

    // AOS Animation

    function initializeScrollAnimations() {
        let aosInitialized = false;
        let divVisible = false;
        let firstTimeAnimationDone = false;

        $(window).scroll(function () {
            let scrollTop = $(this).scrollTop();

            if (scrollTop > 200 && !aosInitialized) {
                aosInitialized = true;
                initAOS();

                if (!firstTimeAnimationDone) {
                    firstTimeAnimationDone = true;
                    setTimeout(showInitialDelayedDivs, 100);
                }
            }

            if (aosInitialized) {
                if (scrollTop > 100 && !divVisible) {
                    divVisible = true;
                    showDelayedDivs(100);
                }

                if (scrollTop < 100 && divVisible) {
                    divVisible = false;
                    hideDelayedDivs();
                }
            }
        });
    }

    // function initAOS() {
    //     AOS.init({
    //         duration: 1200,
    //         easing: "ease-in-out",
    //         once: false
    //     });
    //     AOS.refresh();
    // }
    function initAOS() {
        if ($(window).width() >= 991) {
            AOS.init({
                duration: 1200,
                easing: "ease-in-out",
                once: false
            });
            AOS.refresh();
        }
    }


    function showInitialDelayedDivs() {
        animateDelayedDiv(".delayed-div", { left: "50%", opacity: 1 }, 500);
        animateDelayedDiv(".delayed-div-right", { right: "50%", opacity: 1 }, 500);
        animateDelayedDiv(".delayed-div-right-2", { right: "50%", opacity: 1 }, 500);
    }

    function showDelayedDivs(duration) {
        animateDelayedDiv(".delayed-div", { left: "50%", opacity: 1 }, duration);
        animateDelayedDiv(".delayed-div-right", { right: "50%", opacity: 1 }, duration);
        animateDelayedDiv(".delayed-div-right-2", { right: "50%", opacity: 1 }, duration);
    }

    function hideDelayedDivs() {
        animateHideDiv(".delayed-div", { left: "-50%", opacity: 0 });
        animateHideDiv(".delayed-div-right", { right: "-50%", opacity: 0 });
        animateHideDiv(".delayed-div-right-2", { right: "-50%", opacity: 0 });
    }

    function animateDelayedDiv(selector, props, duration) {
        $(selector)
            .css({ display: "block", opacity: 0 })
            .animate(props, {
                duration: duration,
                easing: "easeOutCubic"
            });
    }

    function animateHideDiv(selector, props) {
        $(selector).animate(props, {
            duration: 800,
            easing: "easeInCubic",
            complete: function () {
                $(this).css({ display: "none" });
            }
        });
    }

    // calender

    function initializeCalendar() {
        flatpickr("#calendar", {
            inline: true,
            dateFormat: "F d, Y",
            defaultDate: "2025-02-08"
        });
    }

    $(document).ready(function () {
        setupHamburgerMenu();
        scrollToTopOnLoad();
        initializeScrollAnimations();
        initializeCalendar();
        setupBlurredTopEffect(); // ✅ added here
    });

})(jQuery);
