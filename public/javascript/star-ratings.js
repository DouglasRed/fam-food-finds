const starWrapper = document.querySelector("#stars");
const stars = document.querySelectorAll("#stars a");
const overallRating = document.getElementById("overall-rating");

//leaving a review

stars.forEach((star, clickedIndex) => {
  star.addEventListener("click", () => {
    starWrapper.classList.add("disabled");
    stars.forEach((otherStar, otherIndex) => {
      if (otherIndex <= clickedIndex) {
        otherStar.classList.add("active");
        ratingReview = clickedIndex + 1;
      }
    });
    console.log(`star of index ${clickedIndex + 1} was clicked`);
    console.log(`star of index ${ratingReview} was clicked`);
  });
  // POST to backend your star
});

//dynamically pull in average of raatings

const starRating = function () {
  const overallRating = document.querySelector("#overall-rating");
  const avgRating = document.querySelector(".avg-rating");
  console.log(avgRating);
  console.log(overallRating);
  if (avgRating.innerHTML === "1") {
    overallRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating.innerHTML === "2") {
    overallRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating.innerHTML === "3") {
    overallRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating.innerHTML === "4") {
    overallRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (avgRating.innerHTML === "5") {
    overallRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li></ul>`;
  } else {
    avgRating.innerHTML = `No reviews collected yet`;
  }
  avgRating.classList.add("hide");
};

window.addEventListener("load", function () {
  let starRating = document.querySelector(".user-rating");
  let testVariable = starRating.innerHTML;
  if (testVariable === "1") {
    starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (testVariable === "2") {
    starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (testVariable === "3") {
    starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (testVariable === "4") {
    starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
  } else if (testVariable === "5") {
    starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li></ul>`;
  } else {
    starRating.innerHTML = `N/A`;
  }
});

// window.addEventListener("load", function () {
//   let starRating = document.querySelector(".average-rating");
//   let testVariable = starRating.innerHTML;
//   if (testVariable === "1") {
//     starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
//   } else if (testVariable === "2") {
//     starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
//   } else if (testVariable === "3") {
//     starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
//   } else if (testVariable === "4") {
//     starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star-no-fill.svg" class="w-10 h-10"></li></ul>`;
//   } else if (testVariable === "5") {
//     starRating.innerHTML = `<ul class="flex items-center"><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li><li><img src="/images/star.svg" class="w-10 h-10"></li></ul>`;
//   } else {
//     starRating.innerHTML = `N/A`;
//   }
// });

starRating();
