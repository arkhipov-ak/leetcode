// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const reverse = x => {
	let absVal = Math.abs(x).toString().split('').reverse().join('')

	if (absVal > Math.pow(2, 31)) {
		return 0
	} else {
		return Math.sign(x) * absVal
	}
}
