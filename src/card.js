import cardBack from './images/card-back.png'
import cardFront from './images/card-front.png'

export default () => {
  const mainWrapper = document.createElement('div'),
    cardContainer = document.createElement('div'),
    frontSide = document.createElement('div'),
    backSide = document.createElement('div')

  mainWrapper.setAttribute('id', 'gift_card_container')
  cardContainer.setAttribute('id', 'gift_card_card')
  cardContainer.setAttribute('class', 'shadow')
  frontSide.setAttribute('class', 'front face')
  backSide.setAttribute('class', 'back face center')

  frontSide.innerHTML = '<img src="public/' + cardFront + '" />'
  backSide.innerHTML = '<img src="public/' + cardBack + '" />'
  cardContainer.innerHTML = frontSide.outerHTML + backSide.outerHTML

  mainWrapper.innerHTML = cardContainer.outerHTML

  document.getElementById('gift_card_app').innerHTML = mainWrapper.outerHTML
}
