// Your task is to calculate ab mod 1337 where a is a positive integer and b is an extremely large positive integer given in the form of an array.

// Example 1:

// Input: a = 2, b = [3]
// Output: 8
// Example 2:

// Input: a = 2, b = [1,0]
// Output: 1024
// Example 3:

// Input: a = 1, b = [4,3,3,8,5,2]
// Output: 1

const MOD = 1337

const superPow = (a, b) => {
	if (b.length === 0) return 1

	const lastDigit = b.pop()

	return (pow(superPow(a, b), 10) * pow(a, lastDigit)) % MOD
}

const pow = (base, power) => {
	let res = 1

	while (power-- > 0) {
		res = (res * base) % MOD
	}

	return res
}
