$(document).ready(function() {
  var topicsArray = [
    "cats",
    "icecream",
    "ariana grande",
    "kim kardashian",
    "jennifer lawrence"
  ];
  function makeButtons() {
    $("#buttons-div").empty();
    for (var i = 0; i < topicsArray.length; i++) {
      //creates variable in place of the button
      var button = $("<button>");
      button.addClass("topic-class");
      button.attr("data-topic", topicsArray[i]);
      button.text(topicsArray[i]);
      $("#buttons-div").append(button);
    }
  }
  makeButtons();

  $("#select-input").on("click", function() {
    event.preventDefault();
    var topic = $("#topic-input")
      .val()
      .trim();
    topicsArray.push(topic);
    makeButtons();
    $("#topic-input").val("");
  });

  $(document).on("click", "button", function() {
    //this should be the clicked button
    console.log(this);
    var topic = $(this).attr("data-topic");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      topic +
      "&api_key=kK9L20nLWIersNTnyEhUOMzC7tO9R31C&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response.data);
      var results = response.data;
      //check this is same as line 44
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").html("Rating: " + rating);
        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.original_still.url);
        topicImage.attr("data-still", results[i].images.original_still.url);
        topicImage.attr("data-animate", results[i].images.original.url);
        topicImage.attr("data-state", "still");
        topicImage.addClass("gif");
        gifDiv.prepend(p);
        gifDiv.prepend(topicImage);
        $("#gifs-show-here").prepend(gifDiv);
      }
    });
  });

  function toggle() {
    var state = $(this).attr("data-state");
    var animateGif = $(this).attr("data-animate");
    var stillGif = $(this).attr("data-still");
    if (state == "still") {
      $(this).attr("src", animateGif);
      $(this).attr("data-state", "animate");
    } else if (state == "animate") {
      $(this).attr("src", stillGif);
      $(this).attr("data-state", "still");
    }
  }
  $(document).on("click", ".gif", toggle);
});
