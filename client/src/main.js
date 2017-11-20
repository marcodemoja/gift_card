(() => {
  window.onload = () => {
    const mainWrapper = document.createElement('div'),
      cardContainer = document.createElement('div'),
      frontSide = document.createElement('div'),
      backSide = document.createElement('div')

    mainWrapper.setAttribute('id', 'gift_card_container')
    cardContainer.setAttribute('id', 'gift_card_card')
    cardContainer.setAttribute('class', 'shadow')
    frontSide.setAttribute('class', 'front face')
    backSide.setAttribute('class', 'back face center')

    frontSide.innerHTML = '<img src="images/card-front.png" />'
    backSide.innerHTML = '<img src="images/card-back.png" />'
    cardContainer.innerHTML = frontSide.outerHTML + backSide.outerHTML

    mainWrapper.innerHTML = cardContainer.outerHTML

    document.getElementById('app_root').innerHTML = mainWrapper.outerHTML
  }
})()
