// Script File

// Home Section Starts
  var menuBtn = document.querySelector('.menu-icon'); // Fix the selector to include the class prefix "."
  var menu = document.querySelector('.nav'); // Remove "a" from the selector
  var menuLinks = document.querySelectorAll('ul li'); // Correct the selector for menu links

  menuBtn.addEventListener('click', activeClass);

  function activeClass() {
    menuBtn.classList.toggle('active'); // Fix the class name to use "menuBtn" instead of "menu-icon"
    menu.classList.toggle('active');
  }

  for (i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', menuItemClicked);
  }

  function menuItemClicked() {
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
  }

  var homeSection = document.querySelector('.home');
  window.addEventListener('scroll', scrollFunction);
  window.addEventListener('load', scrollFunction);

  function scrollFunction() {
    if (window.scrollY > 60) {
      homeSection.classList.add('active');
    } else {
      homeSection.classList.remove('active');
    }
  }
  // Home Section Ends

  // Portfolio Section Starts
  var $galleryContainer = $('.portfolio').isotope({
    itemSelector: '.card-container',
    layoutMode: 'fitRows',
  });

  $('.button-group .btn').on('click', function () {
    $('.button-group .btn').removeClass('active');
    $(this).addClass('active');

    var value = $(this).attr('data-filter');
    $galleryContainer.isotope({
      filter: value,
    });
  });

  // magnific popup
  $('.gallery').magnificPopup({
    delegate: '.overlay a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
  // Portfolio Section Ends

  // Testimonials Section Starts
  $('.testimonials-container').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 6000, // Fix the property name to "autoplayTimeout"
    margin: 10,
    nav: true,
    navText: [
      "<i class='fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: true,
      },
      768: {
        items: 2,
      },
    },

  });