$(function(){
    $('a[href="#"]').click(function(e){
        e.preventDefault();
      })

    const swiperMain = new Swiper('.main-slider .swiper', {
        speed: 700,
        slidesPerView:2,
        centeredSlides:true,
        loop:true,
        autoplay: {
            delay: 2000,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
})