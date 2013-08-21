(function ($) {
    
    $(function(){
    
    // fix sub nav on scroll
    var $win = $(window),
        $body = $('body'),
        $nav = $('.navbar'),
        navHeight = 0,
        subnavHeight = $('.navbar').first().height(),
        subnavTop = $('.navbar').length && $('.navbar').offset().top - navHeight,
        marginTop = parseInt($body.css('margin-top'), 10),
        isFixed = 0;

    function processScroll() {
      var i, scrollTop = $win.scrollTop();

      if (scrollTop >= subnavTop && !isFixed) {
        isFixed = 1;
        $nav.addClass('navbar-fixed-top');
        $("#introduction").addClass('addPadding');
      } else if (scrollTop <= subnavTop && isFixed) {
        isFixed = 0;
        $nav.removeClass('navbar-fixed-top');
        $("#introduction").removeClass('addPadding');
      }
    }

    processScroll();

    $win.on('scroll', processScroll);

  });

})(window.jQuery);