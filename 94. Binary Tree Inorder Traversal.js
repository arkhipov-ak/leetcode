var inorderTraversal = function (root) {
	let res = []

	const fn = node => {
		if (!node) return
		fn(node.left)
		res.push(node.val)
		fn(node.right)
	}

	fn(root)

	return res
}
