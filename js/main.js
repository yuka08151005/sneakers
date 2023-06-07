'use strict';

{
  const ham = document.getElementById('js-ham');
  const nav = document.getElementById('js-nav');
  const mask = document.getElementById('mask');
  // const header = document.getElementById('header');
  
  const pick = document.querySelector('.pick');
  const feature = document.querySelector('.feature');
  const contact = document.querySelector('.contact');

  ham.addEventListener('click',function(){
  this.classList.toggle('active');
  nav.classList.toggle('active');
  mask.classList.toggle('active');

});

  mask.addEventListener('click', function(){
    this.classList.remove('active');
    ham.classList.remove('active');
    nav.classList.remove('active');
  });

    pick.addEventListener('click', function(){
    this.classList.remove('active');
    ham.classList.remove('active');
    nav.classList.remove('active');
    mask.classList.toggle('active');
  });

    feature.addEventListener('click', function(){
    this.classList.remove('active');
    ham.classList.remove('active');
    nav.classList.remove('active');
    mask.classList.toggle('active');
  });

    contact.addEventListener('click', function(){
    this.classList.remove('active');
    ham.classList.remove('active');
    nav.classList.remove('active');
    mask.classList.toggle('active');
  });

}


  {
    $(function(){
      $(window).scroll(function (){
          $('.box img').each(function(){
              var targetElement = $(this).offset().top;
              var scroll = $(window).scrollTop();
              var windowHeight = $(window).height();
              if (scroll > targetElement - windowHeight + 200){
                  $(this).css('opacity','1');
                  $(this).css('transform','translateY(0)');
              }
          });
      });
  });
  }


  {
    var swiper = new Swiper(".swiper", {
      loop: true,
      autoplay: true,
      delay:10000,
      slidesPerView: 1.3,
      spaceBetween: 30,
      centeredSlides:true,
      breakpoints: {
        768:{
            slidesPerView: 4,
            spaceBetween: 35,
        }
      }
    });
  }


