class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
        for (const s of strs) {
            const count = new Array(26).fill(0);
            for (const c of s) {
                const index = c.charCodeAt(0) - 97;
                count[index]++;
            }
            const key = count.join('#')
            if (!map.has(key)) {
                map.set(key, [])
            }
            map.get(key).push(s)
        }
        return Array.from(map.values())
    }
}
