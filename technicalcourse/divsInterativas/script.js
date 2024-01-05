function paraBaixo(){
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const itensDiv1 = div1.children;

    for(count = 0; count < itensDiv1.length; count++){
        div2.appendChild(itensDiv1[count]);
    }
}

function paraCima(){
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const itensDiv2 = div2.children;

    for(count = 0; count < itensDiv2.length; count++){
        div1.appendChild(itensDiv2[count]);
    }
}