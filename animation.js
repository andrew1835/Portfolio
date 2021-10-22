
// TODO:
// 1. Make the circles delete once they reach the top (to do this, you set the setTimeout time to be 1 second less than the animation duration) 
// ABOVE IS DONE
// 2. Make them random sizes between 30px and 118px
// ABOVE IS DONE
// 3. Set the intervals so that the times intervals (both for generating the circles and for how long they take to float up) are a random time. Generation should happen pretty frequently, but time for them to go up (aka animation duration) should be 12-25 seconds (and you have to make sure setTimeout is equal to animation duration)
// 4. Make the circles delete when you hover over them


// The order is blue, darker green, lighter green, blue, green, green
var colorArray = ["#D4F1F9", "#CDEFE7", "#D3F1DC", "#D4F1F9", "#CDEFE7", "#D3F1DC"]

var topDiv = document.getElementById("topDiv")
var numsOfCircles = [1, 2, 3, 4, 5]






startCycle()
function startCycle() {
    numsOfCircles.forEach(createCircle)
}



function createCircle() {
    var circle = document.createElement("div")
    circle.className = "circle"
    topDiv.append(circle)
    var randomColor = colorArray[Math.floor(Math.random() * 7)]
    var randomPercentRight = (Math.random() * 90) + 5
    circle.setAttribute("style", `right: ${randomPercentRight}%`)
    circle.style.background = `${randomColor}`
    var randomSize = Math.floor(Math.random() * 75) + 18
    circle.style.width = randomSize + "px"
    circle.style.height = randomSize + "px"
    var randomDuration = Math.floor(Math.random() * 14) + 12
    // console.log(randomDuration)
    circle.style.animationDuration = randomDuration + "s"
    setTimeout(function () {
        circle.remove()
    }, randomDuration * 1000)
    setTimeout(function () {
        circle.style.opacity = 1
    }, 1500)
    circle.addEventListener("mouseover", function () {
        circle.style.background = "#f795c3"
        circle.style.opacity = 0
        console.log("hover")
    })
    setInterval(function () {
        circle.style.background = colorArray[Math.floor(Math.random() * 7)]
    }, 1500)
}

setInterval(function () {
    startCycle()
}, 2000)


