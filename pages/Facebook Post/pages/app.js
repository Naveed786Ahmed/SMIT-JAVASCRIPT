let postBackground = document.querySelector(".post-content")
let letter = document.getElementById("posttext")
let emojiies = document.querySelector(".emojies")
let body = document.querySelector(".post-content")
let backgroundStyling = document.querySelector(".styling")
let fontStyling = document.querySelector(".font-styling") 
let buttons = document.querySelector(".btn")

function changeBackground() {
    postBackground.style.backgroundImage = 'url(' + event.target.src + ')';
}

function changeBackgroundColor() {
    postBackground.style.backgroundColor = event.target.value;
}

function changeFontColor() {
    letter.style.color = event.target.value;
}

function changeFontWeight() {
    let type = event.target.innerText;
    let types = event.target.className;

    if (type === "B") {
        if (letter.style.fontWeight === "bold") {
            letter.style.fontWeight = "normal";
        }
        else {
            letter.style.fontWeight = "bold";
        }
    }

    if (type === "I") {
        if (letter.style.fontStyle === "italic") {
            letter.style.fontStyle = "normal";
        }
        else {
            letter.style.fontStyle = "italic";
        }
    }

    if (type === "U") {
        if (letter.style.textDecoration === "underline") {
            letter.style.textDecoration = "none";
        }
        else {
            letter.style.textDecoration = "underline";
        }
    }

    if (types === "fa-solid fa-align-left") {
        if (letter.style.textAlign === "left") {
            letter.style.textAlign = "center";
        }
        else {
            letter.style.textAlign = "left"
        }
    }

    if (types === "fa-solid fa-align-center") {
        if (letter.style.textAlign === "center") {
            letter.style.textAlign = "center";
        }
        else {
            letter.style.textAlign = "center"
        }
    }

    if (types === "fa-solid fa-align-right") {
        if (letter.style.textAlign === "right") {
            letter.style.textAlign = "center";
        }
        else {
            letter.style.textAlign = "right"
        }
    }
}

function fontsize() {
    letter.style.fontSize = event.target.value + "px";
}

function postEmojies() {
    letter.value += event.target.innerText;
}

function activeEmoji() {
    if (event.type === "mouseover") {
        if (event.target.lastElementChild.className === "emojies") {
            emojiies.style.display = "inline-flex";
        }
    }
}

function clickPost(){
    body.style.height = "67%";
    backgroundStyling.style.display = "none";
    fontStyling.style.display = "none";
    buttons.style.backgroundColor = "#3f3c3c";
    buttons.style.color = "#818080";
}


















