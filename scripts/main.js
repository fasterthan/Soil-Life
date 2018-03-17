//  changeText script


// Pink:    #fa647a
// Yellow:  #fac718
// Green:   #36ae99
// Blue:    #195ba7
// Brown:   #544d50
// Orange:  #fa6a33


// Nested Array [icon,text,color]
var changeArray =[ ["6Fs-Food No Text.svg","eat food","#ee6a7c"],
                   ["6Fs-Filter No Text.svg","breathe air","#195ba7"],
                   ["6Fs-Filter No Text.svg","drink water","#195ba7"],
                   ["6Fs-FiberFuel No Text.svg","wear clothes","#fac718"],
                   ["6Fs-Foundation No Text.svg","live in a shelter","#544d50"],
                   ["6Fs-Farmaceuticals No Text.svg","use medicine","#fa6a33"],
                   ["6Fs-Fun No Text.svg","enjoy the outdoors","#36ae99"]
                 ];

var counter = 0;
var iconElem = document.getElementById("sixFsIcon");
var textElem = document.getElementById("changeText");
var buttonElem = document.getElementById("sixFsButton");
setInterval(change,2000);


function change() {
  iconElem.src = changeArray[counter][0];
  iconElem.style.height = "200px";
  iconElem.style.height = "200px";
  textElem.innerHTML = changeArray[counter][1];
  textElem.style.color = changeArray[counter][2];
  buttonElem.style.color = "white";
  buttonElem.style.background = changeArray[counter][2];


  counter++;
  if(counter >= changeArray.length){
    counter = 0;
  }
}

change();



/* //////////////////////////////////////////// */
/* /////////// Navbar on Scroll /////////////// */
/* //////////////////////////////////////////// */
