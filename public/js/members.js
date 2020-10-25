$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

$("#search-button").on("click", function (e) {
  e.preventDefault();
  //set a variable equal to the user's search-value input
  var searchValue = $("#search-value").val();
  console.log(searchValue);
  //take the searchValue variable and pass into to the searchPlants function, which is being called here
  searchPlants(searchValue);
  // clear input box
  // $("#search-value").val("");
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