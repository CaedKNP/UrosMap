let ele = document.getElementById("container");
let area;
let pos = { x1: 0, x2: 0, y1: 0, y2: 0 };
let length = 0;

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
        //window.alert("Odległość: " + length + "km\n" + "Dni drogi konno: " + Math.round(length/720));
        pos = { x1: 0, x2: 0, y1: 0, y2: 0 };
    }
};

ele.addEventListener('mousedown', mouseDownHandler);