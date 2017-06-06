//  changeText script


// Pink:    #fa647a
// Yellow:  #fac718
// Green:   #36ae99
// Blue:    #195ba7
// Brown:   #544d50
// Orange:  #fa6a33


// Nested Array [icon,text,color]
var changeArray =[ ["6Fs-Food No Text.svg","Eat Food","#ee6a7c"],
                   ["6Fs-Filter No Text.svg","Breathe Air","#195ba7"],
                   ["6Fs-Filter No Text.svg","Drink Water","#195ba7"],
                   ["6Fs-FiberFuel No Text.svg","Wear Clothes","#fac718"],
                   ["6Fs-Foundation No Text.svg","Live in a Shelter","#544d50"],
                   ["6Fs-Farmaceuticals No Text.svg","Use Medicine","#fa6a33"],
                   ["6Fs-Fun No Text.svg","Enjoy the Outdoors","#36ae99"]
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
