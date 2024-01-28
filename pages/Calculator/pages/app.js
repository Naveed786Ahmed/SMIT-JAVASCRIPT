
let input = document.querySelector(".input");
let results = document.querySelector(".result")

function display(number) {
    input.value += number;
}

function cls() {
    input.value = "";
    results.innerHTML = "";
}

function dle() {
    input.value = input.value.slice(0, -1);
}

function equals() {
    let result = eval(input.value);
    results.innerHTML = result;
}





































