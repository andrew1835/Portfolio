// Handling the way elements come into view when you scroll past them 

var homeButton = document.getElementById("homeButton")
var aboutButton = document.getElementById("aboutButton")
var portfolioButton = document.getElementById("portfolioButton")
var contactButton = document.getElementById("contactButton")

$(document).ready(function () {
    var idArea = document.getElementById("descriptionOfMe")
    var aboutTitle = document.getElementById("aboutMe")
    var skillsTitle = document.getElementById("programmingSkills")
    var skillDescription = document.querySelectorAll(".skillDescription")
    var achievementsSection = document.getElementById("achievementsSection")
    var portfolio = document.getElementById("portfolio")
    var topCardContainer = document.getElementsByClassName("cardContainer")[0]
    var cardOne = document.getElementsByClassName("card")[0]
    var cardTwo = document.getElementsByClassName("card")[1]
    var cardThree = document.getElementsByClassName("card")[2]
    var cardFour = document.getElementsByClassName("cardBottom")[0]
    var cardFive = document.getElementsByClassName("cardBottom")[1]
    var bottomCardContainer = document.getElementsByClassName("cardContainer2")[0]
    var contact = document.getElementById("contact")

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        // console.log(idArea.scrollTop)
        // console.log($(window).innerHeight())
        var note = idArea.getBoundingClientRect().top
        var aboutNote = aboutTitle.getBoundingClientRect().top
        var skillsTitleNote = skillsTitle.getBoundingClientRect().top
        var skillIcons = skillDescription[0].getBoundingClientRect().top
        var achievementsTop = achievementsSection.getBoundingClientRect().top
        var portfolioTop = portfolio.getBoundingClientRect().top
        var topCCTop = topCardContainer.getBoundingClientRect().top
        var bottomCCTop = bottomCardContainer.getBoundingClientRect().top
        var contactTop = contact.getBoundingClientRect().top


        // handling the highlighting of the buttons in the navbar
        if (note < window.innerHeight) {
            idArea.classList.add("activateToTop")
        }
        if (aboutNote < window.innerHeight / 2 && !(portfolioTop < window.innerHeight / 2)) {
            aboutButton.classList.add("navButtonSection")
            portfolioButton.classList.remove("navButtonSection")
        }
        if (portfolioTop < window.innerHeight / 2 && !(contactTop < window.innerHeight / 2)) {
            portfolioButton.classList.add("navButtonSection")
            aboutButton.classList.remove("navButtonSection")
            contactButton.classList.remove("navButtonSection")
        }
        if (contactTop < window.innerHeight / 2) {
            contactButton.classList.add("navButtonSection")
            portfolioButton.classList.remove("navButtonSection")
        }



        //  handling the way things float into the screen when you scroll to them
        if (aboutNote < window.innerHeight) {
            aboutTitle.classList.add("aboutMeMove")
        }
        if (skillsTitleNote < window.innerHeight) {
            skillsTitle.classList.add("activateToTop")
        }
        if (skillIcons < window.innerHeight) {
            for (let i = 0; i < skillDescription.length; i++) {
                skillDescription[i].classList.add(`sD${i + 1}`)
            }
        }
        if (achievementsTop < window.innerHeight) {
            achievementsSection.classList.add("activateToTop")
        }
        if (portfolioTop < window.innerHeight) {
            portfolio.classList.add("activateToTop")
        }
        if (topCCTop < window.innerHeight) {
            cardOne.classList.add("cardActivate")
            setTimeout(function () {
                cardTwo.classList.add("cardActivate")
            }, 500)
            setTimeout(function () {
                cardThree.classList.add("cardActivate")
            }, 1000)
        }
        if (bottomCCTop < window.innerHeight) {
            cardFour.classList.add("cardActivate")
            setTimeout(function () {
                cardFive.classList.add("cardActivate")
            }, 500)
        }
        if ($(window).scrollTop() > $(window).innerHeight()) {
            $('#navBar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < $(window).innerHeight()) {
            $('#navBar').removeClass('navbar-fixed');
        }
    });
});





// Modals and Carousels 

var currentSlide = 0
var photos

function showModal(event) {
    console.log(event.target.dataset.name)
    document.getElementById(`modal${event.target.dataset.name}`).style.display = "block"
    $("#content").addClass('bodyBlur')
    photos = document.getElementsByClassName(`photo${event.target.dataset.name}`)
    photos[currentSlide].classList.add("active")
}

window.addEventListener("click", function (event) {


    if (event.target.id == `leftArrow${event.target.dataset.arrow}`) {
        console.log('hehe')
        var photoLength = photos.length
        if (currentSlide < 1) {
            photos[currentSlide].classList.remove("active")
            currentSlide = photoLength - 1
            console.log(currentSlide)
            photos[currentSlide].classList.add("active")
        }
        else {
            photos[currentSlide].classList.remove("active")
            currentSlide--
            console.log(currentSlide)
            photos[currentSlide].classList.add("active")
        }

    }
    if (event.target.id == `rightArrow${event.target.dataset.arrow}`) {
        var photoLength = photos.length
        if (currentSlide < photoLength - 1) {
            photos[currentSlide].classList.remove("active")
            currentSlide++
            console.log(currentSlide)
            photos[currentSlide].classList.add("active")
        }
        else {
            photos[currentSlide].classList.remove("active")
            currentSlide = 0
            console.log(currentSlide)
            photos[currentSlide].classList.add("active")
        }

    }

    if (event.target.classList.contains("xIcon") || event.target.classList.contains("modal")) {
        document.getElementById(`modal${event.target.dataset.modal}`).style.display = "none"
        $("#content").removeClass('bodyBlur')
        photos[currentSlide].classList.remove("active")
        currentSlide = 0
    }

})






