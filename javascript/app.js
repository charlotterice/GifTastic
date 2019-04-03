var topic = $(this).attr("data-topic");
// var queryURL =
//   "https://api.giphy.com/v1/gifs/search?q=" +
//   topic +
//   "&api_key=kK9L20nLWIersNTnyEhUOMzC7tO9R31C&limit=10";




// $(document).ready(function() {
  // var topicsArray = [
  //   "cats",
  //   "icecream",
  //   "ariana grande",
  //   "kim kardashian",
  //   "jennifer lawrence"
  // ];

  // $(document).on("click","button",function() {

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var topicImage = $("<img>");
        topicImage.attr("src", results[i].images.fixed_height.url);

        gifDiv.prepend(p);
        gifDiv.prepend(topicImage);

        $("#gifs-show-here").prepend(gifDiv);
      // }
    });


  });

  function makeButtons() {
    for (var i = 0; i < topicsArray.length; i++) {
        var button = $("<button>");
        console.log(topicsArray[i]);
       
    }
  }

  function searchUserGiphy(userInput){
    console.log(userInput);

  }
  $("#select-artist").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#topic-input").val().trim();






  makeButtons();
  searchUserGiphy(userInput);
});
});
