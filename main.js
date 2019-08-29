const startButton = document.querySelector('#startbutton')
const canvas = document.querySelector('canvas')
//music
const bgmusic = document.querySelector('#music')
const battlemusic = document.querySelector('#battlemusic')
const buttonsmash = document.querySelector('#buttonsmash')
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
//pizza
const pizza1 = document.querySelector('#pizza1')
const pizza2 = document.querySelector('#pizza2')
const pizza3 = document.querySelector('#pizza3')
const pizza4 = document.querySelector('#pizza4')
const pizza5 = document.querySelector('#pizza5')
const pizza6 = document.querySelector('#pizza6')
const pizza7 = document.querySelector('#pizza7')
const pizza8 = document.querySelector('#pizza8')
const pizza9 = document.querySelector('#pizza9')
const pizza10 = document.querySelector('#pizza10')

const pizza12 = document.querySelector('#pizza12')
const pizza22 = document.querySelector('#pizza22')
const pizza32 = document.querySelector('#pizza32')
const pizza42 = document.querySelector('#pizza42')
const pizza52 = document.querySelector('#pizza52')
const pizza62 = document.querySelector('#pizza62')
const pizza72 = document.querySelector('#pizza72')
const pizza82 = document.querySelector('#pizza82')
const pizza92 = document.querySelector('#pizza92')
const pizza102 = document.querySelector('#pizza102')

//player selector
const leo = document.querySelector('#Leonardo')
const raph = document.querySelector('#Raphael')
const mike = document.querySelector('#Mikey')
const don = document.querySelector('#Donn')

//select name
const play1 = document.querySelector('#player1select')
const play2 = document.querySelector('#player2select')

let charArr = [leo, raph, mike, don]

const ctx = canvas.getContext('2d')
let frames = 0
let interval
let currentbtnp1
let currentbtnp2
let p1counter = 0
let p2counter = 0

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

class Player{
  constructor(x,y, name, side){
    this.x = x
    this.y = y
    this.width = 210
    this.height = 180
    this.name = name
    this.side = side
    //Leo R
    this.imgLeoCRight = new Image()
    this.imgLeoCRight.src = 'assets/tortugas right/leo boca cerrada R.png'
    this.imgLeoORight = new Image()
    this.imgLeoORight.src = 'assets/tortugas right/leo boca abierta R.png'
    //Rafa R
    this.imgRafaCRight = new Image()
    this.imgRafaCRight.src = 'assets/tortugas right/rafa boca cerrada R.png'
    this.imgRafaORight = new Image()
    this.imgRafaORight.src = 'assets/tortugas right/rafa boca abierta R.png'
    //Mike R
    this.imgMikeCRight = new Image()
    this.imgMikeCRight.src = 'assets/tortugas right/michela boca cerrada R.png'
    this.imgMikeORight = new Image()
    this.imgMikeORight.src = 'assets/tortugas right/michela boca abierta R.png'
    //Donie R
    this.imgDonieCRight = new Image()
    this.imgDonieCRight.src = 'assets/tortugas right/don boca cerrada R.png'
    this.imgDonieORight = new Image()
    this.imgDonieORight.src = 'assets/tortugas right/don boca abierta R.png'
    
    //Leo L
    this.imgLeoCLeft = new Image()
    this.imgLeoCLeft.src = 'assets/tortugas left/leo boca cerrada L.png'
    this.imgLeoOLeft = new Image()
    this.imgLeoOLeft.src = 'assets/tortugas left/leo boca abierta L.png'
    //Rafa L
    this.imgRafaCLeft = new Image()
    this.imgRafaCLeft.src = 'assets/tortugas left/rafa boca cerrada L.png'
    this.imgRafaOLeft = new Image()
    this.imgRafaOLeft.src = 'assets/tortugas left/rafa boca abierta L.png'
    //Mike L
    this.imgMikeCLeft = new Image()
    this.imgMikeCLeft.src = 'assets/tortugas left/michela boca cerrada L.png'
    this.imgMikeOLeft = new Image()
    this.imgMikeOLeft.src = 'assets/tortugas left/michela boca abierta L.png'
    //Donie L
    this.imgDonieCLeft = new Image()
    this.imgDonieCLeft.src = 'assets/tortugas left/don boca cerrada L.png'
    this.imgDonieOLeft = new Image()
    this.imgDonieOLeft.src = 'assets/tortugas left/don boca abierta L.png'
    }
    draw(){
      if(this.name == 'Leo' && this.side == true){
        ctx.drawImage(this.imgLeoCRight, this.x, this.y, this.width, this.height)
        if(p1counter%2 !== 0){
          ctx.drawImage(this.imgLeoORight, this.x, this.y, this.width, this.height)
        }
      }
      else if(this.name == 'Rafa' && this.side == true){
        ctx.drawImage(this.imgRafaCRight, this.x, this.y, this.width, this.height)
        if(p1counter%2 !== 0){
          ctx.drawImage(this.imgRafaORight, this.x, this.y, this.width, this.height)
        }
      }
      else if(this.name == 'Donie' && this.side == true){
        ctx.drawImage(this.imgDonieCRight, this.x, this.y, this.width, this.height)
        if(p1counter%2 !== 0){
          ctx.drawImage(this.imgDonieORight, this.x, this.y, this.width, this.height)
        }
      }
      else if(this.name == 'Mike' && this.side == true){
        ctx.drawImage(this.imgMikeCRight, this.x, this.y, this.width, this.height)
        if(p1counter%2 !== 0){
          ctx.drawImage(this.imgMikeORight, this.x, this.y, this.width, this.height)
        }
      }
      else if(this.name == 'LeoL' && this.side !== true){
        ctx.drawImage(this.imgLeoCLeft, this.x, this.y, this.width, this.height)
        if(p2counter%2 !== 0){
          ctx.drawImage(this.imgLeoOLeft, this.x, this.y, this.width, this.height)
        }
      }
      else if(this.name == 'RafaL' && this.side !== true){
        ctx.drawImage(this.imgRafaCLeft, this.x, this.y, this.width, this.height)
        if(p2counter%2 !== 0){
          ctx.drawImage(this.imgRafaOLeft, this.x, this.y, this.width, this.height)
        }
      }
      else if(this.name == 'DonieL' && this.side !== true){
        ctx.drawImage(this.imgDonieCLeft, this.x, this.y, this.width, this.height)
        if(p2counter%2 !== 0){
          ctx.drawImage(this.imgDonieOLeft, this.x, this.y, this.width, this.height)
        }
      }
      else if(this.name == 'MikeL' && this.side !== true){
        ctx.drawImage(this.imgMikeCLeft, this.x, this.y, this.width, this.height)
        if(p2counter%2 !== 0){
          ctx.drawImage(this.imgMikeOLeft, this.x, this.y, this.width, this.height)
        }
      }
    }
}


