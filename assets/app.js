function startSearch () {

var apiKey = "cf39c6a130964054954684fac7e98dc1"
var search = $('#search').val();
var beginDate = $("#startYear").val();
var endDate = $("#endYear").val();


var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
  'api-key': apiKey,
  'q': search,
  'begin_date': beginDate,
  'end_date': endDate,
});
$.ajax({
  url: queryURL,
  method: 'GET',
}).then(function(response) {
console.log(response);

var results = response.response.docs;

// var numberOfArticles = $(".class").attr("value")

for (var i = 0; i < 5; i++) {
    var totalArticle = $("<div>")

    var articles = $("<div>");

    var title = $("<h3>").text(results[i].headline.main)

    articles.append(results[i].web_url);

    totalArticle.append(title)
    totalArticle.append(articles)

    $("#articles").append(totalArticle);
} 
});

};



$(document).on('click', '#searchButton', startSearch);