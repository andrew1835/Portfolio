
var modal = document.getElementById("modal1")
var modal2 = document.getElementById("modal2")
var modal3 = document.getElementById("modal3")
var modalClose = document.getElementById("modalWindow")
var close = document.getElementById("xIcon")

$(document).ready(function () {

    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).innerHeight())
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





}(document));