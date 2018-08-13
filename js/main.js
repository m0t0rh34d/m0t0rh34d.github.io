(function($) {
  "use strict"; // Start of use strict













  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])')
    .click(function() {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        &&
        location.hostname == this.hostname
      ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });


  // Disappear "⤴" as soon as documents is ready
  $(document).ready(function() {
      $(".navbar-brand").hide();
    });



  // Appear "⤴" sector only if page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $(".navbar-brand").show();
    } else {
      $(".navbar-brand").hide();
    }
  });


  // Colorize WHO, SKILLS, CONTACTS 
    $(".who")
    .mouseover (function() {
      $( this ).css("color", "#7FFFD4"); 
        })
    .mouseout (function() {
      $( this ).css("color", "white");
        })
    .click (function() {
      $(this).addClass("animated pulse")
    });
    

    $(".sklls")
    .mouseover (function() {
      $( this ).css("color", "#FF2052"); 
        })
    .mouseout (function() {
      $( this ).css("color", "white");
    })
    .click (function() {
      $(this).addClass("animated pulse")
    });



    $(".cntcts")
    .mouseover (function() {
      $( this ).css("color", "#C0C0C0"); 
        })
    .mouseout (function() {
      $( this ).css("color", "white");
    })
    .click (function() {
      $(this).addClass("animated pulse")
    });


    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.cntcts, .sklls, .who')
    .on (animationEnd, function () {
        $(this).removeClass("animated pulse");
      });

    
    $(".visit")
    .click (function() {
      $(".visit").addClass("animated tada");
    });

    $(".twt")
    .click (function() {
      $(".twt").addClass("animated rubberBand");
    });


    $(".gth")
    .click (function() {
      $(".gth").addClass("animated rubberBand");
    });

    $(".goo")
    .click (function() {
      $(".goo").addClass("animated rubberBand");
    });







})(jQuery); // End of use strict

