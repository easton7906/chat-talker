$(document).ready(function () {
    $("#go-top").on("click", function () {
      $("html,body").animate({ scrollTop: 0 }, 500);
    });
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 8,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        992: {
          items: 2,
        },
        1100: {
          items: 3,
        },
      },
    });
  });