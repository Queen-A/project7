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
  var newsquare = document.createElementNS(namespace, "rect")
      newsquare.setAttribute("x", x)
      newsquare.setAttribute("y", y)
      newsquare.setAttribute("height", size)
      newsquare.setAttribute("width", size)
      newsquare.setAttribute("fill", color)
      screen.appendChild(newsquare)
}

function drawCircle(x, y, size, color) {
  var newcircle = document.createElementNS(namespace, "circle")
    newcircle.setAttribute("cx", x)
    newcircle.setAttribute("cy", y)
    newcircle.setAttribute("r", size)
    newcircle.setAttribute("fill", color)
    screen.appendChild(newcircle)
}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  var pt = transformPoint(e)
})

document.addEventListener("mouseup", function(e) {
  var pt = transformPoint(e)
})

document.addEventListener("mousemove", function(e) {
  var pt = transformPoint(e)
  var xpos = pt.x
  var ypos = pt.y

  var colorSelect =   document.getElementById("colorSelect").value
  var sizeSelect =   document.getElementById("sizeSelect").value
  var shapeSelect =   document.getElementById("shapeSelect").value

  if (shapeSelect == "square") {
    drawSquare(pt.x, pt.y, sizeSelect, colorSelect)
  }
  else if (shapeSelect == "circle") {
    drawCircle(pt.x, pt.y, sizeSelect, colorSelect)
  }
})
