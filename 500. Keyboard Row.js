const findWords = words =>
	words.filter(w => {
		const arr = w.toLowerCase().split('')
		return (
			arr.every(c => `qwertyuiop`.includes(c)) ||
			arr.every(c => `asdfghjkl`.includes(c)) ||
			arr.every(c => `zxcvbnm`.includes(c))
		)
	})
