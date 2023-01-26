// You are given a string s. You can convert s to a
// palindrome
//  by adding characters in front of it.

// Return the shortest palindrome you can find by performing this transformation.

// Example 1:

// Input: s = "aacecaaa"
// Output: "aaacecaaa"
// Example 2:

// Input: s = "abcd"
// Output: "dcbabcd"

const shortestPalindrome = s => {
	let len = s.length
	let rev = s.split('').reverse().join('')

	for (let i = 0; i < len; i++) {
		if (s.substring(0, len - i) === rev.substring(i)) {
			return rev.substr(0, i) + s
		}
	}
	return ''
}
