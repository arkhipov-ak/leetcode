// The power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Given a string s, return the power of s.

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

const maxPower = s => {
	let power = 1
	let start = 0

	for (let end = 1; end < s.length; end++) {
		if (s[start] !== s[end]) {
			start = end
		}

		power = Math.max(power, end - start + 1)
	}
	return power
}
