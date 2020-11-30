


$(document).ready(function(){
    $("#carousel1").owlCarousel({
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        dots: false,
        margin: 15,
        nav  : false,
        navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
        autoplayHoverPause: true,
        autoWidth: true,
        responsive : {
          0 : {
            items: 1
          },
          575 : {
            items: 1
          },
          768 : {
            items: 1
          },
          992 : {
            items: 2
          },
          1200:{
            items: 4
          }
        }



        
    });
  });



  $(document).ready(function(){
    $("#carousel2").owlCarousel({
      autoplay: true,
      loop: true,
      responsive : {
        0 : {
          items: 1
        },
        768 : {
          items: 1
        },
        992 : {
          items: 2
        },
        1200:{
          items: 3
        }
      }
      
                
    });
  });

 

  // плавный to top 

  var top_show = 250; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('#top').fadeIn();
      else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });


  // end of плавный to top 


  AOS.init({ 

    // Global settings: 
     disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function 
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on 
    initClassName: 'aos-init', // class applied after initialization 
    animatedClassName: 'aos-animate', // class applied on animation 
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll 
    disableMutationObserver: false, // disables automatic mutations' detections (advanced) 
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced) 
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced) 
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes: 
    offset: 0, // offset (in px) from the original trigger point 
    delay: 1200, // values from 0 to 3000, with step 50ms 
    duration: 1200, // values from 0 to 3000, with step 50ms 
    easing: 'ease', // default easing for AOS animations 
    once: true, // whether animation should happen only once - while scrolling down 
    mirror: false, // whether elements should animate out while scrolling past them 
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
   
  
  }); 

  $(window).on('load', function () {
    window.setTimeout(function () {
      $('.preloader').fadeOut().end().delay(400).fadeOut('slow');
    }, 1000);
  });