const startButton = document.querySelector('button')
const canvas = document.querySelector('canvas')
//music
const bgmusic = document.querySelector('#music')
const battlemusic = document.querySelector('#battlemusic')
//boards
const gameScreen = document.querySelector('#game-board')
const battbutton = document.querySelector('#battlebutton')
const ctx = canvas.getContext('2d')
let frames = 0
let interval
let player1buttons =['w','a','s','d']
let player2buttons = ['up','down','right','left']


class Board {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src ='https://cdna.artstation.com/p/assets/images/images/001/187/786/large/kevin-autry-cartoon-80s-beds-resized.jpg?1441823761'
    this.img.onload = () => {
      this.draw()
    }
}
draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  ctx.drawImage(
    this.img,
    this.x + canvas.width,
    this.y,
    this.width,
    this.height
  )
}
}

const game = new Board()
const select = new Board()


startButton.onclick = function(){
const home = document.querySelector('#homescreen')
home.style.display = 'none'
gameScreen.style.display = ''
bgmusic.play()
}
 
battbutton.onclick = function(){
  const home = document.querySelector('#homescreen')
  const text = document.querySelector('#text')
  battbutton.style.display = 'none'
  text.style.display = 'none'
  home.style.display = 'none'
  gameScreen.style.display = ''
  bgmusic.stop()
  battlemusic.play()
  }

  


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.draw()
    select.draw()
  }
