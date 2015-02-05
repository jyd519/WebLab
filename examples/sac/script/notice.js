(function($) {
  $(function() {
    $('.notice').each(function() {
      var notice = this;

      $('.notice-head li', this).click(function() {
        $(this).parent().children().removeClass('selected');
        $(this).addClass('selected');
        var i = $('.notice-head li', notice).index(this);
        $('.notice-list', notice).hide()
          .eq(i).show();
        // return false;
      }).eq(0).click();

      $('.notice-list', this).each(function() {
        var nl = this;

        $('ul:gt(0)', nl).hide();

        $('.left-menu a', nl).click(function() {
          $(nl).find('ul:visible').hide();
          
          var i = $('.left-menu a', nl).index(this);
          $('ul', nl).eq(i).show();

          $('.left-menu a', nl).removeClass('cur');
          $(this).addClass('cur');
          return false;
        }).eq(0).click();
      });

    });

  });
})($);
