

// FUNCTIONS //


// This changes an element's color style to a chosen color and then back to the original
let hoverColor = (element, color) => {
    //store original color
    const elementColor = element.style.color;
    //mouseover
    element.addEventListener("mouseover", function(elementEdit){
    element.style.color = color;
    });
    //mouseout
    element.addEventListener("mouseout", function(elementEdit) {
    element.style.color = elementColor;    
    });
}


// NAVIGATION //

// Select all navigation links.
let navLinks = document.querySelectorAll("nav > a");

//nav code
navLinks.forEach(link => hoverColor(link, "orange"));

// MIDDLE SECTION //




// pop words on top of the let's go image on click
//didn't refactor any more due to time.


//declare new element for text
let letsGoPopupDiv = document.createElement("div");
//give new div appropriate class
letsGoPopupDiv.classList.add("lets-go-popup");
//create text div
let letsGoPopupText = document.createTextNode("press any key to remove");
//give text styles
letsGoPopupDiv.style.fontSize = "3.5rem";
letsGoPopupDiv.style.color = "white";
letsGoPopupDiv.style.position = "absolute";
letsGoPopupDiv.style.top = "50%";
letsGoPopupDiv.style.bottom = "50%";
letsGoPopupDiv.style.display = "none"
// letsGoPopupDiv.style.transform = "translate(-50%, -50%)";
//declare the image div
let contentSectionImage = document.querySelector(".content-section .img-content");
//give position to image div
contentSectionImage.style.postition = "relative";
contentSectionImage.style.textAlign = "center";
//add the text to new div
letsGoPopupDiv.appendChild(letsGoPopupText);
//add new div to image div
contentSectionImage.appendChild(letsGoPopupDiv);



let clickAddWords = (element, textElement) => {
    element.addEventListener("click", function(){
        if (textElement.style.display === "none"){
            textElement.style.display = "block";
        }
    })
}

clickAddWords(contentSectionImage, letsGoPopupDiv);

//Now press "r" to remove text.
let keyPressFunction = () => {
    letsGoPopupDiv.style.display = "none";
}
document.addEventListener("keypress", keyPressFunction);


//rotate bottom image 25 degrees when click, then rotate back when click ends


let rotate25 = (element) => {
    element.addEventListener('mousedown', function(){
        element.style.transform = "rotate(25deg)";
    });
}
let rotate25Back = (element) => {
    element.addEventListener('mouseup', function() {
        element.style.transform = "rotate(0deg)";
    });
}
let rotate25img = document.querySelector(".content-destination > img");
rotate25(rotate25img);
rotate25Back(rotate25img);




//flip adventure awaits upsidedown on doubleclick

let rotate180 = (element) => {
    element.addEventListener('dblclick', function(){
        if (element.style.transform !== "rotate(180deg)") {
            element.style.transform = "rotate(180deg)";
        } else {
            element.style.transform = "rotate(0deg)";
        }
        
    })
}
let rotate180img = document.querySelector(".inverse-content img");
rotate180(rotate180img);

//change heading color to pink when non right click

let changeHeaderPink = (element) => {
   
     element.addEventListener('auxclick', function() {
         element.style.color = "pink";
    });

}

let headerText = document.querySelector(".intro p");
let headerTextColor = headerText.style.color;
changeHeaderPink(headerText);


//if text is copied, prompt for new text then place new text
let welcomeText = document.querySelector(".intro h2");
welcomeText.addEventListener("copy", function(){
    let newWelcomeText = prompt("What should I change the text to?");
    welcomeText.innerHTML = newWelcomeText
})


//if I move my mouse over the copyright section it's background changes
let copyright = document.querySelector(".footer p");
copyright.addEventListener("mouseenter", function(){
    copyright.style.backgroundColor = "gray";
})

copyright.addEventListener("mouseleave", function(){
    copyright.style.backgroundColor = "orange";
})

