function generateAndDisplayPassword() {
	const password = generatePassword(6)
	showPasswordOnAllDisplays(password)
}

/**
 * @param {string} password 
 */
function showPasswordOnAllDisplays(password) {
	// forEach wouldn't work with getElementsByClassName
	document.querySelectorAll(".password-display").forEach(display => {
		showPasswordOnDisplay(password, display)
	})
}

/**
 * @param {string} password 
 * @param {HTMLElement} display 
 */
function showPasswordOnDisplay(password, display) {
	const displayStyle = display.dataset.style || "plain"
	const stylizedPassword = stylizePassword(password, displayStyle)

	display.innerHTML = ""
	if(typeof stylizedPassword === "string") {
		display.innerText = stylizedPassword
	}
	else if(stylizedPassword instanceof HTMLElement) {
		display.appendChild(stylizedPassword)
	}
	else if(stylizedPassword instanceof Array) {
		stylizedPassword.forEach(child => display.appendChild(child))
	}
}

document.getElementById("generateButton").addEventListener("click", generateAndDisplayPassword)
generateAndDisplayPassword()
