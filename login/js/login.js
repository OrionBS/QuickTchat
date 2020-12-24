function login() {
	const trueCode = "3FG6JK";
	console.log("Le button a été appuyé !")
	var writedCode = document.getElementById("loginInput").value;
	console.log(writedCode);
	if (writedCode == trueCode) {
		document.location.href="https://orionbs.fr";
	}
};