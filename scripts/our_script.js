$( document ).ready(function(){
    hideElements();
});

function drawHeaderLine(){
  var theLine = $("#mainHeader");
  addLine(theLine, 'headerLine');
}

function hideElements(){
  $("#mainHeader h1").hide();
}


function addLine(theElement, id){
  var line = "<div id='" + id + "' class='basic-line hidden-line'></div>";
  theElement.append($( line ));
  alert('hello world');
}
