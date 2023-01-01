// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

const longestCommonPrefix = strs => {
	let prefix = strs.reduce((acc, str) => (str.length < acc.length ? str : acc))
	for (let str of strs) {
		while (str.slice(0, prefix.length) != prefix) {
			prefix = prefix.slice(0, -1)
		}
	}
	return prefix
}
