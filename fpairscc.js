function findPairs(nums, target) {
  var pairs = [];
  var numsMap = {};
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (numsMap[complement] !== undefined) {
      pairs.push([complement, nums[i]]);
    }
    numsMap[nums[i]] = i;
  }
  return pairs;
}
console.log(findPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12));
