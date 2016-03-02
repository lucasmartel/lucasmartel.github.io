//fixed nav-bar code for desktop
$("document").ready(function($){
    var nav = $('.desktop-nav');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 202) {
          nav.addClass("fixed");
      } else {
          nav.removeClass("fixed");
      }
  });
});
