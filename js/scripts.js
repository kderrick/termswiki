$(document).ready(function() {
var terms = ["Markdown", "Block Elements", "Inline Elements", "CSS", "Bootstrap", "Divs and Spans", "Floats", "Box Model", "Responsive Design", "Javascript", "Forms", "Branching", "Looping", "Arrays", "jQuery"];

var pages = ["markdown", "block-elements", "inline-elements", "css", "bootstrap", "divs-spans", "floats", "boxmodel", "responsive-design", "javascript", "forms", "branching", "looping", "arrays", "jquery"];


for(i = 0; i < terms.length; i += 1) {
  if(window.location.href.indexOf(pages[i]) > -1) {
    $("h1#term").append(terms[i]);
  }

  };

  $(".definition").prepend("<h3>Definition</h3>");

  $(".code").text($(".code").html());


});
