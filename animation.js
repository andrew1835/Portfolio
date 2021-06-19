


// TODO:
// 1. Make the circles delete once they reach the top (to do this, you set the setTimeout time to be 1 second less than the animation duration) 
// ABOVE IS DONE
// 2. Make them random sizes between 30px and 118px
// ABOVE IS DONE
// 3. Set the intervals so that the times intervals (both for generating the circles and for how long they take to float up) are a random time. Generation should happen pretty frequently, but time for them to go up (aka animation duration) should be 12-25 seconds (and you have to make sure setTimeout is equal to animation duration)
// 4. Make the circles delete when you hover over them


var floatUpRandomTime = (Math.random() * 10) + 8
// The order is orange, yellow, green, blue, purple, pink
var colorArray = ["#D4F1F9", "#CDEFE7", "#D3F1DC", "#D4F1F9", "#CDEFE7", "#D3F1DC"]
var randomColor = colorArray[Math.floor(Math.random() * 7)]
var randomColorTwo = colorArray[Math.floor(Math.random() * 7)]
var randomColorThree = colorArray[Math.floor(Math.random() * 7)]
var randomColorFour = colorArray[Math.floor(Math.random() * 7)]
var randomColorFive = colorArray[Math.floor(Math.random() * 7)]
var randomColorSix = colorArray[Math.floor(Math.random() * 7)]




var circleOne = document.createElement("div")
circleOne.className = "circle"
document.body.append(circleOne)
var randomPercentRightTwo = (Math.random() * 90) + 5
circleOne.setAttribute("style", `right: ${randomPercentRightTwo}%`)
circleOne.style.background = `${randomColor}`
var randomSize = Math.floor(Math.random() * 75) + 18
circleOne.style.width = randomSize + "px"
circleOne.style.height = randomSize + "px"
var randomDuration = Math.floor(Math.random() * 14) + 12
circleOne.style.animationDuration = randomDuration + "s"
console.log(randomDuration)
setTimeout(function () {
    circleOne.remove()
}, randomDuration * 1000)
circleOne.addEventListener("mouseover", function () {
    circleOne.style.background = "#f795c3"
    circleOne.style.opacity = 0
    console.log("hover")
})

var circleTwo = document.createElement("div")
circleTwo.className = "circle"
document.body.append(circleTwo)
var randomPercentRightTwo = (Math.random() * 90) + 5
circleTwo.setAttribute("style", `right: ${randomPercentRightTwo}%`)
circleTwo.style.background = `${randomColorTwo}`
var randomSizeTwo = Math.floor(Math.random() * 75) + 18
circleTwo.style.width = randomSizeTwo + "px"
circleTwo.style.height = randomSizeTwo + "px"
var randomDurationTwo = Math.floor(Math.random() * 14) + 12
circleTwo.style.animationDuration = randomDurationTwo + "s"
setTimeout(function () {
    circleTwo.remove()
}, randomDurationTwo * 1000)
circleTwo.addEventListener("mouseover", function () {
    circleTwo.style.background = "#f795c3"
    circleTwo.style.opacity = 0
    console.log("hover")
})

var circleThree = document.createElement("div")
circleThree.className = "circle"
document.body.append(circleThree)
var randomPercentRightThree = (Math.random() * 90) + 5
circleThree.setAttribute("style", `right: ${randomPercentRightThree}%`)
circleThree.style.background = `${randomColorThree}`
var randomSizeThree = Math.floor(Math.random() * 75) + 18
circleThree.style.width = randomSizeThree + "px"
circleThree.style.height = randomSizeThree + "px"
var randomDurationThree = Math.floor(Math.random() * 14) + 12
circleThree.style.animationDuration = randomDurationThree + "s"
setTimeout(function () {
    circleThree.remove()
}, randomDurationThree * 1000)
circleThree.addEventListener("mouseover", function () {
    circleThree.style.background = "#f795c3"
    circleThree.style.opacity = 0
    console.log("hover")
})


var circleFour = document.createElement("div")
circleFour.className = "circle"
document.body.append(circleFour)
var randomPercentRightFour = (Math.random() * 90) + 5
circleFour.setAttribute("style", `right: ${randomPercentRightFour}%`)
circleFour.style.background = `${randomColorFour}`
var randomSizeFour = Math.floor(Math.random() * 75) + 18
circleFour.style.width = randomSizeFour + "px"
circleFour.style.height = randomSizeFour + "px"
var randomDurationFour = Math.floor(Math.random() * 14) + 12
circleFour.style.animationDuration = randomDurationFour + "s"
setTimeout(function () {
    circleFour.remove()
}, randomDurationFour * 1000)
circleFour.addEventListener("mouseover", function () {
    circleFour.style.background = "#f795c3"
    circleFour.style.opacity = 0
    console.log("hover")
})

var circleFive = document.createElement("div")
circleFive.className = "circle"
document.body.append(circleFive)
var randomPercentRightFive = (Math.random() * 90) + 5
circleFive.setAttribute("style", `right: ${randomPercentRightFive}%`)
circleFive.style.background = `${randomColorFive}`
var randomSizeFive = Math.floor(Math.random() * 75) + 18
circleFive.style.width = randomSizeFive + "px"
circleFive.style.height = randomSizeFive + "px"
var randomDurationFive = Math.floor(Math.random() * 14) + 12
circleFive.style.animationDuration = randomDurationFive + "s"
setTimeout(function () {
    circleFive.remove()
}, randomDurationFive * 1000)
circleFive.addEventListener("mouseover", function () {
    circleFive.style.background = "#f795c3"
    circleFive.style.opacity = 0
    console.log("hover")
})