const game = new Board()
const select = new Board()
let player1 
//= new Player(160,400, , true)
let player2 
//= new Player(870, 400, 'RafaL', false)
//const pizzap1 = new Pizza(190, 200)
//const pizzap2 = new Pizza(770, 200)


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

leo.onclick = function(){
  buttonsmash.play()
  play1.style.display = 'none'
  play2.style.display = ''
  if(player1){
    return player2 = new Player(870, 400, 'LeoL', false)
  }
  player1 = new Player(160,400, 'Leo', true)

}

raph.onclick = function(){
  buttonsmash.play()
  play1.style.display = 'none'
  play2.style.display = ''
  if(player1){
    return player2 = new Player(870, 400, 'RafaL', false)
  }
  player1 = new Player(160,400, 'Rafa', true)
}

mike.onclick = function(){
  buttonsmash.play()
  play1.style.display = 'none'
  play2.style.display = ''
  if(player1){
    return player2 = new Player(870, 400, 'MikeL', false)
  }
  player1 = new Player(160,400, 'Mike', true)
}

don.onclick = function(){
  buttonsmash.play()
  play1.style.display = 'none'
  play2.style.display = ''
  if(player1){
    return player2 = new Player(870, 400, 'DonieL', false)
  }
  player1 = new Player(160,400, 'Donie', true)
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

function pizzaEatP1(){
  if(p1counter == 0){
    pizza1.style.display = ''
  }
  else if(p1counter == 2){
    pizza1.style.display = 'none'
    pizza2.style.display = ''
  }
  else if(p1counter == 4){
    pizza2.style.display = 'none'
    pizza3.style.display = ''
  }
  else if(p1counter == 6){
    pizza3.style.display = 'none'
    pizza4.style.display = ''
  }
  else if(p1counter == 8){
    pizza4.style.display = 'none'
    pizza5.style.display = ''
  }
  else if(p1counter == 10){
    pizza5.style.display = 'none'
    pizza6.style.display = ''
  }
  else if(p1counter == 11){
    pizza6.style.display = 'none'
    pizza7.style.display = ''
  }
  else if(p1counter == 12){
    pizza7.style.display = 'none'
    pizza8.style.display = ''
  }
  else if(p1counter == 13){
    pizza8.style.display = 'none'
    pizza9.style.display = ''
  }
  else if(p1counter == 15){
    pizza9.style.display = 'none'
    pizza10.style.display = ''
  }
  
}

function pizzaEatP2(){
  if(p2counter == 0){
    pizza12.style.display = ''
  }
  else if(p2counter == 2){
    pizza12.style.display = 'none'
    pizza22.style.display = ''
  }
  else if(p2counter == 4){
    pizza22.style.display = 'none'
    pizza32.style.display = ''
  }
  else if(p2counter == 6){
    pizza32.style.display = 'none'
    pizza42.style.display = ''
  }
  else if(p2counter == 8){
    pizza42.style.display = 'none'
    pizza52.style.display = ''
  }
  else if(p2counter == 10){
    pizza52.style.display = 'none'
    pizza62.style.display = ''
  }
  else if(p2counter == 11){
    pizza62.style.display = 'none'
    pizza72.style.display = ''
  }
  else if(p2counter == 12){
    pizza72.style.display = 'none'
    pizza82.style.display = ''
  }
  else if(p2counter == 13){
    pizza82.style.display = 'none'
    pizza92.style.display = ''
  }
  else if(p2counter == 15){
    pizza92.style.display = 'none'
    pizza102.style.display = ''
  }
  
}

startButton.onclick = function(){
const home = document.querySelector('#homescreen')
chars.style.display = ''
home.style.display = 'none'
gameScreen.style.display = ''
bgmusic.play()
buttonsmash.play()
}
 
battbutton.onclick = function(){
  const text = document.querySelector('#text')
  battbutton.style.display = 'none'
  text.style.display = 'none'
  chars.style.display = 'none'
  bgmusic.pause()
  battlemusic.play()
  buttonsmash.play()
  play2.style.display = 'none'
  start()
  pizzaEatP1()
  pizzaEatP2()
  player2.draw()
  player1.draw()
  }
  
  again.onclick = function(){
    location.reload()
    buttonsmash.play()
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
    pizzaEatP1()
    pizzaEatP2()

    gameOver()
    player1.draw()
    player2.draw()
  
  }
