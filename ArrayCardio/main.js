const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese'
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 2,
  pork: 7
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 }
];

/*
  Static Methods
*/

// Array.of();
newArr = Array.of(1, 2, 3, 4, 5);
console.log(newArr);

// Make a function that creates a range from x to y with Array.from();
function createRangeOfNumbers(start, end) {
  const range = Array.from({ length: end - start + 1 }, function(item, index) {
    return index + start;
  });
  return range;
}

// Check if the last array you created is really an array with Array.isArray();
const myRange = createRangeOfNumbers(2, 3);
console.log(Array.isArray(myRange));

// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

/*
  Instance Methods
*/

// Display all bun types with " or " - use join()
const bunsJoined = buns.join(' or ');
//console.log(bunsJoined)

// We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into a string
const string = 'hot dogs,hamburgers,sausages,corn';
const stringSplit = string.split(',');
//console.log(stringSplit)

// take the last item off toppings with pop()
toppings.pop();
//console.log(toppings)
//console.log(toppingsPopped)
// add it back with push()
toppings.push('Cheese');
//console.log(toppings)
// take the first item off toppings with shift()
toppings.shift();
//console.log(toppings)
// add it back in with unshift()
toppings.unshift('Mushrooms');
//console.log(toppings)
// Do the last four,but immutable (with spreads and new variables)

const newToppings = [...toppings];
console.log(newToppings);
newToppings.pop();
newToppings.push('Cheese');
newToppings.shift();
newToppings.unshift('Mushrooms');

// Make a copy of the toppings array with slice()
const sliceToppings = toppings.slice(0);
console.log(sliceToppings);
// Make a copy of the toppings array with a spread
// take out items 3 to 5 of your new toppings array with splice()
console.log(newToppings.splice(2, 3));
console.log(newToppings);
// find the index of Avocado with indexOf() / lastIndexOf()
console.log(newToppings.indexOf('Avocado'));
// Check if hot sauce is in the toppings with includes()
console.log(newToppings.includes('hot sauce'));
// add it if it's not
// flip those toppings around with reverse()
!newToppings.includes('hot sauce') ? newToppings.reverse() : '';
console.log(newToppings);
/*
  Callback Methods
*/

// find the first rating that talks about a burger with find()
const firstBurgRaring = feedback.find(post => post.comment.includes('burg'));
console.log(firstBurgRaring);
// find all ratings that are above 2 with filter()
const overTwoStars = feedback.filter(post => post.rating > 2);
console.log(overTwoStars);
// find all ratings that talk about a burger with filter()
const filterBurger = feedback.filter(post =>
  post.comment.toLocaleLowerCase().includes('burg')
);
console.log(filterBurger);
// Remove the one star rating however you like!
const removeOneStar = feedback.filter(post => post.rating > 2);
console.log(removeOneStar);

// check if there is at least 5 of one type of meat with some()
const minimumMeatLevels = Object.values(meats).some(
  meatAmount => meatAmount >= 5
);
console.log(minimumMeatLevels);
// make sure we have at least 3 of every meat with every()
const atleastThreeOfEveryMeat = Object.values(meats).every(
  meatAmount => meatAmount >= 3
);
console.log(atleastThreeOfEveryMeat);
// sort the toppings alphabetically with sort()
const alphabeticalToppings = [...toppings].sort();
console.log(alphabeticalToppings);
// sort the order totals from most expensive to least with .sort()
const sortedTotals = orderTotals.sort((a, b) => b - a);
console.log(sortedTotals);
// Sort the prices with sort()
const sortedPrices = Object.entries(prices).sort((a, b) => b[1] - a[1]);
console.table(sortedPrices);
//make it back into an object
console.table(Object.fromEntries(sortedPrices));
