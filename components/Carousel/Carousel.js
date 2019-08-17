/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel() {
  let carousel = document.createElement('div')
  carousel.classList.add('carousel')
  let lButton = document.createElement('div')
  lButton.classList.add('left-button')
  lButton.textContent = '<'
  let mount = document.createElement('img')
  let comp = document.createElement('img')
  let trees = document.createElement('img')
  let turntable = document.createElement('img')
  let rButton = document.createElement('div')
  rButton.classList.add('right-button')
  rButton.textContent = '>'

  mount.src = './assets/carousel/mountains.jpeg'
  comp.src = './assets/carousel/computer.jpeg'
  trees.src = './assets/carousel/trees.jpeg'
  turntable.src = './assets/carousel/turntable.jpeg'

  carousel.appendChild(lButton)
  carousel.appendChild(mount)
  carousel.appendChild(comp)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rButton)
  

  return carousel
}