// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

// FIRST SOLUTION

const defangIPaddr = address =>
	address
		.split('')
		.map(e => (e === '.' ? '[.]' : e))
		.join('')

// SECOND SOLUTION

// const defangIPaddr = address => address.replace(/\./g, '[.]')

// THIRD SOLUTION

// const defangIPaddr = address => {
// 	let str = ''
// 	for (let key of address) {
// 		if (key === '.') str += '[.]'
// 		else str += key
// 	}
// 	return str
// }
