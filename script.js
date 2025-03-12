//  Buttons
const btnRoll = document.querySelector('.btn--roll')
const btnNew = document.querySelector('.btn--new')
const btnHold = document.querySelector('.btn--hold')

// dice image
const diceImg = document.querySelector('.dice')
diceImg.style.display ='none'

let currentScore = 0
let activePlayer = 0


btnRoll.addEventListener('click', () => {
  diceImg.style.display = 'block'

  const random = Math.floor(Math.random() * 6 + 1)
  diceImg.src = `dice-${random}.png`

  if(random !== 1) {
    currentScore += random
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
  }else {
    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0
  }
})




