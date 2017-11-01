/*!
 * Custom Code file for kraftychocolates
 */

function show_callus_modal() {
  console.log("Callus modal shown");
  return false;
}

 $( window ).resize(function() {
  if($(window).width() <=768) { 
    $('.callus').addClass("callus-popup");
  } 
  else {
    $('.callus').removeClass("callus-popup");
  }
});


$(".callus-popup").click(show_callus_modal);
