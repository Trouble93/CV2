document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        var blockID = link.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block   : 'start'
        })
    })
})

var list = document.querySelectorAll('.main-menu .menu-port');

list.forEach(function (item) {

    item.onclick = function () {
        var dataID = item.dataset.id;
        document.querySelectorAll('.port-items').forEach(function (image) {
            var classes = image.classList;
            classes.contains('hidden') && classes.contains(dataID) ? classes.add('hidden') : classes.remove('hidden');
            classes.contains(dataID) && !classes.contains('hidden') ? classes.add('hidden') : classes.remove('hidden');
        });
    }
})
function maxWidth()
{
    if ($(window).width()=== 920) {
        console.log('123');
    }
}

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items : 1,
        loop  : true,
        center: true,
        nav: true,
        dots:false,
        navText : ["<img src=\"img/Фигура_11_копия.svg\" alt=\"\">","<img src=\"img/Фигура_11.svg\" alt=\"\">"]

    })
    ;


});

// var list = document.querySelector(".main-menu"),
//     lists = document.querySelectorAll(".main-menu li"),
//     items = document.querySelectorAll(".port-items")
//
// function filter()
// {
//     list.addEventListener('click', event => {
//         var targetId = event.target.dataset.id
//         switch (targetId) {
//             case 'all':
//                 getItems(targetId)
//                 break
//             case 'entertainment':
//                 getItems(targetId)
//                 break
//             case 'sport':
//                 getItems(targetId)
//                 break
//             case 'building':
//                 getItems(targetId)
//                 break
//             case 'business':
//                 getItems(targetId)
//                 break
//         }
//     })
// }
//
//
// function getItems(className)
// {
//     var allBtn = document.querySelector('.main-menu li[id=all]')
//     if (className === 'all') {
//         items.forEach(e => {
//             if (allBtn.classList.contains('changed')) {
//                 e.classList.add('d-none')
//
//             }
//                else {
//                 if (e.classList.contains('d-none')) {
//                     e.classList.remove('d-none')
//                 } else {
//                     e.classList.add('d-none')
//                 }
//                e.classList.add('d-none')}
//         })
//     } else {
//         allBtn.classList.add('changed');
//
//         items.forEach(item => {
//
//             if (item.classList.contains(className)) {
//                 if (item.classList.contains('d-none')) {
//                     item.classList.remove('d-none')
//                 } else {
//                     item.classList.add('d-none')
//                 }
//             } else {
//                 item.classList.remove('d-none')
//             }
//         })
//     }
//
// }
//
//
// filter();





