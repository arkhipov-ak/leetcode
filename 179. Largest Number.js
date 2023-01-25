// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

const largestNumber = nums => {
	const res = nums
		.map(String)
		.sort((a, b) => {
			return a.concat(b) > b.concat(a) ? -1 : 1
		})
		.join('')

	return res.charAt(0) === '0' ? '0' : res
}
