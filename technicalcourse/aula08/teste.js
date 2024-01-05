let msg = document.getElementById('msg');
console.log(msg.dataset.formatacao);

let title = document.createElement('h1');
title.innerText = "Hello World!!!";
msg.after(title);