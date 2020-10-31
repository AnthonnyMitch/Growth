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
  console.log(slug);

  //we then call the api and pass the searchValue into the url
  $.ajax({

    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/" + slug + "?&token=ueH6QtDHJicmWkAqaQBbzH12C_hf4rpSxtJXrMOE1n0",

    //then start a function with the response object passed in
  })
    .then(function (response) {
      console.log(response);

      //create divs with id's to append image tags to
      var chosenDiv = $("<div>");



      //give each plantDiv an id
      chosenDiv.attr("id", "chosenDiv");
      chosenDiv.addClass("col");



      //append all plantDivs to mainContainer
      $("#mainContainer").append(chosenDiv);



        //create variable for desired elements to be created dynamically 

      for (let i = 0; i < response.data.length; i++) {
        var plantImage = $("<img>");
        var commonName = $("<h2>");
        var column = $("<div class='col'>");
        var row = $("<div class='row'>");


        //set each varibale elemeents value and attribute to the corresponding data element 

        // commonName.text(response.data[i].common_name);
        // plantImage.attr("src", response.data[i].image_url);
        // plantImage.attr("data-slug", response.data[i].slug);
        // plantImage.attr("class", "plantImage");


        //append all dynamically created elements to the mainContainer div. 
        // $("#chosenDiv").append(row);
        // row.append(column);
        // column.append(plantImage, commonName);
      }




    })
}













     //ignore code below, will be used for later functionality 


       //create new variables equal to button tags,
      // var plantTitle0 = $("<button>");
      // var plantTitle1 = $("<button>");
      // var plantTitle2 = $("<button>");
      // var plantTitle3 = $("<button>");
      // var plantTitle4 = $("<button>");
      // var plantTitle5 = $("<button>");
      // var plantTitle6 = $("<button>");
      // var plantTitle7 = $("<button>");
      // var plantTitle8 = $("<button>");

      // // make each button's text the response.data[index].common_name





      // plantTitle0.text(response.data[0].common_name);
      // plantTitle0.attr("id", "plantTitle");
      // plantTitle1.text(response.data[1].common_name);
      // plantTitle1.attr("id", "plantTitle");
      // plantTitle2.text(response.data[2].common_name);
      // plantTitle2.attr("id", "plantTitle");
      // plantTitle3.text(response.data[3].common_name);
      // plantTitle3.attr("id", "plantTitle");
      // plantTitle4.text(response.data[4].common_name);
      // plantTitle4.attr("id", "plantTitle");
      // plantTitle5.text(response.data[5].common_name);
      // plantTitle5.attr("id", "plantTitle");
      // plantTitle6.text(response.data[6].common_name);
      // plantTitle6.attr("id", "plantTitle");
      // plantTitle7.text(response.data[7].common_name);
      // plantTitle7.attr("id", "plantTitle");
      // plantTitle8.text(response.data[8].common_name);
      // plantTitle8.attr("id", "plantTitle");

      // // //append each button to desired plantImage[index] by id 

      // $("#plantDiv0").append(plantTitle0);
      // $("#plantDiv1").append(plantTitle1);
      // $("#plantDiv2").append(plantTitle2);
      // $("#plantDiv3").append(plantTitle3);
      // $("#plantDiv4").append(plantTitle4);
      // $("#plantDiv5").append(plantTitle5);
      // $("#plantDiv6").append(plantTitle6);
      // $("#plantDiv7").append(plantTitle7);
      // $("#plantDiv8").append(plantTitle8);

      //create an onclick event for each appended button that takes the slug within
      // the "alt" attribute of the plantImage and adds it to a new api call (see ajax
      //in notes) and return FULL object
      //link data to  existing variables and render to page


  //   })
  // }


      // //variables equal to newly created tags
      // var plantThumb = $("<img>");
      // var commonName = $("<h1>");
      // var scientificName = $("<h2>");
      // var family = $("<h3>");
      // var height = $("<p>");
      // var growthHabit = $("<p>");
      // var edibleParts = $("<p>");
      // var light = $("<p>");
      // var ph = $("<p>");
      // var precipitations = $("<p>");
      // var soilNutriments = $("<p>");
      // var soilSalinity = $("<p>");
      // var soilTexture = $("<p>");
      // // var plantLink = $("<a>")

      // // pulling to create text
      // commonName.text("Common Name: " + response.data[1].common_name)
      // scientificName.text("Scientific Name: " + response.data[1].scientific_name)
      // family.text("Family: " + response.data[1].family_common_name);
      // plantThumb.attr("src", response.data[1].image_url);
      // // plantLink.attr(response.data[1].sources.url);
      // plantThumb.attr("width", "400px");
      // plantThumb.attr("height", "400px");
      // height.text()
      // growthHabit.text()
      // edibleParts.text()
      // light.text()
      // ph.text()
      // precipitations.text()
      // soilNutriments.text()
      // soilSalinity.text()
      // soilTexture.text(

      // )
      // // putting content on page
      // $("#plantImage").append(plantThumb);
      // $("#commonName").append(commonName);
      // $("#scientificName").append(scientificName);
      // $("#familyName").append(family);

      // // $("#plantLink").append(plantLink);




