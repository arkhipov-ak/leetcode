// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.

// Example 1:

// Input: s = "a1b2"
// Output: ["a1b2","a1B2","A1b2","A1B2"]
// Example 2:

// Input: s = "3z4"
// Output: ["3z4","3Z4"]

const letterCasePermutation = s => {
	s = s.toLowerCase()
	const len = s.length,
		ans = []

	const dfs = (i, res = '') => {
		if (i < len) {
			dfs(i + 1, res + s[i])
			if (s[i] >= 'a') dfs(i + 1, res + s[i].toUpperCase())
		} else ans.push(res)
	}

	dfs(0)
	return ans
}
