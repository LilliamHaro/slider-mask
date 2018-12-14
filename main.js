$(document).ready(function() {
  function toTop(lastChild,firstChild){
    console.log("top");
    lastChild.removeClass("bg-sz-110");
    lastChild.addClass("to-bottom");
    lastChild.prev().addClass("bg-sz-110");
    setTimeout(function() {
      lastChild.removeClass("to-bottom");
      lastChild.insertBefore(firstChild);
    }, 600);
  }
  function toBottom(lastChild,firstChild){
    // sube el ultimo y se pasa a la primera posicion
    lastChild.removeClass("bg-sz-110");
    lastChild.addClass("to-top");
    lastChild.prev().addClass("bg-sz-110");
    setTimeout(function() {
      lastChild.removeClass("to-top");
      lastChild.insertBefore(firstChild);
    }, 600);
  }


  $('.slider').bind("DOMMouseScroll mousewheel", function(e) {
    var lastChild = $(".slider div").last();
    var firstChild = $(".slider div").first();
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      toTop(lastChild,firstChild)
    } else {
      toBottom(lastChild,firstChild)
    }
  });

  $(window).on('keydown',function(e) {
    var lastChild = $(".slider div").last();
    var firstChild = $(".slider div").first();
    if (e.keyCode == 38) {
      toTop(lastChild,firstChild)
    } else if(e.keyCode == 40) {
      toBottom(lastChild,firstChild)
    }
  });
});
