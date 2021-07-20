
var modal = document.getElementById("modal1")
var modal2 = document.getElementById("modal2")
var modal3 = document.getElementById("modal3")
var modal4 = document.getElementById("modal4")
var modal5 = document.getElementById("modal5")
var modalClose = document.getElementById("modalWindow")
var close = document.getElementById("xIcon")

$(document).ready(function () {
    var idArea = document.getElementById("descriptionOfMe")
    var aboutTitle = document.getElementById("aboutMe")
    var skillsTitle = document.getElementById("programmingSkills")
    var skillDescriptionOne = document.getElementsByClassName("skillDescription")[0]
    var skillDescriptionTwo = document.getElementsByClassName("skillDescription")[1]
    var skillDescriptionThree = document.getElementsByClassName("skillDescription")[2]
    var skillDescriptionFour = document.getElementsByClassName("skillDescription")[3]
    var skillDescriptionFive = document.getElementsByClassName("skillDescription")[4]
    var achievementsSection = document.getElementById("achievementsSection")

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        // console.log(idArea.scrollTop)
        // console.log($(window).innerHeight())
        var note = idArea.getBoundingClientRect().top
        var aboutNote = aboutTitle.getBoundingClientRect().top
        var skillsTitleNote = skillsTitle.getBoundingClientRect().top
        var skillIcons = skillDescriptionOne.getBoundingClientRect().top
        var achievementsTop = achievementsSection.getBoundingClientRect().top
        // console.log("22: " + note)
        // console.log("height: " + window.innerHeight)
        // console.log(aboutNote)
        if (note < window.innerHeight) {
            idArea.classList.add("activateToTop")
        }
        if (aboutNote < window.innerHeight) {
            aboutTitle.classList.add("aboutMeMove")
        }
        if (skillsTitleNote < window.innerHeight) {
            skillsTitle.classList.add("activateToTop")
        }
        if (skillIcons < window.innerHeight) {
            skillDescriptionOne.classList.add("sDOne")
            skillDescriptionTwo.classList.add("sDTwo")
            skillDescriptionThree.classList.add("sDThree")
            skillDescriptionFour.classList.add("sDFour")
            skillDescriptionFive.classList.add("sDFive")
        }
        if (achievementsTop < window.innerHeight) {
            achievementsSection.classList.add("activateToTop")
        }
        if ($(window).scrollTop() > $(window).innerHeight()) {
            $('#navBar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() < $(window).innerHeight()) {
            $('#navBar').removeClass('navbar-fixed');
        }
    });
});

function showModal() {
    document.getElementById("modal1").style.display = "block"
    $("#content").addClass('bodyBlur');
}

function showModal2() {
    document.getElementById("modal2").style.display = "block"
    $("#content").addClass('bodyBlur');
}

function showModal3() {
    document.getElementById("modal3").style.display = "block"
    $("#content").addClass('bodyBlur');
}

function showModal4() {
    document.getElementById("modal4").style.display = "block"
    $("#content").addClass('bodyBlur');
}

function showModal5() {
    document.getElementById("modal5").style.display = "block"
    $("#content").addClass('bodyBlur');
}



window.addEventListener("click", function close1(event) {
    if (event.target == modal || event.target == close) {
        modal.style.display = "none"
        $("#content").removeClass('bodyBlur');
    }
})


window.addEventListener("click", function close2(event) {
    if (event.target == modal2 || event.target == document.getElementById("xIcon2")) {
        modal2.style.display = "none"
        $("#content").removeClass('bodyBlur');
    }
})

window.addEventListener("click", function close3(event) {
    if (event.target == modal3 || event.target == document.getElementById("xIcon3")) {
        modal3.style.display = "none"
        $("#content").removeClass('bodyBlur');
    }
})

window.addEventListener("click", function close4(event) {
    if (event.target == modal4 || event.target == document.getElementById("xIcon4")) {
        modal4.style.display = "none"
        $("#content").removeClass('bodyBlur');
    }
})


window.addEventListener("click", function close5(event) {
    if (event.target == modal5 || event.target == document.getElementById("xIcon5")) {
        modal5.style.display = "none"
        $("#content").removeClass('bodyBlur');
    }
})





// MODAL 1

