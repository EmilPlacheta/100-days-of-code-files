const $result = document.getElementById('result');

/* const whatJudySpent = Number(document.getElementById('whatJudySpent').value);
const whatLydiaSpent = Number(document.getElementById('whatLydiaSpent').value);
const whatEmilSpent = Number(document.getElementById('whatEmilSpent').value);
const total = (whatJudySpent + whatLydiaSpent + whatEmilSpent).toFixed(2); */

const group = [
  {
    name: 'Judy',
    amountSpent: 50
  },
  {
    name: 'Lydia',
    amountSpent: 450
  },
  {
    name: 'Emil',
    amountSpent: 10
  }
];

const owed = [];
const owe = [];

const total = group.reduce((acc, num) => acc + num.amountSpent, 0);
const fairShare = Number((total / group.length).toFixed(2));
console.log(group.length);
console.log(`Total amount spent: ${total}`);
console.log(`Fair share : ${fairShare}`);

group.forEach(el => {
  el.balance = (el.amountSpent - fairShare).toFixed(2);
});

const wow2 = function(group) {
  group.forEach(el =>
    el.balance > 0
      ? owed.push(`${el.name} ${el.balance}`)
      : owe.push(`${el.name} ${el.balance}`)
  );
};
console.log(group);
wow2(group);
console.log(`Who is owed: ${owed}`);
console.log(`From who and how much ${owe}`);
