const RECIPE_URL =
  "https://api.edamam.com/search?q=chicken&app_id=38ba247d&app_key=21b567898d4c629acb5a6436b7b5abc2&from=0&to=3&calories=591-722&health=alcohol-free";
const searchDesktop = document.getElementById('searchDesktop')
const searchMobile = document.getElementById('searchMobile')
const submitButtonMobile = document.getElementById('submit-button-mobile')
const submitButtonDesktop = document.getElementById('submit-button-desktop')

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
    const recipes = document.getElementById("recipes");
    //   const hits = data.hits;
    recipes.innerHTML += `
      <div>
      <h2>${data.hits[0].recipe.label}</h2>
      <img src=${data.hits[0].recipe.image} alt=${data.hits[0].recipe.label}/>
      <p>${data.hits[0].recipe.ingredientLines[0]}</p>
      </div>
      `;
  })
  .catch((error) => {
    recipes.innerHTML = `${error}`;
  });
}

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
