function init() {

  const startButton = document.querySelector('#start-button')
  const grid = document.querySelector('.grid')
  const displayPoints = document.querySelector('.points')
  const displayLives = document.querySelector('.lives')
  const endMessage = document.querySelector('h2')
  // console.log(grid)

  const width = 10
  const cellCount = width * width
  const cells = []
  console.log(cells)

  const snakeInitialPosition = 0
  const snakeCurrentPosition = [1, 0]
  const snakeClass = 'snake'
  const foodClass = 'food'
  // console.log(foodClass)

  let tail
  let randomnumber = 0
  let pointsTotal = 10
  let score = 0
  let life = 1
  let movement = 0
  let foodInitialPosition = 0
  let speedTime = 1
  let crawlTime = 1000
  let crawl = 0
  let nav = 1


  let foodCurrentPosition = Math.floor(Math.random() * cells.length)
  console.log('foodCurrentPosition', foodCurrentPosition)



  // hide game
  function hideGame () {
    if (startButton !== clicked) {
      grid.classList.add('hidden')
      startGame()
      endMessage.classList.remove('hidden')
    }
  }

  // start game
  function startGame () {
    console.log('clicked')
    cells[foodCurrentPosition].classList.add(foodClass) // show the food at the start position, outside of the interval so this only happens once 
    // console.log('cells ->', cells)
    // console.log('cells[foodCurrentPosition] ->', cells[foodCurrentPosition])
    // console.log('cells[foodCurrentPosition].classList ->', cells[foodCurrentPosition].classList)
    snakeCurrentPosition.forEach((index) => cells[index].classList.add(snakeClass))
    crawl = setInterval(crawlAfter, crawlTime)
    addfoodPosition(foodCurrentPosition)
  }
  // creating the grid 
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // console.log('cell ->', cell)
      // cell.innerText = i
      // console.log('cell ->', cell)
      grid.appendChild(cell)
      // to store the cell values in the array
      cells.push(cell)
    }
    addSnake(snakeInitialPosition)
  }

  function crawlAfter() {
    if (smashWall(cells)) {
      return clearInterval(crawl)
    } else {
      crawling(cells)
    }
  }

  function smashWall(cells) {
    if (
      (snakeCurrentPosition[0] + width >= width * width && nav === width) ||
      (snakeCurrentPosition[0] % width === width - 1 && nav === 1) ||
      (snakeCurrentPosition[0] % width === 0 && nav === -1) ||
      (snakeCurrentPosition[0] - width <= 0 && nav === -width) ||
      cells[snakeCurrentPosition[0] + nav].classList.contains(snakeClass)
    ) {
      grid.classList.add('hidden')
          
      // Show the message
      endMessage.innerText = 'Try Again!'
      endMessage.classList.remove('hidden')
      return true
    } else {
      return false
    }
  }

  function feedSnake(cells, tail) {
    if (cells[snakeCurrentPosition[0]].classList.contains(foodClass)) {
      cells[snakeCurrentPosition[0]].classList.remove(foodClass)
      cells[tail].classList.add(snakeClass)
      snakeCurrentPosition.push(tail)
      addfoodPosition(cells)

      score++
      displayPoints.innerText = `Score: ${score}`
      // console.log(score)

      if (score === pointsTotal) {
        grid.classList.add('hidden')
        endMessage.innerText = 'You Win!'
        endMessage.classList.remove('hidden')
      }

      clearInterval(crawl)
      crawlTime = crawlTime * speedTime
      crawl = setInterval(crawlAfter, crawlTime)
    }
  }

  function crawling(cells) {
    const tail = snakeCurrentPosition.pop()
    cells[tail].classList.remove(snakeClass)
    snakeCurrentPosition.unshift(snakeCurrentPosition[0] + nav)
    // movement ends here
    feedSnake(cells, tail)
    cells[snakeCurrentPosition[0]].classList.add(snakeClass)
  }

  function addfoodPosition() {
    cells[foodCurrentPosition].classList.remove(foodClass) // remove the food from the current position
    foodCurrentPosition = Math.floor(Math.random() * cells.length) // redefine value of currentFoodPosition to be a new random index
    console.log('foodCurrentPosition ->', foodCurrentPosition)
    cells[foodCurrentPosition].classList.add(foodClass) // add the food at the new index generated above 
  }

  // Add the snake
  function addSnake(position) {
    // console.log('position ->', position)
    // console.log('cell at index ->', cells[position])
    cells[position].classList.add(snakeClass)
  }

  // To remove the snake
  function removeSnake(position) {
    cells[position].classList.remove(snakeClass)
  }


  // Control snake movement
  function handleKeyUp(event) {
    // console.log('key is being pressed')
    // console.log(event.keyCode)
    const key = event.keyCode
    // console.log('snakeCurrentPositionInitially ->', snakeCurrentPosition)
    removeSnake(snakeCurrentPosition[0])

    if (key === 39) {
      //console.log('RIGHT')
      //alert('right')
      nav = 1
      movement++

    } else if (key === 37) {
      // console.log('LEFT')
      nav = -1
      movement++
    
    } else if (key === 38) {
      // console.log('UP')
      nav = -width
      movement++

      //smashWall() 
    } else if (key === 40) {
      // console.log('DOWN')
      nav = +width
      movement++

      //smashWall() 
    } 

    addSnake(snakeCurrentPosition[0])
    console.log('Score=>', score)
  }


  // Event Listner
  document.addEventListener('keyup', handleKeyUp)



  startButton.addEventListener('click', startGame)
  createGrid()

}

window.addEventListener('DOMContentLoaded', init)




// * The snake should be able to eat food to grow bigger
// * The game should end when the snake hits the wall or itself
// * Snake speeds up as it eats more

// ## Suggested enhancements

// * Responsive design
// * Multi-player mode
// * High score table



// HTML
// Score, start, buttons - using the function and if statement (should I make the button in the screen or let the game work with the user’s keyboard and then how do I link them together)

// CSS
// Style as needed - grid height and width, grid wrapper, the snake, the apple

// Javascript
// Define my variables such as the grid, score, width, snakeCurrentSize,  using document.querySelector to  get the various classes that would be functional e.g the grid, score container 
// Add eventlistner

// The Snake - divs with the same color

// The snake gets longer as it feeds - the use of the current size/array 

// The snake container/house - grids 8X8 , looping to 64  and these grids will be stored in the snake container 

// Snake movement - set nav for snakes, set interval for the time it will take for the snake to move around and the if statement to condition the user to loose if the container edge is touched I.e passed

// Movement nav by the user - use event.keyCode, adding the set width or subtracting it, then set an eventListener 

// Snake food - using random number 
// Snake feeding - the divs without the snake is where the apple function pops up - in a conditional statement within a function

