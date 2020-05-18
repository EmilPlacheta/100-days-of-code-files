const $selectedKey = document.querySelector('.selected-key')
const $eWhich = document.querySelector('#e-which')
const $eCode = document.querySelector('#e-code')
const $eKey = document.querySelector('#e-key')

function handleKeyDown(e) {
  $selectedKey.innerText = e.key
  $selectedKey.innerHTML === 'CapsLock' ? $selectedKey.innerHTML = 'C.Lock' : ''
  $eWhich.innerText = e.which
  $eCode.innerText = e.code
  $eKey.innerText = e.key
  $selectedKey.innerHTML === ' ' ? $selectedKey.innerHTML = 'Space' : null
  $eKey.innerHTML === ' ' ? $eKey.innerHTML = 'Space Character' : null
  console.log(e.which)
}

window.addEventListener('keydown', handleKeyDown)