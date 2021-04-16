// const hello = document.getElementById("ex")
// hello.onclick = function () {
//     myFunction()
// }

// function myFunction() {
//     hello.style.color = "red"
// }

var modal = document.getElementById("modal1")
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


window.onclick = function (event) {
    if (event.target == modal || event.target == close) {
        modal.style.display = "none"
        $("#content").removeClass('bodyBlur');
    }
}


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

// !(function (d) {
//     var itemClassName = "carousel__photo";
//     items = d.getElementsByClassName(itemClassName),
//         totalItems = items.length,
//         slide = 0,
//         moving = true;
//     function setInitialClasses() {
//         // Targets the previous, current, and next items
//         // This assumes there are at least three items.
//         items[totalItems - 1].classList.add("prev");
//         items[0].classList.add("active");
//         items[1].classList.add("next");
//     }
//     // Set event listeners
//     function setEventListeners() {
//         var next = d.getElementsByClassName('carousel__button--next')[0],
//             prev = d.getElementsByClassName('carousel__button--prev')[0];
//         next.addEventListener('click', moveNext);
//         prev.addEventListener('click', movePrev);
//     }
// }(document));