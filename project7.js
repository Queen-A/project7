var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions
function drawSquare(x, y, size, color) {
  var newsquare = document.createElementNS(namespace, "square")
      newsquare.setAttribute("x", x)
      newsquare.setAttribute("y", y)
      newsquare.setAttribute("height", height)
      newsquare.setAttribute("width", width)
      newsquare.setAttribute("fill", color)
      canvas.appendChild(newsquare)
}

function drawCircle(x, y, size, color) {
  var newcircle = document.createElementNS(namespace, "circle")
    newcircle.setAttribute("cx", x)
    newcircle.setAttribute("cy", y)
    newcircle.setAttribute("r", radius)
    newcircle.setAttribute("fill", color)
    canvas.appendChild(newcircle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
