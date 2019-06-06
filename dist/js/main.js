var s = false;
$(".menu-btn").click(function() {
  if (!s) {
    $(".menu-btn").addClass("close");
    $(".menu").addClass("show");
    $(".menu-branding").addClass("show");
    $(".menu-nav").addClass("show");
    $(".nav-item").addClass("show");
    s = true;
  } else {
    $(".menu-btn").removeClass("close");
    $(".menu").removeClass("show");
    $(".menu-branding").removeClass("show");
    $(".menu-nav").removeClass("show");
    $(".nav-item").removeClass("show");
    s = false;
  }
});
