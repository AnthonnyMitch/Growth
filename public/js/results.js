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
      var USDAlink = $("<a>")
      var USDAurls = [];
      var barkImage = $("<img>");
      var flowerImage = $("<img>");
      var fruitImage = $("<img>");
      var barkImage2 = $("<img>");
      var flowerImage2 = $("<img>");
      var fruitImage2 = $("<img>");
      var imageDiv = $("<div>")
      var imageDiv2 = $("<div>")

      // loop over all data.sources
      for (let i = 0; i < response.data.sources.length; i++) {

        var currSource = response.data.sources[i];

        // if this name of the data.source is USDA
        if (currSource.name == "USDA") {
          USDAurls.push(currSource.url)
        }





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
        USDAlink.text("See the USDA profile for this plant");
        USDAlink.attr("href", USDAurls);
        imageDiv.attr("class", "imgDiv row")
        barkImage.attr("src", response.data.main_species.images.bark[0].image_url);
        barkImage.attr("data-slug", response.data.slug);
        barkImage.attr("class", "col-sm-3 barkImage");
        flowerImage.attr("src", response.data.main_species.images.flower[0].image_url);
        flowerImage.attr("data-slug", response.data.slug);
        flowerImage.attr("class", "col-m-3 flowerImage");
        fruitImage.attr("src", response.data.main_species.images.fruit[0].image_url);
        fruitImage.attr("data-slug", response.data.slug);
        fruitImage.attr("class", "col-m-3 fruitImage");
        imageDiv2.attr("class", "row")
        barkImage2.attr("src", response.data.main_species.images.bark[1].image_url);
        barkImage2.attr("data-slug", response.data.slug);
        barkImage2.attr("class", "col barkImage");
        flowerImage2.attr("src", response.data.main_species.images.flower[1].image_url);
        flowerImage2.attr("data-slug", response.data.slug);
        flowerImage2.attr("class", "col flowerImage");
        fruitImage2.attr("src", response.data.main_species.images.fruit[1].image_url);
        fruitImage2.attr("data-slug", response.data.slug);
        fruitImage2.attr("class", "col fruitImage");




        //append all dynamically created elements to the mainContainer div.
        // $("#chosenDiv").append(row);
        // row.append(column);
        // column.append(plantImage, commonName);
        imageDiv.append(barkImage, flowerImage, fruitImage);
        rightDiv.append(imageDiv)
        leftDiv.append(commonName);
        leftDiv.append(scientificName, familyName);
        leftDiv.append(chosenImage);
        rightDiv.append(observations);
        rightDiv.append(bloomMonths);
        rightDiv.append(phRange);
        rightDiv.append(duration);
        rightDiv.append(USDAlink);
        imageDiv2.append(barkImage2, flowerImage2, fruitImage2);
        rightDiv.append(imageDiv2)


        //    //append all plantDivs to mainContainer
        $("#mainContainer").append(leftDiv);
        $("#mainContainer").append(rightDiv);



      }
      

    })
}