!(function (document) {

    var leftArrow = document.getElementById("leftArrow")
    var rightArrow = document.getElementById("rightArrow")
    var photos = document.getElementsByClassName("photo")
    var photoLength = photos.length
    var currentSlide = 0
    console.log("number of photos: " + photoLength)


    rightArrow.onclick = function goRight() {
        if (currentSlide < photoLength - 1) {
            photos[currentSlide].classList.remove("active")
            currentSlide++
            console.log(currentSlide)
            choosePhoto()
        }
        else {
            photos[currentSlide].classList.remove("active")
            currentSlide = 0
            console.log(currentSlide)
            choosePhoto()
        }

    }

    leftArrow.onclick = function goLeft() {
        if (currentSlide < 1) {
            photos[currentSlide].classList.remove("active")
            currentSlide = photoLength - 1
            console.log(currentSlide)
            choosePhoto()
        }
        else {
            photos[currentSlide].classList.remove("active")
            currentSlide--
            console.log(currentSlide)
            choosePhoto()
        }


    }

    function choosePhoto() {
        photos[currentSlide].classList.add("active")
    }

    choosePhoto()






    // MODAL 2

    var leftArrow2 = document.getElementById("leftArrow2")
    var rightArrow2 = document.getElementById("rightArrow2")
    var photos2 = document.getElementsByClassName("photo2")
    var photoLength2 = photos2.length
    var currentSlide2 = 0
    console.log("number of photos: " + photoLength2)


    rightArrow2.onclick = function goRight() {
        if (currentSlide2 < photoLength2 - 1) {
            photos2[currentSlide2].classList.remove("active")
            currentSlide2++
            console.log(currentSlide2)
            choosePhoto2()
        }
        else {
            photos2[currentSlide2].classList.remove("active")
            currentSlide2 = 0
            console.log(currentSlide2)
            choosePhoto2()
        }

    }

    leftArrow2.onclick = function goLeft() {
        if (currentSlide2 < 1) {
            photos2[currentSlide2].classList.remove("active")
            currentSlide2 = photoLength2 - 1
            console.log(currentSlide2)
            choosePhoto2()
        }
        else {
            photos2[currentSlide2].classList.remove("active")
            currentSlide2--
            console.log(currentSlide2)
            choosePhoto2()
        }


    }

    function choosePhoto2() {
        photos2[currentSlide2].classList.add("active")
    }

    choosePhoto2()





    // MODAL 3

    var leftArrow3 = document.getElementById("leftArrow3")
    var rightArrow3 = document.getElementById("rightArrow3")
    var photos3 = document.getElementsByClassName("photo3")
    var photoLength3 = photos3.length
    var currentSlide3 = 0
    console.log("number of photos: " + photoLength3)


    rightArrow3.onclick = function goRight() {
        if (currentSlide3 < photoLength3 - 1) {
            photos3[currentSlide3].classList.remove("active")
            currentSlide3++
            console.log(currentSlide3)
            choosePhoto3()
        }
        else {
            photos3[currentSlide3].classList.remove("active")
            currentSlide3 = 0
            console.log(currentSlide3)
            choosePhoto3()
        }

    }

    leftArrow3.onclick = function goLeft() {
        if (currentSlide3 < 1) {
            photos3[currentSlide3].classList.remove("active")
            currentSlide3 = photoLength3 - 1
            console.log(currentSlide3)
            choosePhoto3()
        }
        else {
            photos3[currentSlide3].classList.remove("active")
            currentSlide3--
            console.log(currentSlide3)
            choosePhoto3()
        }


    }

    function choosePhoto3() {
        photos3[currentSlide3].classList.add("active")
    }

    choosePhoto3()





    // Modal 4

    var leftArrow4 = document.getElementById("leftArrow4")
    var rightArrow4 = document.getElementById("rightArrow4")
    var photos4 = document.getElementsByClassName("photo4")
    var photoLength4 = photos4.length
    var currentSlide4 = 0
    console.log("number of photos: " + photoLength4)


    rightArrow4.onclick = function goRight() {
        if (currentSlide4 < photoLength4 - 1) {
            photos4[currentSlide4].classList.remove("active")
            currentSlide4++
            console.log(currentSlide4)
            choosePhoto4()
        }
        else {
            photos4[currentSlide4].classList.remove("active")
            currentSlide4 = 0
            console.log(currentSlide4)
            choosePhoto4()
        }

    }

    leftArrow4.onclick = function goLeft() {
        if (currentSlide4 < 1) {
            photos4[currentSlide4].classList.remove("active")
            currentSlide4 = photoLength4 - 1
            console.log(currentSlide4)
            choosePhoto4()
        }
        else {
            photos4[currentSlide4].classList.remove("active")
            currentSlide4--
            console.log(currentSlide4)
            choosePhoto4()
        }


    }

    function choosePhoto4() {
        photos4[currentSlide4].classList.add("active")
    }

    choosePhoto4()





    // Modal 5

    var leftArrow5 = document.getElementById("leftArrow5")
    var rightArrow5 = document.getElementById("rightArrow5")
    var photos5 = document.getElementsByClassName("photo5")
    var photoLength5 = photos5.length
    var currentSlide5 = 0
    console.log("number of photos: " + photoLength5)


    rightArrow5.onclick = function goRight() {
        if (currentSlide5 < photoLength5 - 1) {
            photos5[currentSlide5].classList.remove("active")
            currentSlide5++
            console.log(currentSlide5)
            choosePhoto5()
        }
        else {
            photos5[currentSlide5].classList.remove("active")
            currentSlide5 = 0
            console.log(currentSlide5)
            choosePhoto5()
        }

    }

    leftArrow5.onclick = function goLeft() {
        if (currentSlide5 < 1) {
            photos5[currentSlide5].classList.remove("active")
            currentSlide5 = photoLength5 - 1
            console.log(currentSlide5)
            choosePhoto5()
        }
        else {
            photos5[currentSlide5].classList.remove("active")
            currentSlide5--
            console.log(currentSlide5)
            choosePhoto5()
        }


    }

    function choosePhoto5() {
        photos5[currentSlide5].classList.add("active")
    }

    choosePhoto5()





}(document));