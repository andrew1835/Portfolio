
var modal = document.getElementById("modal1")
var modal2 = document.getElementById("modal2")
var modalClose = document.getElementById("modalWindow")
var close = document.getElementsByClassName("xIcon")

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

function showModal1() {
    document.getElementById("modal2").style.display = "block"
    $("#content").addClass('bodyBlur');
}



window.onclick = function (event) {
    if (event.target == modal || event.target == close) {
        modal.style.display = "none"
        $("#content").removeClass('bodyBlur');
    }
}

// window.onclick = function (event) {
//     if (event.target == modal2 || event.target == close) {
//         modal2.style.display = "none"
//         $("#content").removeClass('bodyBlur');
//     }
// }






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






}(document));