const button = document.getElementById('btn')
const ddg = document.getElementById('dodge')
let num = document.getElementById('num')
const rick = new Audio("https://od.lk/s/NzhfNjY1MTE5OTJf/poussin.mp3")
const farfadet = new Audio("https://od.lk/s/NzhfNjY1MTE3MzZf/Le%20Farfadet%20Malicieux.mp3")
const poussin = document.querySelector('.move')
let html = '';


farfadet.loop = true


button.addEventListener('click', () => {
  console.log('c')
  rick.currentTime = 0
  num.innerHTML++
  rick.play()
  farfadet.play()

  poussin.classList.remove('move')
  poussin.classList.add('move1')

})
