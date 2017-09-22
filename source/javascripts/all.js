// Booking Widget Functionality
$(document).ready(
  function(){
  // Trigger the booking widget to appear on Book Now click
  $("#trigger-cta").click(function () {
    // Toggle on booking widget
    // Toggle on triangle
    // Toggle on X icon, toggle off Book Now text
    $("#toggle-widget").toggle();
    $(".toggle-widget-triangle").toggle();
    $("#trigger-cta span").toggle();
    $("#trigger-cta i").toggleClass("fa fa-times fa-2");

    // While booking widget is open
    // If the user was still on button and their mouse leaves via somewhere NOT the widget
    // Make sure to close widget so they don't have to click it close themselves
    $("#trigger-cta").mouseleave(function(){
      if ($('#toggle-widget').css('display') == 'block') {
        // Toggle off booking widget
        // Toggle off triangle
        // Toggle off X icon, toggle on Book Now text
        $("#toggle-widget").toggle();
        $(".toggle-widget-triangle").toggle();
        $("#trigger-cta span").toggle();
        $("#trigger-cta i").toggleClass("fa fa-times fa-2");
      }
    });
  });

  // Keep booking widget up while mouse is hovered over it
  // Hide booking widget when mouse stops hovering
  $("#toggle-widget").hover(function(){
    // Toggle on booking widget
    // Toggle on triangle
    // Toggle on X icon, toggle off Book Now text
    $(this).toggle();
    $(".toggle-widget-triangle").toggle();
    $("#trigger-cta span").toggle();
    $("#trigger-cta i").toggleClass("fa fa-times fa-2");
  },function(){
    // Toggle off booking widget
    // Toggle off triangle
    // Toggle off X icon, toggle on Book Now text
    $(this).toggle();
    $(".toggle-widget-triangle").toggle();
    $("#trigger-cta span").toggle();
    $("#trigger-cta i").toggleClass("fa fa-times fa-2");
  });

  // Also keep showing booking widget while mouse is hovered over triangle decoration
  $(".toggle-widget-triangle").hover(function(){
    // Toggle on booking widget
    // Toggle on triangle
    // Toggle on X icon, toggle off Book Now text
    $("#toggle-widget").toggle();
    $(".toggle-widget-triangle").toggle();
    $("#trigger-cta span").toggle();
    $("#trigger-cta i").toggleClass("fa fa-times fa-2");
  });
});
