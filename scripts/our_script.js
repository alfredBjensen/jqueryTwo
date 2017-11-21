$( document ).ready(function(){
    hideElements();
    showHeader();
    changeMain();
});


function changeMain(){
  $("main").show("drop", {direction: "right"}, 2000);
}

function drawHeaderLine(){
  var theLine = $("#mainHeader");
  addLine(theLine, 'headerLine');
  $("#headerLine").animate({width:"90%"}, 1500);
}

function hideElements(){
  $("#mainHeader h1").hide();
  $("main").hide();
}

function showHeader(){
  $("#mainHeader h1").fadeIn(1500);

  //setTimeout will pause
  setTimeout(function(){
    drawHeaderLine();
  }, 1000);

}


function addLine(theElement, id){
  var line = "<div id='" + id + "' class='basic-line hidden-line'></div>";
  theElement.append($( line ));
}
