$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active");
    $("nav").toggleClass("active");
  });
});

$(function () {
  // contact form animations
  $("#contact").click(function () {
    $("#contactForm").fadeToggle();
  });
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (
      !container.is(e.target) && // if the target of the click isn't the container...
      container.has(e.target).length === 0
    ) {
      // ... nor a descendant of the container
      container.fadeOut();
    }
  });
});
