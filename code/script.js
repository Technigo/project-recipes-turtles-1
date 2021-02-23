//MG ---> ID: 3f844e4e KEY:ff84a5421dbd03532d7e5960b2603700
//CB ---> ID: 38ba247d KEY: 21b567898d4c629acb5a6436b7b5abc2
//EB ---> ID: 862cfc80 KEY: 8cf170ea0a78c419b8138ce6586f7ea1	
//LS ---> ID: 49c13027 KEY: 287070e6f49848d6d763d073bd805118

//USE THIS ONE prepared:
//https://api.edamam.com/search?q=chicken&app_id=862cfc80&app_key=8cf170ea0a78c419b8138ce6586f7ea1&from=0&to=3&calories=591-722&health=alcohol-free
const RECIPE_URL =
  "https://api.edamam.com/search?q=chicken&app_id=862cfc80&app_key=8cf170ea0a78c419b8138ce6586f7ea1&from=0&to=3&calories=591-722&health=alcohol-free";
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
          <div class="recipe-card-image">
            <img src=${element.recipe.image} alt=${element.recipe.label}/>
              <div class="recipe-card-time-parent">
                <p class="recipe-card-total-time">${element.recipe.totalTime} min</p>
              </div>
          </div>
          <h2 class="recipe-card-title">${element.recipe.label}</h2>
          <p class="recipe-card-ingredients">${element.recipe.ingredientLines}</p>
          <p class="recipe-card-link"><a href="${element.recipe.url}">Link to recipe</a></p>
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
