class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sl = s.length
        const tl = t.length
        if (sl !== tl) return false
        const counts = new Map()
        for (const char of s) {
            if (!counts.get(char)) counts.set(char, 0)
            counts.set(char, counts.get(char) + 1)
        }
        for (const char of t) {
            if (!counts.get(char)) counts.set(char, 0)
            counts.set(char, counts.get(char) - 1)
        }
        return counts.values().every(num => num === 0)
    }
}
