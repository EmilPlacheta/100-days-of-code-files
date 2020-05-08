const $result = document.getElementById('result')

const whatJudySpent = Number(document.getElementById('whatJudySpent').value)
const whatLydiaSpent = Number(document.getElementById('whatLydiaSpent').value)
const whatEmilSpent = Number(document.getElementById('whatEmilSpent').value)
const total = whatJudySpent + whatLydiaSpent + whatEmilSpent
const share = (total / 3).toFixed(2)

console.log(total)
console.log(share)

const toJudy = function(whatJudySpent, share) {
  const result = whatJudySpent - share 
  return result
}

const toLydia = function(whatLydiaSpent, share) {
  const result = whatLydiaSpent - share 
  return result
}

const toEmil = function(whatEmilSpent, share) {
  const result = whatEmilSpent - share 
  return result
}


const whoOwesWho = function(whatJudySpent, whatEmilSpent, whatLydiaSpent) {
  let result, amountDue;

  if(whatJudySpent > whatEmilSpent && whatJudySpent > whatLydiaSpent) {
    amountDue = toJudy(whatJudySpent, share).toFixed(2)

    result = `
      Judy should get £${amountDue} back. 
      £${(share - whatLydiaSpent).toFixed(2)} from Lydia 
      and £${(share - whatEmilSpent).toFixed(2)} from Emil
      `

  } else if(whatEmilSpent > whatJudySpent && whatEmilSpent > whatLydiaSpent) {

    amountDue = toEmil(whatEmilSpent, share).toFixed(2)
    result = `
      Emil should get £${amountDue} back. 
      £${(share - whatLydiaSpent).toFixed(2)} from Lydia 
      and £${(share - whatJudySpent).toFixed(2)} from Judy
      `

  } else if (whatLydiaSpent > whatJudySpent && whatLydiaSpent > whatEmilSpent) {
    amountDue = toLydia(whatLydiaSpent, share)
      result = `
        Lydia should get £${amountDue} back. 
        £${(share - whatEmilSpent)} from Emil 
        and £${(share - whatJudySpent).toFixed(2)} from Judy
        `
  } 
  return result
}



const displayResult = whoOwesWho(whatJudySpent, whatEmilSpent, whatLydiaSpent)

$result.innerHTML = displayResult