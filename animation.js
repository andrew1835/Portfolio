// document.addEventListener("DOMContentLoaded", function (event) {
//     calculateScore()
// });

// var redScore = 0
// var blueScore = 0

// function calculateScore() {
//     var redHeader = document.createElement("h3")
//     redHeader.setAttribute("id", "redScore")
//     redHeader.style.color = "white"
//     redHeader.textContent = "Red Score: " + redScore
//     document.body.append(redHeader)
//     console.log(redScore)
// }

// they can be random predefined colors if you create an array that has all the colors you want and then you randomly assign one of the colors using math.random(math.floor * number of items in array) + 1 
// they can also be random sizes

var floatUpRandomTime = (Math.random() * 10) + 8
// The order is orange, yellow, green, blue, purple, pink
var colorArray = ["rgb(252, 145, 74)", "rgb(248, 217, 80)", "rgb(40, 214, 49)", "rgb(56, 142, 255)", "rgb(143, 59, 252)", "rgb(245, 105, 170)"]
var randomColor = colorArray[Math.floor(Math.random() * 7)]
console.log(randomColor)


var circleBlue = document.createElement("div")
circleBlue.className = "circle"
document.body.append(circleBlue)
var randomPercentRightTwo = (Math.random() * 90) + 5
circleBlue.setAttribute("style", `right: ${randomPercentRightTwo}%`)
circleBlue.style.background = `${randomColor}`
console.log("working")
// setInterval(function () {
//     // var randomColor = colorArray[Math.floor(Math.random() * 7)]
//     // console.log(math.floor)
//     circleBlue.className = "circle"
//     document.body.append(circleBlue)
//     var randomPercentRight = Math.random() * 100
//     console.log(randomPercentRight)
//     circleBlue.setAttribute("style", `right: ${randomPercentRight}%`)
//     console.log("working")
// }, 5000)




var circleRed = document.createElement("div")
circleRed.className = "circle"
document.body.append(circleRed)
var randomPercentRightTwo = (Math.random() * 90) + 5
console.log("2 " + randomPercentRightTwo)
circleRed.setAttribute("style", `right: ${randomPercentRightTwo}%`)
circleRed.style.background = `${randomColor}`
// var randomColor = Math.floor(Math.random() * 10000)
// console.log(randomColor)
// circleRed.style.background = `#${randomColor}`
console.log("workingRed")

// setInterval(function () {
//     circleRed.className = "circleTwo"
//     document.body.append(circleRed)
//     var randomPercentRightTwo = Math.random() * 100
//     console.log(randomPercentRightTwo)
//     circleRed.setAttribute("style", `right: ${randomPercentRightTwo}%`)
//     console.log("workingRed")
// }, 5000)




circleBlue.addEventListener("mouseover", function () {
    circleBlue.style.background = "yellow"
    circleBlue.style.opacity = 0
    console.log("hover")
})


circleRed.addEventListener("mouseover", function () {
    circleRed.style.background = "yellow"
    circleRed.style.opacity = 0
    console.log("hover")
    // redScore++
    // calculateScore()
})


// one circle coming from the left that's aqua, one coming from the right that's red