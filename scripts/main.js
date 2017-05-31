//  changeText script

// Blue:   #1D4A98
// Green:  #32A894
// Yellow: #FFA81A
// Pink:   #DF6573
// Orange: #FE562B
// Brown:  #443D3F


// Nested Array [icon,text,color]
var changeArray =[ ["6Fs-Filter No Text.svg","Breathe Air","#1D4A98"],
                   ["6Fs-Filter No Text.svg","Drink Water","#1D4A98"],
                   ["6Fs-Food No Text.svg","Eat Food","#DF6573"],
                   ["6Fs-Fiber+Fuel No Text.svg","Wear Clothes","#FFA81A"],
                   ["6Fs-Foundation No Text.svg","Live in a Shelter","#443D3F"],
                   ["6Fs-Farmaceuticals No Text.svg","Use Medicine","#FE562B"],
                   ["6Fs-Fun No Text.svg","Enjoy the Outdoors","#32A894"]
                 ];

var counter = 0;
var iconElem = document.getElementById("sixFsIcon");
var textElem = document.getElementById("changeText");
var buttonElem = document.getElementById("sixFsButton");
setInterval(change,2000);


function change() {
  iconElem.src = changeArray[counter][0];
  textElem.innerHTML = changeArray[counter][1];
  textElem.style.color = changeArray[counter][2];
  buttonElem.style.color = changeArray[counter][2];
  buttonElem.style.borderColor = changeArray[counter][2];

  counter++;
  if(counter >= changeArray.length){
    counter = 0;
  }
}

change();
