// Função referente à lista de tarefas:

function marked () {
    target = event.target.value;
    element = document.getElementById(target).style;
    if (element.textDecoration == "none" || element.textDecoration == false) {
        element.textDecoration = "line-through";
        element.color = "#ff0000";
        return;
    }
    if (element.textDecoration == "line-through") {
        element.color = "#800000";
        element.textDecoration = "none";
        return;
    }
}

// Funções Referentes ao carrossel de imagens

const img = document.getElementById('img');

let i = 0

function slide(){
i++
console.log(i)
}

setInterval(slide, 3000);

function troca(){
    switch (i) {
        case 0:
            img.src = "imagem1.png"
            break;
        case 1:
            img.src = "imagem2.png"
            break;
        case 2:
            img.src = "imagem3.png"
            break;
        case 3: 
        i = 0
        default:
            break;
}
    if(i < 0){
        i = 2
}

}
setInterval(troca, 0);


function avanca(){
    i++
}
function volta(){
    i--
}

// Funções referentes ao cronômetro:

function count (){
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    let mil = parseInt(document.getElementById("mil").innerText);
    let seg = parseInt(document.getElementById("seg").innerText);
    let min = parseInt(document.getElementById("min").innerText);
    if (mil == 1000){
        seg++;
        mil = 0;
    }
    if (seg == 60) {
        min++;
        seg = 0;
    }
    mil += 10;
    if (mil < 10) mil = "00" + mil;
    if (mil < 100 && mil > 10) mil = "0" + mil;
    if (seg < 10) seg = "0" + seg;
    if (min < 10) min = "0" + min;
    document.getElementById("mil").innerText = mil;
    document.getElementById("seg").innerText = seg;
    document.getElementById("min").innerText = min;
}

function start () {
    interval = setInterval(count, 10);
    if (event.target.id == "restartButton"){
        document.getElementById("restartButton").disabled = true;
        document.getElementById("resetButton").disabled = true;
    }
}

function stop () {
    clearInterval(interval);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("restartButton").disabled = false;
    document.getElementById("resetButton").disabled = false;
}

function reset () {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("restartButton").disabled = true;
    document.getElementById("resetButton").disabled = true;
    document.getElementById("mil").innerText = "000";
    document.getElementById("seg").innerText = "00";
    document.getElementById("min").innerText = "00";
}

// Funções referentes à barra de progresso:

let firstProgress = true;
let  progressPercent = 0;
let progressPixels = 0;
let progressInterval = null;
let imageProgress = document.getElementById("imageProgress");

function acressProgress () {
    progressPercent += 1;
    progressPixels += 4;
    imageProgress.style.width = progressPixels + "px";
    document.getElementById("percent").innerText = progressPercent;
    if (progressPercent > 100) {
        progressPercent = 0;
        window.alert("Feliz Natal!");
        firstProgress = true;
        progressPixels = 0;
        clearInterval(progressInterval);
        imageProgress.style.width = progressPixels + "px";
        document.getElementById("percent").innerText = progressPercent;
    }
}

function startProgress () {
    if (firstProgress == true) {
        progressInterval = setInterval(acressProgress, 1000);
    }
    firstProgress = false;
}

// Funções da barra de opções

selectedOptionsMenu = true;

function options () {
    if (selectedOptionsMenu) {
        document.getElementById("mensage").style.display = "block";
        document.getElementById("adicional").innerHTML = ">";
        selectedOptionsMenu = false;
    }
    else {
        document.getElementById("mensage").style.display = "none";
        document.getElementById("adicional").innerHTML = "<"
        selectedOptionsMenu = true;
    } 
}