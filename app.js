$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
        $(".navbar").removeClass("sticky");
    }
  });
//   toggle menu/nav script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
})
});

// clicable text
$(".card").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
