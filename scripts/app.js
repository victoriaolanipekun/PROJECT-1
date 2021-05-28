function init() {

  const grid = document.querySelector('.grid')
  // console.log(grid)

  const width = 10
  const cellCount = width * width
  const cells = []

  const snakeInitialPosition = 0
  let snakeCurrentPosition = 0
  const snakeClass = 'snake'

  //creating the grid 
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


  // Move snake
  function handleKeyUp(event) {
    // console.log('key is being pressed')
    // console.log(event.keyCode)
    const key = event.keyCode
    // console.log('snakeCurrentPositionInitially ->', snakeCurrentPosition)
    removeSnake(snakeCurrentPosition)

    if (key === 39 && snakeCurrentPosition % width !== width - 1) {
      //console.log('RIGHT')
      snakeCurrentPosition++
      // console.log('snakeCurrentPositionAfterMoving ->', snakeCurrentPosition)
    } else if (key === 37 && snakeCurrentPosition % width !== 0) {
      // console.log('LEFT')
      snakeCurrentPosition--
    } else if (key === 38 && snakeCurrentPosition >= width) {
      // console.log('UP')
      snakeCurrentPosition -= width
    } else if (key === 40 && snakeCurrentPosition + width <= width * width - 1) {
      // console.log('DOWN')
      snakeCurrentPosition += width
    }

    addSnake(snakeCurrentPosition)

  }


  // Event Listner
  document.addEventListener('keyup', handleKeyUp)




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

