function openNavbar() {
  $(".nav-bar").animate({ left: 0 }, 500);

  $(".close-icon").removeClass("fa-solid");
  $(".close-icon").addClass("fa-x");

  $(".nav-links li").animate({ top: 0 }, 200);
}

function closeNavbar() {
  let width = $(".nav-bar .nav-top").outerWidth();
  $(".nav-bar").animate({ left: -width }, 500);

  $(".close-icon").addClass("fa-solid");
  $(".close-icon").removeClass("fa-x");

  $(".nav-links li").animate({ top: 300 }, 2000);
}

closeNavbar();

$(".nav-bar i.close-icon").click(() => {
  if ($(".nav-bar").css("left") == "0px") {
    closeNavbar();
  } else {
    openNavbar();
  }
});
///////////////////////////////////////////////////////////////////////////////////////////
async function getMeal(term) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
  response = await response.json();

  console.log(response.meals);
  showMeals(response.meals);
}

function showMeals(arr) {
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `
    <div onclick="getMealRecipe('${arr[i].idMeal}')"  class="col-md-3">
    <div class="meal position-relative overflow-hidden rounded-2 cursor">
        <img class="w-100" src="${arr[i].strMealThumb}" alt="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black">
            <h3>${arr[i].strMeal}</h3>
        </div>
    </div>
</div> 
    `;
  }

  rowBox.innerHTML = box;
}
//////////////////////////////////////////////////////////////////////////////////////////////
let rowBox = document.getElementById("rowBox");
getMeal("");
///////////////////////////////////////////////////////////////////////////////////

async function getCategories() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();
  console.log(response.categories);
  showCategories(response.categories);
}

function showCategories(arr) {
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `
      <div class="col-md-3">
      <div  onclick="getCategoryMeals('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor">
          <img class="w-100" src="${arr[i].strCategoryThumb}" alt="">
          <div class="meal-layer position-absolute text-center text-black">
              <h3>${arr[i].strCategory}</h3>
              <p>${arr[i].strCategoryDescription}</p>

          </div>
      </div>
  </div> 
      `;
  }

  rowBox.innerHTML = box;
}
///////////////////////////////////////////////////////////////////

async function getArea() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  response = await response.json();
  console.log(response.meals);

  showArea(response.meals);
}

function showArea(arr) {
  let box = "";

  for (let i = 0; i < arr.length; i++) {
    box += `
    <div  onclick="getAreaMeals('${arr[i].strArea}')" class="col-md-3 m-auto cursor">
        <div >
            <i class="fa-solid fa-house-laptop"></i>
            <h3>${arr[i].strArea}</h3>
        </div>
    </div> 

    `;
  }
  rowBox.innerHTML = box;
}
//////////////////////////////////////////////////////////////////////////////////////

async function getIngredients() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  response = await response.json();
  console.log(response.meals);

  showIngredients(response.meals.slice(0, 20));
}

function showIngredients(arr) {
  let box = "";

  for (let i = 0; i < arr.length; i++) {
    box += `
    <div  onclick="getAreaMeals('${arr[i].strIngredient}')" class="col-md-3 text-center cursor">
        <div >
        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
            <h3>${arr[i].strIngredient}</h3>
            <p>${arr[i].strDescription}.split(" ").slice(0,20).join(" ")}</p>

        </div>
    </div> 

    `;
  }
  rowBox.innerHTML = box;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

async function getCategoryMeals(category) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  response = await response.json();

  console.log(response);
  showCategoryMeals(response.meals);
}
function showCategoryMeals(arr) {
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `

    <div class="col-md-3">
    <div class="meal position-relative overflow-hidden rounded-2 cursor">
        <img class="w-100" src="${arr[i].strMealThumb}" alt="">
        <div class="meal-layer position-absolute d-flex align-items-center text-black">
            <h3>${arr[i].strMeal}</h3>
        </div>
    </div>
</div> 
    `;
  }
  rowBox.innerHTML = box;
}

////////////////////////////////////////////////////////////////////////////////////////////////////

async function getAreaMeals(area) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  response = await response.json();

  console.log(response.meals);
  showAreaMeals(response.meals);
}
function showAreaMeals(arr) {
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `
  <div class="col-md-3">
      <div class="meal position-relative overflow-hidden rounded-2 cursor">
        <img class="w-100" src="${arr[i].strMeal}" alt="">
   <div class="meal-layer position-absolute d-flex align-items-center text-black">
           <h3>${arr[i].strMeal}</h3>
       </div>
   </div>
</div> 
   `;
  }
  rowBox.innerHTML = box;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getIngredientsMeals(ingredients) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${Ingredient}}`
  );
  response = await response.json();

  console.log(response.meals);
  showIngredientMeals(response.meals);
}
function showIngredientMeals(arr) {
  let box = "";
  for (let i = 0; i < arr.length; i++) {
    box += `
  <div class="col-md-3">
      <div class="meal position-relative overflow-hidden rounded-2 cursor">
        <img class="w-100" src="${arr[i].strIngredient}" alt="">
   <div class="meal-layer position-absolute d-flex align-items-center text-black">
           <h3>${arr[i].strDescription}</h3>
       </div>
   </div>
</div> 
   `;
  }
  rowBox.innerHTML = box;
}

// //////////////////////////////////////////////////////////////////////////////////////

async function getMealRecipe(mealId) {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}}`
  );
  response = await response.json();

  console.log(response.meals);
  displayMealRecipe(response.meals);
}
function displayMealRecipe(meal) {
  let box = `
      <div class="col-md-4">
      <img class="w-100" src="${meal.strMealThumb}" 
      alt="">
      <h2>${meal.strMeal}</h2>
  </div>
  <div class="col-md-8">
      <h2>Instructions</h2>
      <p>${meal.strInstructions}</p>
      <h3>Area: <span>${meal.strArea}</span></h3>
      <h3>Category: <span>${meal.strCategory}</span></h3>
      <h3>Recipes :</h3>
      <ul class="list-unstyled d-flex g-3 flex wrap ">
          <li class="alert alert-info m-3">1 cup Lentils</li>
          <li class="alert alert-info m-3">1 cup Lentils</li>

          <li class="alert alert-info m-3">1 cup Lentils</li>

          <li class="alert alert-info m-3">1 cup Lentils</li>

          <li class="alert alert-info m-3">1 cup Lentils</li>


      </ul>
      <h3>tags</h3>
      <li class="alert alert-success m-3 p-1 d-flex g-3 flex-wrap list-unstyled">Soup </li>
      <div>
          <a href='${meal.strYoutube}' class="btn btn-success m-3 p-1">source</a>

          <li  href='${meal.strSource}' class="btn btn-danger m-3 p-1">youtube</li>

      </div>


  </div>
     `;

  rowBox.innerHTML = box;
}
