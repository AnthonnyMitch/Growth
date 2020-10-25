$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the plant they typed into the plant-search input
  var plantSearched = $("#plant-search").val().trim();

  // Make an AJAX get request to our api, including the user's plant in the url
  $.get("/api/" + plantSearched, function(data) {

    console.log(data);
    // Call our renderPlants function to add our plants to the page
    renderPlants(data);

  });

});


//this is a function called searchPlants and we have passed the searchValue variable data into it
function searchPlants(searchValue) {

  //we then call the api and pass the searchValue into the url
  $.ajax({

    method: "GET",
    url:  "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/search?q=" + searchValue + "&token=ueH6QtDHJicmWkAqaQBbzH12C_hf4rpSxtJXrMOE1n0",

    //then start a function with the response object passed in
  }).then(function (response) {
    console.log(response);

    //select the object with an index of 0 and return it's entire object (data: 0)

    //pull data from that object
  })
}