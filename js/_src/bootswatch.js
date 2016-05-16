(function ($) {

  $(function () {

    // fix sub nav on scroll
    var $win = $(window);
    var $body = $('body');
    var $nav = $('.navbar');
    var navHeight = 0;
    var subnavHeight = $('.navbar').first().height();
    var subnavTop = $('.navbar').length && $('.navbar').offset().top - navHeight;
    var marginTop = parseInt($body.css('margin-top'), 10);
    var isFixed = 0;

    function processScroll() {
      var i;
      var scrollTop = $win.scrollTop();

      if (scrollTop >= subnavTop && !isFixed) {
        isFixed = 1;
        if ($(window).width() >= 992) {
          $nav.addClass('navbar-fixed-top');
          $('#introduction').addClass('addPadding');
        }
      } else if (scrollTop <= subnavTop && isFixed) {
        isFixed = 0;
        $nav.removeClass('navbar-fixed-top');
        $('#introduction').removeClass('addPadding');
      }
    }

    processScroll();

    $win.on('scroll', processScroll);

  });

})(window.jQuery);
