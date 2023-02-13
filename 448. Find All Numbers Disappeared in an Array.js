// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

const findDisappearedNumbers = nums => {
	const set = new Set(nums)
	const newArr = []

	for (let i = 0; i < nums.length; i++) {
		if (!set.has(i + 1)) {
			newArr.push(i + 1)
		}
	}
	return newArr
}
