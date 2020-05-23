function surpriseMe() {
  let $result = document.querySelector('#result');
  const $aboutImg = document.querySelector('#about-img');
  const $resetBtn = document.querySelector('#reset-btn');

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

  function fetchCocktail() {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const cocktailInfo = document.createElement('div');

        data.drinks.map(item => {
          let name = item.strDrink;
          let glass = item.strGlass;
          let img = item.strDrinkThumb;
          let instructions = item.strInstructions;

          let ingr1 = item.strIngredient1 ? item.strIngredient1 : '';
          let ingr2 = item.strIngredient2 ? item.strIngredient2 : '';
          let ingr3 = item.strIngredient3 ? item.strIngredient3 : '';
          let ingr4 = item.strIngredient4 ? item.strIngredient4 : '';
          let ingr5 = item.strIngredient5 ? item.strIngredient5 : '';
          let ingr6 = item.strIngredient6 ? item.strIngredient6 : '';
          let ingr7 = item.strIngredient7 ? item.strIngredient7 : '';
          let ingr8 = item.strIngredient8 ? item.strIngredient8 : '';
          let ingr9 = item.strIngredient9 ? item.strIngredient9 : '';
          let ingr10 = item.strIngredient10 ? item.strIngredient10 : '';

          let msr1 = item.strMeasure1 ? item.strMeasure1 : '';
          let msr2 = item.strMeasure2 ? item.strMeasure2 : '';
          let msr3 = item.strMeasure3 ? item.strMeasure3 : '';
          let msr4 = item.strMeasure4 ? item.strMeasure4 : '';
          let msr5 = item.strMeasure5 ? item.strMeasure5 : '';
          let msr6 = item.strMeasure6 ? item.strMeasure6 : '';
          let msr7 = item.strMeasure7 ? item.strMeasure7 : '';
          let msr8 = item.strMeasure8 ? item.strMeasure8 : '';
          let msr9 = item.strMeasure9 ? item.strMeasure9 : '';
          let msr10 = item.strMeasure10 ? item.strMeasure10 : '';

          cocktailInfo.innerHTML = `
          <div class="row" id="cocktail-container">
          <div class="col s12 m6 l5">
            <div class="card">
              <div class="card-image">
                <img src="${img}" class="responsive-image" alt="cocktail" />
                <span class="card-title hide-on-med-and-up">${name}</span>
              </div>
            </div>
          </div>
          <div class="col m6 l7" id="cocktail-heading">
            <h1 class="cocktail-name hide-on-small-only">${name}</h1>
          </div>
        </div>
    
        <div class="divider"></div>
        
        <div class="row" id="">
        <div class="col s12 l4">
          <h4>Ingredients</h4>
          <p>Glass: <span>${glass}</span></p>
          <ul>
            <li>${msr1} ${ingr1}</li>
            <li>${msr2} ${ingr2}</li>
            <li>${msr3} ${ingr3}</li>
            <li>${msr4} ${ingr4}</li>
            <li>${msr5} ${ingr5}</li>
            <li>${msr6} ${ingr6}</li>
            <li>${msr7} ${ingr7}</li>
            <li>${msr8} ${ingr8}</li>
            <li>${msr9} ${ingr9}</li>
            <li>${msr10} ${ingr10}</li>
          </ul>
        </div>
        <div class="col s12 l5 offset-l2">
          <h4>Instructions</h4>
          <p>${instructions}</p>
        </div>
      </div>
          `;
          $aboutImg !== null ? ($aboutImg.src = img) : null;
        });
        $result !== null ? $result.append(cocktailInfo) : null;
      });
  }
  fetchCocktail();

  function reset() {
    $result.innerHTML = '';
    fetchCocktail();
  }

  $resetBtn.addEventListener('click', reset);
}

surpriseMe();

console.log($resetBtn);
