document.addEventListener("DOMContentLoaded", function (event) {

    var items = document.querySelectorAll('.container');
    if (localStorage.getItem(`vegetables-${0}`)) {
        items.forEach((el, index) => {
            if (localStorage.getItem(`vegetables-${index}`)) {
                var a = localStorage.getItem(`vegetables-${index}`);
                var b = JSON.parse(a);
            }
            el.querySelector('img').dataset.type = b['vegetable'];
            el.querySelector('img').src = b['image'];
        })
    } else {
        items.forEach((el, index) => {
            var image = el.querySelector('img');
            myTimeout(image, el, index);
            if (image.src !== '') {
                image.src = '';
            }
        });
    }

    items.forEach((el, index) => {
        el.addEventListener('click', function () {
            var image = el.querySelector('img');
            myTimeout(image, el, index)
            if (image.src !== '') {
                image.src = '';
            }
            var url = 'ajax.php';
            var data = new FormData();
            data.append('vegetable', image.dataset.type);

            (async () => {
                var response = await fetch(url, {
                    method: 'POST',
                    body  : data
                });

                var result = await response.text();
                var res = JSON.parse(result);
                if (res === null) {
                    console.log('error');
                } else {
                    var all = 0;
                    var stats = document.querySelectorAll('.veg-name')
                    for (var key in res) {
                        all += +res[key];
                        stats.forEach((el) => {
                            if (el.id === key) {
                                document.getElementById(el.id).innerHTML = res[key];
                            }
                        })
                    }
                    document.getElementById('all').innerHTML = all;
                }
            })();
        })
    })

});

function myTimeout(image, el, index)
{
    setTimeout(function () {
        if (!image.src) {
            return;
        }
        var key = Math.floor(Math.random() * vegetables.length);
        image.src = vegetables[key].img;
        image.dataset.type = vegetables[key].type;
        var vegs = {
            'image'    : image.src,
            'vegetable': image.dataset.type,
        }
        localStorage.setItem(`vegetables-${index}`, JSON.stringify(vegs));
    }, 5000);
}

var vegetables = [
    {type: "potato", img: "img/potato.png"},
    {type: "tomato", img: "img/tomato.jpg"},
    {type: "carrot", img: "img/carrot.jpg"},
    {type: "pepper", img: "img/pepper.jpg"},
    {type: "onion", img: "img/onion.jpg"}
];




