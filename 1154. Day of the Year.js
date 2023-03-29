// Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

// Example 1:

// Input: date = "2019-01-09"
// Output: 9
// Explanation: Given date is the 9th day of the year in 2019.
// Example 2:

// Input: date = "2019-02-10"
// Output: 41

const dayOfYear = date => {
	const now = new Date(date)
	const start = new Date(now.getFullYear(), 0, 0)
	const diff = now - start
	const oneDay = 1000 * 60 * 60 * 24
	const day = Math.floor(diff / oneDay)
	return day
}
