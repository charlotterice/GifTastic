var topicsArray = [
  "cats",
  "icecream",
  "ariana grande",
  "kim kardashian",
  "jennifer lawrence"
];

$(document).ready(function() {
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
    var topic;
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      topic +
      "&api_key=kK9L20nLWIersNTnyEhUOMzC7tO9R31C&limit=10";
    var topic = $(this).attr("data-name");
    console.log(this);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating" + rating);
        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.prepend(p);
        gifDiv.prepend(topicImage);
        $("gifs-show-here").prepend(gifDiv);
      }
    });
  }
  $("button").on("click", function(){
      displayGifs();
  })

  $("#select-input").on("click", function() {
    var topic = $("#topic-input")
      .val()
      .trim();
    topicsArray.push(topic);
    makeButtons();
  });
});
