const button = document.getElementById('btn')
const ddg = document.getElementById('dodge')
let num = document.getElementById('num')
const rick = new Audio("https://od.lk/s/NzhfNjY1MTE5OTJf/poussin.mp3")

let html = '';





button.addEventListener('click', () => {
  console.log('c')
  rick.currentTime = 0
  num.innerHTML++
  rick.play()

})