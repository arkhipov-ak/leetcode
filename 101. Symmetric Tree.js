// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

const isSymmetric = (node1, node2) => {
	if (node2 === undefined) {
		node2 = node1.right
		node1 = node1.left
	}
	if (node1 === null && node2 === null) return true
	if (node1 === null || node2 === null || node1.val !== node2.val) return false
	return (
		isSymmetric(node1.left, node2.right) && isSymmetric(node1.right, node2.left)
	)
}
