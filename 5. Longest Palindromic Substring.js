// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

const longestPalindrome = s => {
	let str = ''
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < 2; j++) {
			let left = i
			let right = left + j

			while (s[left] && s[left] === s[right]) {
				left--
				right++
			}
			if (right - left - 1 > str.length) {
				str = s.slice(left + 1, right)
			}
		}
	}
	return str
}
