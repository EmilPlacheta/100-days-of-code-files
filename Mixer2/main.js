$result = document.querySelector('#result');
const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

fetch(url)
  .then(res => res.json())
  .then(data => {
    const cocktailInfo = document.createElement('div');
    console.log(data.drinks);
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

      cocktailInfo.innerHTML += `
      <img src=${img} />
      <h2>${name}</h2>
      <p>Glass: <span>${glass}</span></p>
      <h4>Ingredients</h4>
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

      <h4>Instructions</h4>
      <p>${instructions}</p>
      `;
    });
    document.body.append(cocktailInfo);
  });
