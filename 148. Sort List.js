// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []

const sortList = head => {
	const arr = []
	let node = head
	while (head) {
		arr.push(head.val)
		head = head.next
	}
	arr.sort((a, b) => a - b)
	head = node
	for (const n of arr) {
		node.val = n
		node = node.next
	}
	return head
}
