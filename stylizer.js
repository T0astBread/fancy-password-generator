function stylizePassword(password, style) {
	const stylizer = stylizers[style]
	if(!stylizer) throw Error(`Unknown display style: ${style}`)
	return stylizer(password)
}

const stylizers = {
	plain: password => password,

	charCodes: password => {
		const charCodes = []
		for(let i = 0; i < password.length; i++) {
			charCodes.push(password.charCodeAt(i))
		}
		return charCodes.map(charCode => {
			const group = document.createElement("span")
			group.className = "group"
			group.innerText = charCode
			return group
		})
	}
}