var circleSix = document.createElement("div")
circleSix.className = "circle"
document.body.append(circleSix)
var randomPercentRightSix = (Math.random() * 90) + 5
circleSix.setAttribute("style", `right: ${randomPercentRightSix}%`)
circleSix.style.background = `${randomColorSix}`
var randomSizeSix = Math.floor(Math.random() * 75) + 18
circleSix.style.width = randomSizeSix + "px"
circleSix.style.height = randomSizeSix + "px"
var randomDurationSix = Math.floor(Math.random() * 14) + 12
circleSix.style.animationDuration = randomDurationSix + "s"
setTimeout(function () {
    circleSix.remove()
}, randomDurationSix * 1000)
circleSix.addEventListener("mouseover", function () {
    circleSix.style.background = "#f795c3"
    circleSix.style.opacity = 0
    console.log("hover")
})





setInterval(function () {
    var circleOne = document.createElement("div")
    circleOne.className = "circle"
    document.body.append(circleOne)
    var randomPercentRightTwo = (Math.random() * 90) + 5
    circleOne.setAttribute("style", `right: ${randomPercentRightTwo}%`)
    var randomColor = colorArray[Math.floor(Math.random() * 7)]
    circleOne.style.background = `${randomColorOne}`
    var randomSize = Math.floor(Math.random() * 75) + 18
    circleOne.style.width = randomSize + "px"
    circleOne.style.height = randomSize + "px"
    var randomDuration = Math.floor(Math.random() * 14) + 12
    circleOne.style.animationDuration = randomDuration + "s"
    setTimeout(function () {
        circleOne.remove()
    }, randomDuration * 1000)
    circleOne.addEventListener("mouseover", function () {
        circleOne.style.background = "#f795c3"
        circleOne.style.opacity = 0
    })
}, 2000)



setInterval(function () {
    var circleTwo = document.createElement("div")
    circleTwo.className = "circle"
    document.body.append(circleTwo)
    var randomPercentRightTwo = (Math.random() * 90) + 5
    circleTwo.setAttribute("style", `right: ${randomPercentRightTwo}%`)
    var randomColor = colorArray[Math.floor(Math.random() * 7)]
    circleTwo.style.background = `${randomColor}`
    var randomSizeTwo = Math.floor(Math.random() * 75) + 18
    circleTwo.style.width = randomSizeTwo + "px"
    circleTwo.style.height = randomSizeTwo + "px"
    var randomDurationTwo = Math.floor(Math.random() * 14) + 12
    circleTwo.style.animationDuration = randomDurationTwo + "s"
    setTimeout(function () {
        circleTwo.remove()
    }, randomDurationTwo * 1000)
    circleTwo.addEventListener("mouseover", function () {
        circleTwo.style.background = "#f795c3"
        circleTwo.style.opacity = 0
    })
}, 2000)

setInterval(function () {
    var circleTwo = document.createElement("div")
    circleTwo.className = "circle"
    document.body.append(circleTwo)
    var randomPercentRightTwo = (Math.random() * 90) + 5
    circleTwo.setAttribute("style", `right: ${randomPercentRightTwo}%`)
    var randomColor = colorArray[Math.floor(Math.random() * 7)]
    circleTwo.style.background = `${randomColor}`
    var randomSizeTwo = Math.floor(Math.random() * 75) + 18
    circleTwo.style.width = randomSizeTwo + "px"
    circleTwo.style.height = randomSizeTwo + "px"
    var randomDurationTwo = Math.floor(Math.random() * 14) + 12
    circleTwo.style.animationDuration = randomDurationTwo + "s"
    setTimeout(function () {
        circleTwo.remove()
    }, randomDurationTwo * 1000)
    circleTwo.addEventListener("mouseover", function () {
        circleTwo.style.background = "#f795c3"
        circleTwo.style.opacity = 0
    })
}, 2000)

setInterval(function () {
    var circleTwo = document.createElement("div")
    circleTwo.className = "circle"
    document.body.append(circleTwo)
    var randomPercentRightTwo = (Math.random() * 90) + 5
    circleTwo.setAttribute("style", `right: ${randomPercentRightTwo}%`)
    var randomColor = colorArray[Math.floor(Math.random() * 7)]
    circleTwo.style.background = `${randomColor}`
    var randomSizeTwo = Math.floor(Math.random() * 75) + 18
    circleTwo.style.width = randomSizeTwo + "px"
    circleTwo.style.height = randomSizeTwo + "px"
    var randomDurationTwo = Math.floor(Math.random() * 14) + 12
    circleTwo.style.animationDuration = randomDurationTwo + "s"
    setTimeout(function () {
        circleTwo.remove()
    }, randomDurationTwo * 1000)
    circleTwo.addEventListener("mouseover", function () {
        circleTwo.style.background = "#f795c3"
        circleTwo.style.opacity = 0
    })
}, 2000)




