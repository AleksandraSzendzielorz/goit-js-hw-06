document.addEventListener("DOMContentLoaded", function () {
  const categoriesList = document.querySelectorAll("#categories .item");
  const numberOfCategories = categoriesList.length;
  console.log("Number of categories:", numberOfCategories);

  categoriesList.forEach(function (category) {
    const categoryName = category.querySelector("h2").textContent.trim();

    const categoryElements = category.querySelectorAll("ul > li");
    const numberOfElements = categoryElements.length;

    console.log("\nCategory:", categoryName);
    console.log("Elements:", numberOfElements);
  });
});
