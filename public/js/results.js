$("#search-button").on("click", function (e) {
    e.preventDefault();
    // make main box go blank with each click
    $("#plantImage").html("")
    $("#commonName").html("")
    $("#scientificName").html("")
    $("#familyName").html("")
    

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
      console.log(searchValue);
  
    //we then call the api and pass the searchValue into the url
    $.ajax({
  
      method: "GET",
      url:  "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?q=" + searchValue + "&token=ueH6QtDHJicmWkAqaQBbzH12C_hf4rpSxtJXrMOE1n0",
  
      //then start a function with the response object passed in
    }).then(function (response) {
      console.log(response);
       //variables equal to newly created tags
    var plantThumb = $("<img>");
    var commonName = $("<h1>");
    var scientificName = $("<h2>");
    var family = $("<h3>");
    var synonyms = $("<p>");
    
    // var plantLink = $("<a>")
    
// pulling to create text
  commonName.text("Common Name: " + response.data[1].common_name)
  scientificName.text("Scientific Name: " + response.data[1].scientific_name)
  family.text("Family: " + response.data[1].family_common_name);
  synonyms.text("Synonyms: " + response.data[1].synonyms);
  plantThumb.attr("src", response.data[1].image_url);
  // plantLink.attr(response.data[1].sources.url);
  plantThumb.attr("width", "400px");
  plantThumb.attr("height", "400px");
  // putting content on page
  $("#plantImage").append(plantThumb);
  $("#commonName").append(commonName);
  $("#scientificName").append(scientificName);
  $("#familyName").append(family);
  $("#plantLink").append(synonyms);
  // $("#plantLink").append(plantLink);



  
      //select the object with an index of 0 and return it's entire object (data: 0)
  
      //pull data from that object
    })
  }