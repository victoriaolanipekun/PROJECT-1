![image](https://user-images.githubusercontent.com/71145696/128151120-b3a88874-26e0-4e8c-b2e1-7dea3d5d3b3a.png)<h1> Project #1: The Snake Game </h1>
![Snake Game MVP Screenshot](https://github.com/victoriaolanipekun/PROJECT-1/blob/main/assets/Screenshot%202021-08-04%20at%2016.54.25.png?raw=true)

<h1>Overview</h1>
<p>This project was my first ever JavaScript project and for the Software Engineering Immersive course at General Assembly. As a child I loved the snake game on the Nokia 3310 mobile phone and spent alot of time playing so it was such a natural for me to want to replicate the classic game that comes with much fun memories. Snake is the common name for a video game concept where the player maneuvers a line (that is the snake) which grows in length, with the line itself being a primary obstacle.  After a variant was preloaded on Nokia mobile phones in 1998, there was a resurgence of interest in the snake concept as it found a larger audience.</p>

<p>The player controls the snake on a bordered plane. As it moves forward, it leaves a trail behind, resembling a moving snake. The player loses when the snake runs into the screen border or itself. In this variant, a sole player attempts to eat apples by running into them with the head of the snake. Each item eaten makes the snake longer, so avoiding collision with the snake becomes progressively more difficult as there is an increase in speed.</p>

<h1>Brief</h1>

Design a grid-based game using HTML, CSS, and JavaScript learnt in the first three weeks of the course. The game should be playable for one player and the player must be able to win and lose. Timeframe: 1 week.

<h1>Deployment</h1>
Please follow the link to play my game: https://victoriaolanipekun.github.io/PROJECT-1/

Repository link: https://github.com/victoriaolanipekun/PROJECT-1


<h1>Technologies used</h1>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>Chrome</li>
<li>VS Code</li>
<li>Google Fonts</li>
<li>Git & GitHub</li>

<h1>Approach</h1>
<p>My first approach to developing the game was sketching out a plan of all the different functionalities the game should have, and priotised them to critical for MVP and Nice-To-Haves. I then pseudocoded my MVP into smaller bits to make sure I could deliver it within the right timeframe and also allow time for polishing and styling. I then went ahead to code the first stages which was implementing the grid on the page.</p>

<pre>
    
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
    
</pre>

<p>Next I wrote the function that enabled keyboard movement control for the snake after several iterations from the initial commit.</p>

<pre>

    
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
      
</pre>

<p>After successful testing of the grid and keyboard movement controls, I then went ahead to write some functions that handled the position of the snake which helped to add and remove the snake from a particular grid position.</p>

<pre>
    
    function crawling(cells) {
      const tail = snakeCurrentPosition.pop()
      cells[tail].classList.remove(snakeClass)
      snakeCurrentPosition.unshift(snakeCurrentPosition[0] + nav)
      // movement ends here
      feedSnake(cells, tail)
      cells[snakeCurrentPosition[0]].classList.add(snakeClass)
    }
  
    function addSnake(position) {
      // console.log('position ->', position)
      // console.log('cell at index ->', cells[position])
      cells[position].classList.add(snakeClass)
    } // Add the snake


    function removeSnake(position) {
      cells[position].classList.remove(snakeClass)
    } // To remove the snake
    
</pre>

<p>Next I added, the function for the food position where I can remove the food from the current position, redefine value of currentFoodPosition to be a new random index and add the food at the newly generated index.</p>

<pre>

    function addfoodPosition() {
      cells[foodCurrentPosition].classList.remove(foodClass)
      foodCurrentPosition = Math.floor(Math.random() * cells.length) 
      console.log('foodCurrentPosition ->', foodCurrentPosition)
      cells[foodCurrentPosition].classList.add(foodClass)  
    }

</pre>

<p>I also went ahead to add the collision function where the snake looses life once it colides with the grid container or hits itself. The MVP took six days to reach, and after I was satisfied with the functionality of the game I decided to move on to adding the speed features. As the snake feeds, it gets longer and the speed increses, thereby putting in more fun and a little bit more difficult for the player and I also added a scoreboard. The very last thing to add was some audio to boost the overall experience of the game.

</p>

<h1>Screenshots</h1>

MVP

![Snake Game MVP Screenshot](https://github.com/victoriaolanipekun/PROJECT-1/blob/main/assets/Screenshot%202021-06-04%20at%2014.59.22.png?raw=true)

COMPLETED GAME WITH STYLING 

![Snake Game MVP Screenshot](https://github.com/victoriaolanipekun/PROJECT-1/blob/main/assets/Screenshot%202021-08-04%20at%2016.47.36.png?raw=true)

COMPLETED GAME IN PLAY



![Snake Game MVP Screenshot](https://github.com/victoriaolanipekun/PROJECT-1/blob/main/assets/Screenshot%202021-08-04%20at%2017.03.53.png?raw=true)


<h1>Challenges</h1>
This was my first project using JavaScript so I faced many challenges, of which the biggest was:

Collision detection logic for the snake while it was moving, this made me change the game's control function, and I ended up storing the navigation direction in a variable called "nav" and this variable nav was later used to write the collision function "smashWall" that enabled me set the snake's "current" position to determine a lose or not, and the solution to this was a major win for me.

Initial control

<pre>

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

</pre>

Final control

<pre>

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

</pre>


<h1>Wins</h1>
There were many aspects of the game that I was proud of including the construction of the grid and the implementation of audio throughout the game. However, the area I am most pleased with is the smashWall function. In this function I was able to set the lose ("showLose") function in the if statement so as to determine if the snake had collided with the grid walls. This collision meant the player had lost and had to try again. 

<pre>

    function smashWall(cells) {
      if (
        (snakeCurrentPosition[0] + width >= width * width && nav === width) ||
        (snakeCurrentPosition[0] % width === width - 1 && nav === 1) ||
        (snakeCurrentPosition[0] % width === 0 && nav === -1) ||
        (snakeCurrentPosition[0] - width <= 0 && nav === -width) ||
        cells[snakeCurrentPosition[0] + nav].classList.contains(snakeClass)
      ) {
        showLose()
        return true
      } else {
        return false
      }
    }
</pre>

<h1>Key Learnings</h1>
<p>Making my first static JS browser game from scratch was a great learning exercise and a fun way to consolidate my learnings. In particular, I learnt a lot about DOM manipulation, different use cases for different JS array methods, and working with timers, also in hindsight I would spend a lot more time planning each stage of my build as this would help prevents some error I had to debug.</p>

<h1>Future improvements</h1>
If I had more time with my project there would be a number of features that I would have liked to have the opportunity to add:

<li>Create different difficulty levels.</li>
<li>Create a two player mode, where players take turns.</li>
<li>Make it mobile friendly.</li>


