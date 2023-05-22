var already_clicked = false;

$( document ).ready(function() {
  console.log("JQuery is loaded and the document is ready");

  $( document ).click(function() {
    if (!already_clicked) {
     $("#events").append("<li>You clicked somewhere!</li>");
    }
    else {
      already_clicked = false;
    }
  });

  $(".foo").click(function() {
    $("#events").append("<li>You clicked the foo div!</li>");
    already_clicked = true;
  });

  $(".bar").click(function() {
    $("#events").append("<li>You clicked the bar div!</li>");
    already_clicked = true;
  });

  $(".reddio").click(function(e) {
    console.log(e.button);
    if (e.button === 0) {
      $(".doohickey").text("You left clicked the pink part")
    }

    $('<p/>', {
      text: 'You have probably not clicked ' + Math.floor(Math.random() * 100) + ' times!'
    }).appendTo(this);
  });
});