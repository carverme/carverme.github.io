console.log("jscript working")


$(document).ready(function(){
   $('.parallax').parallax();
   $('.scrollspy').scrollSpy();

   
   //Attempt to create transparent to solid navbar on scroll.
   $(window).scroll(function() {
     //This function checks if window is scrolled more than 500px, add/removes solid class.
     if($(this).scrollTop() > 500) {
        $('.navbar').addClass('solid');
     } else {
        $('.navbar').removeClass('solid');
     }
   });
 });
