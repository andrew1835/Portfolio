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


// TODO:
// 1. Make the circles delete once they reach the top (to do this, you set the setTimeout time to be 1 second less than the animation duration)
// 2. Make them random sizes
// 3. Set the intervals so that the times intervals are a random time between 12-25 seconds
// 4. Make the circles delete when you hover over them
// they can also be random sizes

var floatUpRandomTime = (Math.random() * 10) + 8
// The order is orange, yellow, green, blue, purple, pink
var colorArray = ["#D4F1F9", "#CDEFE7", "#D3F1DC", "#D4F1F9", "#CDEFE7", "#D3F1DC"]
var randomColor = colorArray[Math.floor(Math.random() * 7)]
console.log(randomColor)




var circleOne = document.createElement("div")
circleOne.className = "circle"
document.body.append(circleOne)
var randomPercentRightTwo = (Math.random() * 90) + 5
console.log("2 " + randomPercentRightTwo)
circleOne.setAttribute("style", `right: ${randomPercentRightTwo}%`)
circleOne.style.background = `${randomColor}`
setTimeout(function () {
    circleOne.style.opacity = 0
}, 4000)



setInterval(function () {
    var circleBlue = document.createElement("div")
    circleBlue.className = "circle"
    document.body.append(circleBlue)
    var randomPercentRightTwo = (Math.random() * 90) + 5
    circleBlue.setAttribute("style", `right: ${randomPercentRightTwo}%`)
    var randomColor = colorArray[Math.floor(Math.random() * 7)]
    circleBlue.style.background = `${randomColor}`
    console.log("working")
    setTimeout(function () {
        circleBlue.style.opacity = 0
    }, 4000)
}, 2000)









var circleTwo = document.createElement("div")
circleTwo.className = "circle"
document.body.append(circleTwo)
var randomPercentRightTwo = (Math.random() * 90) + 5
console.log("2 " + randomPercentRightTwo)
circleTwo.setAttribute("style", `right: ${randomPercentRightTwo}%`)
circleTwo.style.background = `${randomColor}`
console.log("workingTwo")
setTimeout(function () {
    circleTwo.style.opacity = 0
}, 4000)

setInterval(function () {
    var circleTwo = document.createElement("div")
    circleTwo.className = "circle"
    document.body.append(circleTwo)
    var randomPercentRightTwo = (Math.random() * 90) + 5
    circleTwo.setAttribute("style", `right: ${randomPercentRightTwo}%`)
    var randomColor = colorArray[Math.floor(Math.random() * 7)]
    circleTwo.style.background = `${randomColor}`
    console.log("working")
    setTimeout(function () {
        circleTwo.style.opacity = 0
    }, 4000)
}, 2000)



// var allCircle = document.querySelectorAll(".circle")
// allCircle.addEventListener("mouseover", function () {
//     allCircle.style.background = "yellow"
//     allCircle.style.opacity = 0
//     console.log("hover")
// })


// circleTwo.addEventListener("mouseover", function () {
//     circleTwo.style.background = "yellow"
//     circleTwo.style.opacity = 0
//     console.log("hover")
//     // redScore++
//     // calculateScore()
// })


// one circle coming from the left that's aqua, one coming from the right that's red