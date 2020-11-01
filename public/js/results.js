$("#search-button").on("click", function (e) {
  e.preventDefault();
  // make main box go blank with each click
  $("#mainContainer").html("")
  $("#plantImage").html("")
  $("#commonName").html("")
  $("#scientificName").html("")
  $("#familyName").html("")
  $("height").html("")
  $("growthHabit").html("")
  $("edibleParts").html("")
  $("light").html("")
  $("ph").html("")
  $("precipitations").html("")
  $("soilNutriments").html("")
  $("soilSalinity").html("")
  $("soilTexture").html("")


  //set a variable equal to the user's search-value input
  var searchValue = $("#search-value").val();
  console.log(searchValue);
  //take the searchValue variable and pass into to the searchPlants function, which is being called here
  searchPlants(searchValue);

});


//this is a function called searchPlants and we have passed the searchValue variable data into it
function searchPlants(searchValue) {
  console.log(searchValue);

  //we then call the api and pass the searchValue into the url
  $.ajax({

    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search?q=" + searchValue + "&token=ueH6QtDHJicmWkAqaQBbzH12C_hf4rpSxtJXrMOE1n0",

    //then start a function with the response object passed in
  }).then(function (response) {
    console.log(response);
    //create divs with id's to append image tags to
    var plantDiv = $("<div>");



    //give each plantDiv an id
    plantDiv.attr("id", "plantDiv");
    plantDiv.addClass("col");



    //append all plantDivs to mainContainer
    $("#mainContainer").append(plantDiv);





    for (let i = 0; i < 9; i++) {
      var plantImage = $("<img>");
      var commonName = $("<h2>");
      var column = $("<div class='col'>");
      var row = $("<div class='row'>");



      commonName.text(response.data[i].common_name);
      plantImage.attr("src", response.data[i].image_url);
      plantImage.attr("data-slug", response.data[i].slug);
      plantImage.attr("class", "plantImage");


      $("#plantDiv").append(row);
      row.append(column);
      column.append(plantImage, commonName);
    }



    $(".plantImage").click(function () {
      chosenPlant($(this).data("slug"));

    });
  })

};




function chosenPlant(slug) {

  // make main box go blank with each click
  $("#mainContainer").html("")
  $("#plantImage").html("")
  $("#commonName").html("")
  $("#scientificName").html("")
  $("#familyName").html("")
  $("height").html("")
  $("growthHabit").html("")
  $("edibleParts").html("")
  $("light").html("")
  $("ph").html("")
  $("precipitations").html("")
  $("soilNutriments").html("")
  $("soilSalinity").html("")
  $("soilTexture").html("")
  console.log(slug);

  //we then call the api and pass the searchValue into the url
  $.ajax({

    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/" + slug + "?&token=ueH6QtDHJicmWkAqaQBbzH12C_hf4rpSxtJXrMOE1n0",

    //then start a function with the response object passed in
  })
    .then(function (response) {
      console.log(response.data);

      //create divs with id's to append image tags to
      var leftDiv = $("<div>");
      var rightDiv = $("<div>");
      leftDiv.attr("id", "leftDiv");
      leftDiv.addClass("col");
      rightDiv.attr("id", "rightDiv");
      rightDiv.addClass("col");





      //left div elements
      var chosenImage = $("<img>");
      var commonName = $("<h1>");
      var scientificName = $("<h4>");
      var familyName = $("<h4>");
      var observations = $("<h4>");
      var bloomMonths = $("<h4>");
      var phRange = $("<h4>");
      var duration = $("<h4>")
      var USDA = $("<a>")

      for (let i = 0; i < response.data.sources.length; i++) {
        if (response.data.sources.name === "USDA") {
          var usdaUrl = this.url[0]
        }
        console.log(usdaUrl);


        // var column = $("<div class='col'>");
        // var row = $("<div class='row'>");


        //set each varibale elemeents value and attribute to the corresponding data element

        commonName.text(response.data.common_name);
        scientificName.text(response.data.scientific_name);
        familyName.text(response.data.family.name);
        chosenImage.attr("src", response.data.image_url);
        chosenImage.attr("data-slug", response.data.slug);
        chosenImage.attr("class", "chosenImage");
        observations.text("Native to: " + response.data.observations);
        bloomMonths.text("Blooms best: " + response.data.main_species.growth.bloom_months);
        phRange.text("Ph Range: " + response.data.main_species.growth.ph_minimum + " - " + response.data.main_species.growth.ph_maximum);
        duration.text("duration: " + response.data.main_species.duration);
        // USDA.text("See the USDA profile for this plant");
        // USDA.attr("href", usdaUrl);






        //append all dynamically created elements to the mainContainer div.
        // $("#chosenDiv").append(row);
        // row.append(column);
        // column.append(plantImage, commonName);

        leftDiv.append(commonName);
        leftDiv.append(scientificName, familyName);
        leftDiv.append(chosenImage);
        rightDiv.append(observations);
        rightDiv.append(bloomMonths);
        rightDiv.append(phRange);
        rightDiv.append(duration);
        // rightDiv.append(USDA);

        //    //append all plantDivs to mainContainer
        $("#mainContainer").append(leftDiv);
        $("#mainContainer").append(rightDiv);



      }

    })
}















