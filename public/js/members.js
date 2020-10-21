$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});

$(document).ready(() => {
  // Getting references to our form and input
  const searchForm = $("form.search");
  const searchInput = $("input#search-input");

  // When the signup button is clicked, we validate the email and password are not blank
  searchForm.on("submit", event => {
      event.preventDefault();
      const searchData = {
          search: searchInput.val().trim(),
      };
      console.log(searchData);

      //send searchData value and call a function that searches through database and returns matching values
  })

});
