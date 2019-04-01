$(document).ready(function () {

var topicsArray = ["cats","icecream","ariana grande","kim kardashian", "jennifer lawrence"];
    $("button").on("click", function () {
        console.log(this);
        var topic = $(this).attr("data-topic");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            topic + "&api_key=kK9L20nLWIersNTnyEhUOMzC7tO9R31C&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
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
                }
            });
    });
});
