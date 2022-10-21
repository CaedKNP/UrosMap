let ele = document.getElementById("container");
let img = ele.getElementsByTagName('img');
let area;
let pos = { x1: 0, x2: 0, y1: 0, y2: 0 };
let length = 0;

let factor = 1.2;

var dx = 0;
var dy = 0;
var maxY = 900;
var maxX = maxY * 1.778;

document.addEventListener("DOMContentLoaded", function(e) {
    area = ele.getElementsByTagName('area');
    for (var i = 0; i < area.length; i++) {
        area[i].addEventListener('click', function(e){e.preventDefault()});
    }
});

const mouseDownHandler = function (e) {
    if(pos.x1 == 0)
    {
            pos.x1 = e.clientX + ele.scrollLeft;
            pos.y1 = e.clientY + ele.scrollTop;
    }
    else{
        pos.x2 = e.clientX + ele.scrollLeft;
        pos.y2 = e.clientY + ele.scrollTop;


        let a = pos.x1 - pos.x2;
        let b = pos.y1 - pos.y2;
        length = Math.sqrt( a*a + b*b )
        length = Math.round(length * 20);
        window.alert("Odległość: " + length + "km\n" + "Dni drogi konno: " + Math.round(length/720));
        pos = { x1: 0, x2: 0, y1: 0, y2: 0 };
    }
};

const mouseWheel = function(e){
    e.preventDefault();

    if(e.deltaY < 0)
        factor = 1.2;
    else
        factor = 0.8;

    img[0].height *= factor;
    img[0].width = img[0].height * 1.778;

    if(img[0].width <= maxX)
        img[0].width = maxX;
    if(img[0].height <= maxY)
        img[0].height = maxY;    

    dy = (e.clientY + ele.scrollTop) * (factor - 1);
    dx = (e.clientX + ele.scrollLeft) * (factor - 1);
    ele.scrollTop += dy;
    ele.scrollLeft += dx;
};

ele.addEventListener('mousedown', mouseDownHandler);
ele.addEventListener('wheel', mouseWheel);