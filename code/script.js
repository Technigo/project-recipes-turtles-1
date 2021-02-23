//MG ---> ID: 3f844e4e KEY:ff84a5421dbd03532d7e5960b2603700
//CB ---> ID: 38ba247d KEY: 21b567898d4c629acb5a6436b7b5abc2
//EB ---> ID: 862cfc80 KEY: 8cf170ea0a78c419b8138ce6586f7ea1	
const RECIPE_URL =
  "https://api.edamam.com/search?q=chicken&app_id=38ba247d&app_key=21b567898d4c629acb5a6436b7b5abc2&from=0&to=3&calories=591-722&health=alcohol-free";
const searchDesktop = document.getElementById('searchDesktop')
const searchMobile = document.getElementById('searchMobile')
const submitButtonMobile = document.getElementById('submit-button-mobile')
const submitButtonDesktop = document.getElementById('submit-button-desktop')
const recipeCardContainer = document.getElementById('recipeCardContainer')

console.log('hello!')

const fetchRealData = () => {
  fetch(RECIPE_URL)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
  } throw "Ups, something went wrong";
  })

  .then((data) => {
    console.log(data.hits[2].recipe.label);
    console.log(data.hits[0].recipe.ingredientLines[0]);
    console.log(data.hits[0].recipe.image);
    const hits = data.hits;
      hits.forEach((element) => {
        recipeCardContainer.innerHTML += `
        <div class="recipe-card">
          <div class="recipe-card-title"><h2>${element.recipe.label}</h2></div>
          <div class="recipe-card-image"><img src=${element.recipe.image} alt=${element.recipe.label}/></div>
          <div class="recipe-card-ingredients"><p>${element.recipe.ingredientLines}</p></div>
          <div class="recipe-card-url"><a href="${element.recipe.url}">Link to recipe</a></div>
          <div class="recipe-card-total-time"><p>Total cooking time: ${element.recipe.totalTime}</p></div
        </div>
        `
      })
  })
  .catch((error) => {
    recipeCardContainer.innerHTML = `${error}`;
  });
}

//fetchRealData()

const fetchData = (data) => {
  console.log(data)
}

submitButtonMobile.addEventListener('click', event => {
  event.preventDefault();
  fetchData (searchMobile.value)
})

submitButtonDesktop.addEventListener('click', event => {
  event.preventDefault();
  fetchData (searchDesktop.value)
})

console.log(dummyResponse.hits[0].recipe.label);
