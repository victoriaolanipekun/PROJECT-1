function init() {

  const startButton = document.querySelector('#start-button')
  const grid = document.querySelector('.grid')
  const endMessage = document.querySelector('h2')
  // console.log(grid)

  const width = 10
  const cellCount = width * width
  const cells = []
  console.log(cells)

  const snakeInitialPosition = 0
  let snakeCurrentPosition = 0
  const snakeClass = 'snake'
  const foodClass = 'food'
  // console.log(foodClass)

  let tail
  let randomnumber = 0
  let pointsTotal = 10
  let score = 0
  let life = 1
  let lives = 3
  let movement = 0
  let foodInitialPosition = 0

  let foodCurrentPosition = Math.floor(Math.random() * cells.length)
  console.log('foodCurrentPosition', foodCurrentPosition)



  // start game
  function startGame () {
    console.log('clicked')
    cells[foodCurrentPosition].classList.add(foodClass) // show the mole at the start position, outside of the interval so this only happens once 
    // console.log('cells ->', cells)
    // console.log('cells[foodCurrentPosition] ->', cells[foodCurrentPosition])
    // console.log('cells[foodCurrentPosition].classList ->', cells[foodCurrentPosition].classList)
    addfoodPosition(foodCurrentPosition)
  }
  // creating the grid 
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // console.log('cell ->', cell)
      cell.innerText = i
      // console.log('cell ->', cell)
      grid.appendChild(cell)
      // to store the cell values in the array
      cells.push(cell)
    }
    addSnake(snakeInitialPosition)
  }

  function addfoodPosition(position) {
    cells[position].classList.remove(foodClass) // remove the mole from the current position
    foodCurrentPosition = Math.floor(Math.random() * cells.length) // redefine value of currentMolePosition to be a new random index
    console.log('foodCurrentPosition ->', foodCurrentPosition)
    cells[foodCurrentPosition].classList.add(foodClass) // add the mole at the new index generated above 
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
    removeSnake(snakeCurrentPosition)

    if (key === 39 && snakeCurrentPosition % width !== width - 1) {
      //console.log('RIGHT')
      snakeCurrentPosition++
      movement++
      if (snakeCurrentPosition === foodCurrentPosition) {
        addfoodPosition(foodCurrentPosition)
        score++
        if (score === pointsTotal) {
          grid.classList.add('hidden')
          endMessage.innerText = 'You Win!'
          endMessage.classList.remove('hidden')
        }
        //console.log('my1 ->', foodCurrentPosition)
      }

      //smashWall() 
      // console.log('snakeCurrentPositionAfterMoving ->', snakeCurrentPosition)
    } else if (key === 37 && snakeCurrentPosition % width !== 0) {
      // console.log('LEFT')
      snakeCurrentPosition--
      movement++
      if (snakeCurrentPosition === foodCurrentPosition) {
        addfoodPosition(foodCurrentPosition)
        score++
        if (score === pointsTotal) {
          grid.classList.add('hidden')
          endMessage.innerText = 'You Win!'
          endMessage.classList.remove('hidden')
        }
      }

      //smashWall() 
    } else if (key === 38 && snakeCurrentPosition >= width) {
      // console.log('UP')
      snakeCurrentPosition -= width
      movement++
      if (snakeCurrentPosition === foodCurrentPosition) {
        addfoodPosition(foodCurrentPosition)
        score++
        if (score === pointsTotal) {
          grid.classList.add('hidden')
          endMessage.innerText = 'You Win!'
          endMessage.classList.remove('hidden')
        }
      }

      //smashWall() 
    } else if (key === 40 && snakeCurrentPosition + width <= width * width - 1) {
      // console.log('DOWN')
      snakeCurrentPosition += width
      movement++
      if (snakeCurrentPosition === foodCurrentPosition) {
        addfoodPosition(foodCurrentPosition)
        //tail = snakeCurrentPosition
        //cells[tail].classList.remove(snakeClass)
        //currentSnake.unshift(currentSnake[0] + direction);
        // movement ends here
        //snakeCurrentPosition.push(tail)
        //cells[snakeCurrentPosition].classList.add(snakeClass)
        //snakeCurrentPosition++

        score++
        if (score === pointsTotal) {
          grid.classList.add('hidden')
          endMessage.innerText = 'You Win!'
          endMessage.classList.remove('hidden')
        }
      }

      //smashWall() 
    } else {
      if (movement !== 0) {
        alert('You hit something')
        lives = lives - 1
        console.log(lives)
        if (lives === 0) {
          grid.classList.add('hidden')
          
          // Show the message
          endMessage.innerText = 'Try Again!'
          endMessage.classList.remove('hidden')
        }
      }
    }

    addSnake(snakeCurrentPosition)
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

// Snake movement - set direction for snakes, set interval for the time it will take for the snake to move around and the if statement to condition the user to loose if the container edge is touched I.e passed

// Movement direction by the user - use event.keyCode, adding the set width or subtracting it, then set an eventListener 

// Snake food - using random number 
// Snake feeding - the divs without the snake is where the apple function pops up - in a conditional statement within a function

