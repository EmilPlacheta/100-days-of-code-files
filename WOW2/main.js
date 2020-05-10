const $result = document.getElementById('result');
const $total = document.getElementById('total');
const $fairShare = document.getElementById('fairShare');
const $submitButton = document.getElementById('submit-button');
const $resultContainer = document.getElementById('resultContainer');

const whatJudySpent = Number(document.getElementById('whatJudySpent').value);
const whatLydiaSpent = Number(document.getElementById('whatLydiaSpent').value);
const whatEmilSpent = Number(document.getElementById('whatEmilSpent').value);

const owed = [];
const owe = [];
const group = [
  { name: 'Judy', amountSpent: whatJudySpent },
  { name: 'Lydia', amountSpent: whatLydiaSpent },
  { name: 'Emil', amountSpent: whatEmilSpent }
];

const total = group.reduce((acc, num) => acc + num.amountSpent, 0);
const fairShare = Number((total / group.length).toFixed(2));

group.forEach(el => {
  el.balance = (el.amountSpent - fairShare).toFixed(2);
});

const calculate = function(group) {
  group.forEach(el =>
    el.balance > 0
      ? owed.push(`${el.name} should get back £${el.balance} `)
      : owe.push(` ${el.name} needs to pay back £${el.balance}`)
  );
};
//Calculate and display

$submitButton.addEventListener('click', e => {
  e.preventDefault();
  calculate(group);
  $resultContainer.classList.remove('hide');
  $submitButton.classList.add('disabled');

  $total.innerHTML = total;
  $fairShare.innerHTML = fairShare;
  $result.innerText = `
    ${owed}
    ${owe} 
  `;
});
