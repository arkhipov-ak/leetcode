// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

const validPalindrome = s => {
	for (let i = 0, stop = s.length / 2; i < stop; i++) {
		let j = s.length - i - 1
		if (s[i] !== s[j]) {
			return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
		}
	}
	return true
}

const cut = (s, i) => s.substr(0, i) + s.substr(i + 1)

const isPalindrome = s => s === s.split('').reverse().join('')

// const validPalindrome = s => {
// 	const palindrome = [...s].reverse()
// 	for (let i = 0; i < palindrome.length; i++) {
// 		let clone = [...palindrome]
// 		clone.splice(i, 1)
// 		if (clone.join('') === clone.reverse().join('')) return true
// 	}
// 	return false
// }
