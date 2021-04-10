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







// let count = 0
// $('.card').click(function () {
//     //if you hard code, then use console
//     //.log to determine when you want the 
//     //nav bar to stick. 
//     count++
//     $('.card').addClass('cardModal')
//     $('.card').removeClass('card')
//     console.log(count)


//     // if ($(window).scrollTop() > $(window).innerHeight()) {
//     //     $('#navBar').addClass('navbar-fixed');
//     // }
//     // if ($(window).scrollTop() < $(window).innerHeight()) {
//     //     $('#navBar').removeClass('navbar-fixed');
//     // }
// });

// $('.cardModal').click(function () {
//     //if you hard code, then use console
//     //.log to determine when you want the 
//     //nav bar to stick. 
//     count--
//     $('.cardModal').addClass('card')
//     $('.cardModal').removeClass('cardModal')
//     console.log(count)


//     // if ($(window).scrollTop() > $(window).innerHeight()) {
//     //     $('#navBar').addClass('navbar-fixed');
//     // }
//     // if ($(window).scrollTop() < $(window).innerHeight()) {
//     //     $('#navBar').removeClass('navbar-fixed');
//     // }
// });



// $(document).ready(function () {

//     $('.card').click(function () {
//         if ($('.card').clicked == true) {
//             $('.card').addClass('cardModal')
//         }


//     });
// })