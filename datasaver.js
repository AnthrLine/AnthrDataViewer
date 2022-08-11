let Xvalue;
let datatosaveX;
let datatosaveY;

const db = window.localStorage

function Xinputf() {
    Xvalue = document.getElementsByClassName('DataX')[0].value;
    datatosaveX = Xvalue.split(',');

    db.setItem('xValues', datatosaveX);
    addData();
}

function Yinputf() {
    Yvalue = document.getElementsByClassName('DataY')[0].value;
    datatosaveY = Yvalue.split(',');

    db.setItem('yValues', datatosaveY);
    addData();
}