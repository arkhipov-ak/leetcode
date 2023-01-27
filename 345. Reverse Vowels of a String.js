// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

const reverseVowels = s => {
	const vowels = s.split('').filter(a => /[aeiou]/i.test(a))
	return s
		.split(/[aeiou]/i)
		.reduce((res, a) => res + a + (vowels.pop() || ''), '')
}
