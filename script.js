// const hello = document.getElementById("ex")
// hello.onclick = function () {
//     myFunction()
// }

// function myFunction() {
//     hello.style.color = "red"
// }

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