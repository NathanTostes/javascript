button = document.getElementById("eventButton");
console.log(button);

if (button) {
    button.addEventListener("click", tratador);
}

function tratador (a){
    console.log(a);
}