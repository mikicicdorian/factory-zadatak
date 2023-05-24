$(document).ready(function() {
    $('.lijevo').click(function() {
      var slideWidth = $('.red_prvi img').outerWidth();
      $('.red_prvi, .red_drugi').animate({ marginLeft: -slideWidth }, 700, function() {
        $('.red_prvi img:first-child').appendTo('.red_prvi');
        $('.red_drugi img:first-child').appendTo('.red_drugi');
        $('.red_prvi, .red_drugi').css('margin-left', 0);
      });
    });
  
    $('.desno').click(function() {
      var slideWidth = $('.red_prvi img').outerWidth();
      $('.red_prvi img:last-child').prependTo('.red_prvi');
      $('.red_drugi img:last-child').prependTo('.red_drugi');
      $('.red_prvi, .red_drugi').css('margin-left', -slideWidth);
      $('.red_prvi, .red_drugi').animate({ marginLeft: 0 }, 700);
    });
  });
  