_The function uses a Hash table (JavaScript object) to store the elements of the input list and their indices as key-value pairs. Then, for each element in the input list, it checks if the complement of the current element which is (target - current element) is present in the hash table, if yes, it means a pair is found and it pushes that pair into the resulting array._
_This algorithm has a time complexity of O(n) which is faster than O(n^2)_

- Run the code in fpairscc.js file with Node or in the browser's console.
