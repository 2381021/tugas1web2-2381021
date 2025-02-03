function twoSum(nums, target) {
    var temp = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (temp.has(Math.abs(nums[i] - target))) {
            var val = temp.get(Math.abs(nums[i] - target));
            return [val, i];
        }
        else {
            temp.set(nums[i], i);
        }
    }
    return [];
}
console.log(twoSum([3, 2, 4], 6));
