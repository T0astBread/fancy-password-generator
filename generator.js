/*
	Taken from https://gist.github.com/T0astBread/9c06ec192abb83f009e215b25d75204d
	(slightly modified to fit the code style of this project)
*/

const MIN_CHAR_CODE = 33 //inclusive
const MAX_CHAR_CODE = 123 //exclusive

let charCodeRange = MAX_CHAR_CODE - MIN_CHAR_CODE
function generatePasswordCharacter() {
	return Math.floor(Math.random() * charCodeRange + MIN_CHAR_CODE)
}

function generatePassword(length) {
	const charCodes = []
	for(let i = 0; i < length; i++) {
		charCodes.push(generatePasswordCharacter())
	}
	return String.fromCharCode.apply(null, charCodes) //Trick to make varargs take an array
}