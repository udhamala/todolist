function getInfo() {
	var userInput = document.getElementById("todo").value
	var text = document.createTextNode(userInput)
		console.log(text)
	var li = document.createElement('li')
	var list = document.getElementById('orderedList')
	li.appendChild(text)
	document.getElementById("orderedList").appendChild(li)
}