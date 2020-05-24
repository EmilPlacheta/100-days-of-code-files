const cards = document.querySelectorAll('.card')
const paragraphs = document.querySelectorAll('.para')

function handleHoverShow(e) {
  let cardId = e.target.dataset.id
  paragraphs.forEach(p => {
    if(p.dataset.id === cardId) {
      let para = (paragraphs.item(cardId - 1))
      para.classList.remove('hidden')
    }
  })
}

function handleHoverHide(e) {
  let cardId = e.target.dataset.id
  paragraphs.forEach(p => {
    if(p.dataset.id === cardId) {
      let para = (paragraphs.item(cardId - 1))
      para.classList.add('hidden')
    }
  })
}

cards.forEach(card => {
  card.addEventListener('mouseenter', handleHoverShow)
})

cards.forEach(card => {
  card.addEventListener('mouseleave', handleHoverHide)
})

