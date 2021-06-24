var code;
var str = "";
var i = 0;


function Main() {
	let writer = document.querySelector(".writer");
	const xhr = new XMLHttpRequest();
	xhr.open('GET', "/util/script.txt");
	xhr.responseType = "text";
	xhr.send();
	xhr.onload = function() {
		code = this.response.split('');
	}

	document.addEventListener('keydown', (event) => {
		
		if(event.key.toLowerCase() === "backspace" && i<0||  typeof code[i] !== "undefined") {
			let retirar = code[i];
			let arr = str.split("");
			arr.pop();

			str = arr.join("");

			writer.innerText = str;
			i--;
		}

		if(!/up|down|left|right|backspace|ctrl|shift/ig.test(event.key) && typeof code[i] !== "undefined") {
			str += code[i];
			writer.innerText = str;
			i++;
		}
	})
}

document.addEventListener('DOMContentLoaded', Main);