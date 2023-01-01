var addTwoNumbers = function (l1, l2) {
	let node = null

	const carry = arguments[2] ? 1 : 0

	if (l1 || l2) {
		const val1 = l1 ? l1.val : 0
		const val2 = l2 ? l2.val : 0

		const next1 = l1 ? l1.next : null
		const next2 = l2 ? l2.next : null

		const sum = val1 + val2 + Number(carry)

		node = new ListNode(sum % 10)

		node.next = addTwoNumbers(next1, next2, sum >= 10)
	} else if (carry) {
		node = new ListNode(1)
		node.next = null
	}

	return node
}
