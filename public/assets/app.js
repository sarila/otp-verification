
function movecursor(event, prev, curr, next) {
	
	// console.log(event);
	 var length = document.getElementById(curr).value.toString().length;
	 var maxlength = document.getElementById(curr).getAttribute("maxlength");
	 if (length == maxlength) {
	 	if (next != "") {
	 		document.getElementById(next).focus();
	 	}
	 }
	 if (event.code == "Backspace") {
	 	if (prev != "") {
	 		document.getElementById(prev).focus();
	 	}
	 }
}

function handlePaste(e) {
	var clipboardData, pastedData;

	e.stopPropagation();
    e.preventDefault();
	
	clipboardData = e.clipboardData || window.clipboardData;
	pastedData = clipboardData.getData('Text');

	console.log(pastedData);    
	data = pastedData.split('');
	[].forEach.call(document.querySelectorAll("input[type=number]"), (node, index) => {
		node.value = data[index];
	});
}

document.getElementById('otp_input').addEventListener('paste', handlePaste);