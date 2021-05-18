// !(function (document) {

//     var leftArrow = document.getElementById("leftArrow")
//     var rightArrow = document.getElementById("rightArrow")
//     var photos = document.getElementsByClassName("photo")
//     var photoLength = photos.length
//     var currentSlide = 0
//     console.log("number of photos: " + photoLength)

//     // I don't think you need the initial, next, and prev unless you want to do animation stuff and transitions
//     // var initial = photos[currentSlide]
//     // var next = photos[1]
//     // var prev = photos[photoLength - 1]


//     // function initializeCarousel() {
//     //     // here, you will set the initial side, the previous slide, and the next slide by using the currentSlide variable, the photoLength variable, and maybe others
//     //     var initial = photos[currentSlide]
//     //     var next = photos[1]
//     //     var prev = photos[photoLength - 1]
//     // }

//     rightArrow.onclick = function goRight() {
//         // below is saying IF currentSlide is between 0-3, increment by 1. Else, set currentSlide equal to zero
//         if (currentSlide < photoLength - 1) {
//             photos[currentSlide].classList.remove("active")
//             currentSlide++
//             console.log(currentSlide)
//             // next = photos[currentSlide + 1]
//             choosePhoto()
//         }
//         else {
//             photos[currentSlide].classList.remove("active")
//             currentSlide = 0
//             console.log(currentSlide)
//             choosePhoto()
//         }

//     }

//     leftArrow.onclick = function goLeft() {
//         if (currentSlide < 1) {
//             photos[currentSlide].classList.remove("active")
//             currentSlide = 3
//             console.log(currentSlide)
//             choosePhoto()
//         }
//         else {
//             photos[currentSlide].classList.remove("active")
//             currentSlide--
//             console.log(currentSlide)
//             choosePhoto()
//         }


//     }

//     function choosePhoto() {
//         photos[currentSlide].classList.add("active")
//     }

//     choosePhoto()






// }(document));