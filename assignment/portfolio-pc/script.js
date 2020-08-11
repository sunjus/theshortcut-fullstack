document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

$(document).ready(function () {
  let bottom = $("header").outerHeight();
  let header = $("header").offset().top + bottom;

  $(window).scroll(function () {
    if ($(window).width() > 991) {
      if ($(window).scrollTop() >= header) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    }
  });

  $(".navbar ul li a").click(function () {
    $(".navbar ul li a").removeClass("active");
    $(this).addClass("active");
  });

  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".navbar").toggleClass("open");
  });
});

AOS.init({
  duration: 1200,
});
