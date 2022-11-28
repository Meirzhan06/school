$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
})
$(document).ready(function() {
    $('.bars').click(function(event) {
        $('.burger-menu').toggleClass('active');
    });
});
$(document).ready(function() {
    $('.button-close-burger').click(function(event) {
        $('.burger-menu').removeClass('active');
    });
});