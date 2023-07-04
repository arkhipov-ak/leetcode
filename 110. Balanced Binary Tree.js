// Given a binary tree, determine if it is
// height-balanced
// .

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

const isBalanced = root => {
	if (root == null) return true

	if (Height(root) == -1) return false
	return true
}

const Height = root => {
	if (root == null) return 0

	let leftHeight = Height(root.left)
	let rightHeight = Height(root.right)

	if (leftHeight == -1 || rightHeight == -1) return -1

	if (Math.abs(leftHeight - rightHeight) > 1) return -1

	return Math.max(leftHeight, rightHeight) + 1
}
