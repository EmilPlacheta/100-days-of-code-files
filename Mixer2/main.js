cocktails = []

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then((result) => {
  cocktails.push(result)
  console.log(result)
}).catch((err) => {
  console.error(eerr)
});


console.log(cocktails)