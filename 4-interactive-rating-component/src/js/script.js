const button = document.querySelector('button')
const ratingComponent = document.querySelector('.rating')
const thanksComponent = document.querySelector('.thanks')
const userRatingNode = document.querySelector('.user-rating')


button.addEventListener('click', (e) => {
  const checkedValue = document.querySelector(':checked').value

  ratingComponent.classList.add('none')
  thanksComponent.classList.remove('none')

  userRatingNode.textContent = checkedValue

  e.preventDefault()
})
