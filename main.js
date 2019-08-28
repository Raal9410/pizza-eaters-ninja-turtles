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

const p2btns = document.querySelector('#p2buttons')
const up = document.querySelector('#up')
const down = document.querySelector('#down')
const right = document.querySelector('#right')
const left = document.querySelector('#left')

//wins
const again = document.querySelector('#playagain')

const ctx = canvas.getContext('2d')
let frames = 0
let interval
let currentbtnp1
let currentbtnp2
let pressp1
let p1counter = 0
let p2counter = 0
//let player1buttons =['w','a','s','d']
//let player1keycode =[87, 65, 83, 68]
//let player2buttons = ['up','down','right','left']
//let player2keycode = [38,40,39,37]


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
  player2inputs()
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
 w.style.display = '' 
 console.log('w')
}
else if (btn ===1){
  currentbtnp1 = 'A'
  a.style.display = ''
  console.log('a')
}
else if(btn === 2){
  currentbtnp1 = 'S'
  s.style.display = ''
  console.log('s')
}
else {
   currentbtnp1 = 'D'
  d.style.display = ''
  console.log('d')
}
}

document.onkeydown = e => {
  switch (e.keyCode) {
    case 87:
      if(currentbtnp1 == 'W'){
        w.style.display = 'none'
        p1counter +=1
        player1inputs()
      }
      else{
        p1counter -= 1
      }
      break
    case 65:
      if(currentbtnp1 == 'A'){
        a.style.display = 'none'
        p1counter +=1
        player1inputs()
          }
          else{
            p1counter -= 1
          }
      break 
   case 83:
      if(currentbtnp1 == 'S'){
        s.style.display = 'none'
        p1counter +=1
        player1inputs()
         }
         else{
          p1counter -= 1
        }
        break
  case 68:
    if(currentbtnp1 == 'D'){
      d.style.display = 'none'
        p1counter +=1
      player1inputs()
        }
        else{
          p1counter -= 1
        }
      break        
      case 38:
          if(currentbtnp2 == 'Up'){
            up.style.display = 'none'
            p2counter +=1
            player2inputs()
          }
          else{
            p2counter -= 1
          }
          break
        case 40:
          if(currentbtnp2 == 'Down'){
            down.style.display = 'none'
            p2counter +=1
            player2inputs()
              }
              else{
                p2counter -= 1
              }
          break 
       case 39:
          if(currentbtnp2 == 'Right'){
            right.style.display = 'none'
            p2counter +=1
            player2inputs()
             }
             else{
              p2counter -= 1
            }
            break
      case 37:
        if(currentbtnp2 == 'Left'){
          left.style.display = 'none'
            p2counter +=1
          player2inputs()
            }
            else{
              p2counter -= 1
            }  
    default:
      break
  }
}

function player2inputs(){
  let btn2 = playerinputs()
  if (btn2===0){
   currentbtnp2 = 'Up'
   up.style.display = '' 
  }
  else if (btn2 ===1){
    currentbtnp2 = 'Down'
    down.style.display = ''
  }
  else if(btn2 === 2){
    currentbtnp2 = 'Right'
    right.style.display = ''
  }
  else {
     currentbtnp2 = 'Left'
    left.style.display = ''
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

  again.onclick = function(){
    location.reload()
  }

  function gameOver() {
    if(p1counter == 15){
    const p1wins = document.querySelector('#p1wins')
    p1wins.style.display = ''
    again.style.display = ''
    clearInterval(interval)
   }
   if(p2counter == 15){     
    const p2wins = document.querySelector('#p2wins')
    p2wins.style.display = ''
    again.style.display = ''
    clearInterval(interval)
   }
  }

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.draw()
    select.draw()
    player1.draw()
    player2.draw()
    pizzap1.draw()
    pizzap2.draw()
    gameOver()
  }
