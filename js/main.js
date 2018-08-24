console.log("jscript working")



$(document).ready(function(){
   $('.parallax').parallax();
   $('.scrollspy').scrollSpy();
   // $(window).on("scroll", function() {
   //   var fromTop = $(window).scrollTop();
   //   $("navbar").toggleClass("on-scroll", (fromTop > 20));
   // });
 });

 var prev = 50;
 var $window = $(window);
 var nav = $('#nav');

 $window.on('scroll', function(){
   var scrollTop = $window.scrollTop();
   nav.toggleClass('hidden', scrollTop < prev);
   prev = scrollTop;
 });
