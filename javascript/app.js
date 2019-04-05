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
      button.attr("data-name", topicsArray[i]);
      button.text(topicsArray[i]);
      $("#buttons-div").append(button);
    }
  }
  function displayGifs() {
    console.log(this);
    var topic = $(this).attr("data-name");
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
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.fixed_height_still.url);
        topicImage.attr("data-state", "still");
        topicImage.addClass("gif");
        topicImage.attr("data-animate", results[i].images.fixed_height.url);
        var rating = results[i].rating;
        var p = $("<p>").text("Rating" + rating);
        gifDiv.prepend(p);
        gifDiv.prepend(topicImage);
        $("gifs-show-here").prepend(gifDiv);
      }
    });
  }

  $("#select-input").on("click", function() {
    var topic = $("#topic-input")
      .val()
      .trim();
    topicsArray.push(topic);
    makeButtons();
  });

  $(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state == "still") {
      $(this).attr("src", $(this).data("animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).data("still"));
      $(this).attr("data-state", "still");
    }
  });

  $(document).on("click", function() {
    displayGifs();
  });
  makeButtons();
});
