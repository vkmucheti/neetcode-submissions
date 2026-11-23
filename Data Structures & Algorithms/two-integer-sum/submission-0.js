class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        let len = nums.length
        for (let i = 0; i < len; i++) {
            let seen = target - nums[i];
            if (map.has(seen)) return [map.get(seen), i]
            map.set(nums[i], i)
        }
        return []
    }
}
