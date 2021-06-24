var code;
var str = "";
var i = 0;

function Main() {
    const whiter = document.querySelector('.code');


    const xhr = new XMLHttpRequest()
    xhr.responseType = "text";
    xhr.open('GET', '/utils/script.txt');
    xhr.send();
    xhr.onload = function() {
        code = this.response.split('');
    }
    


    document.addEventListener('keydown', (event) => {
        if (event.key.toLowerCase() === "backspace" && i > 0 || typeof code[i] === "undefined") {
            let arr = str.split('');
            arr.pop();
            str = arr.join('');
            whiter.innerText = str;
            i--;
        }
        if(!/up|down|doupn|left|right|backspace/ig.test(event.key)) {
            if (typeof code[i] === "undefined") return;
            str += code[i];
            whiter.innerText = str;
            i++;
        }
    })
}

document.addEventListener('DOMContentLoaded', Main); 