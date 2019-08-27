const startButton = document.querySelector('#startbutton')
const canvas = document.querySelector('canvas')
//music
const bgmusic = document.querySelector('#music')
const battlemusic = document.querySelector('#battlemusic')
//boards
const gameScreen = document.querySelector('#game-board')
const battbutton = document.querySelector('#battlebutton')
const chars = document.querySelector('#player-selector')
//buttons
const p1btns = document.querySelector('#p1buttons')
const w = document.querySelector('#w')
const a = document.querySelector('#a')
const s = document.querySelector('#s')
const d = document.querySelector('#d')

const ctx = canvas.getContext('2d')
let frames = 0
let interval
let currentbtnp1
let currentbtnp2
let player1buttons =['w','a','s','d']
let player1keycode =[87, 65, 83, 68]
let player2buttons = ['up','down','right','left']
let player2keycode = [38,40,39,37]


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

class Player1{
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = 210
    this.height = 180
    this.img = new Image()
    this.img.src = './assets/leo.png'
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Player2{
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = 210
    this.height = 180
    this.img = new Image()
    this.img.src = './assets/rafa.png'
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Pizza{
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = 280
    this.height = 250
    this.img = new Image()
    this.img.src = './assets/Pizza.001.png'
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

const game = new Board()
const select = new Board()
const player1 = new Player1(160,400)
const player2 = new Player2(870, 400)
const pizzap1 = new Pizza(190, 200)
const pizzap2 = new Pizza(770, 200)

function start() {
  interval = setInterval(update, 1000 / 60)
  player1inputs()
}

function playerinputs(){
min = 0
max = 4
return Math.floor((Math.random()* (max-min))+min)
}

function player1inputs(){
let btn = playerinputs()
if (btn===0){
 currentbtnp1 = 'W'
 p1btns.style.display = ''
 w.style.display = '' 
 console.log('w')
}
else if (btn ===1){
  currentbtnp1 = 'A'
  p1btns.style.display = ''
  a.style.display = ''
  console.log('a')
}
else if(btn === 2){
  currentbtnp1 = 'S'
  p1btns.style.display = ''
  s.style.display = ''
  console.log('s')
}
else {
   currentbtnp1 = 'D'
   p1btns.style.display = ''
  d.style.display = ''
  console.log('d')
}
}

function player2inputs(){
  let btn = playerinputs()
  if (btn===0){
    return currentbtnp2 = 'Up'
  }
  else if (btn ===1){
    return currentbtnp2 = 'Down'
  }
  else if(btn === 2){
    return currentbtnp2 = 'Right'
  }
  else {
    return currentbtnp2 = 'Left'
  }
}

startButton.onclick = function(){
const home = document.querySelector('#homescreen')
chars.style.display = ''
home.style.display = 'none'
gameScreen.style.display = ''
bgmusic.play()
}
 
battbutton.onclick = function(){
  const text = document.querySelector('#text')
  battbutton.style.display = 'none'
  text.style.display = 'none'
  chars.style.display = 'none'
  bgmusic.pause()
  battlemusic.play()
  pizzap1.draw()
  pizzap2.draw()
  player1.draw()
  player2.draw()
  start()
  }


function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.draw()
    select.draw()
    player1.draw()
    player2.draw()
    pizzap1.draw()
    pizzap2.draw()
  }
