/*!
 * Custom Code file for kraftychocolates
 */

function show_callus_modal() {
  console.log("Callus modal shown");
  return false;
}

var callus_switcher = function() {
  if($(window).width() >=768) { 
    $('.callus').addClass("callus-popup");
    $(".callus-popup").on("click",show_callus_modal);
  } 
  else {
    if($(".callus-popup").length){
      $(".callus-popup").off("click");
      $('.callus').removeClass("callus-popup");
    }
  }
};

$(document).ready(callus_switcher);
$( window ).resize(callus_switcher);


