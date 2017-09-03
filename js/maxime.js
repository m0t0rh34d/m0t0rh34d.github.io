(function($) {
  "use strict"; // Start of use strict













  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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
      $( this ).css("color", "#D3D3D3"); 
        })
    .mouseout (function() {
      $( this ).css("color", "white");
    });
    

    $(".sklls")
    .mouseover (function() {
      $( this ).css("color", "aquamarine"); 
        })
    .mouseout (function() {
      $( this ).css("color", "white");
    });

    $(".cntcts")
    .mouseover (function() {
      $( this ).css("color", "#DE3163"); 
        })
    .mouseout (function() {
      $( this ).css("color", "white");
    });











})(jQuery); // End of use strict

