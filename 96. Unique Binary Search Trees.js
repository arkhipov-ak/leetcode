// Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

// Example 1:

// Input: n = 3
// Output: 5
// Example 2:

// Input: n = 1
// Output: 1

const h = [1, 1, 2]

const numTrees = n => {
	if (h[n]) return h[n]
	let res = 0
	for (let i = 0; i < n; i++) {
		res += numTrees(i) * numTrees(n - 1 - i)
	}
	return (h[n] = res)
}
