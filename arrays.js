// let sample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sample[0]);
// console.log(sample[sample.length - 1]);
// console.log(sample[-1]);

// let sample = [1, "hi", true, null, [], {}];
// console.log(sample[0]);
// sample[0] = 100;
// console.log(sample[0]);

// for (let i = 0; i < sample.length; i++) {
//   console.log(sample[i], typeof sample[i]);
// }

// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// num_arr.length = 5;
// console.log(num_arr);

// Methods
// 1. length
// let fruits = ["apple", "grapes", "papaya"];
// console.log(fruits.length);

//2. to string
// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let updated = num_arr.toString();
// console.log(updated, typeof updated);

// let wish = ["hi", "how", "are", "you"];
// console.log(wish.toString().replaceAll(",", " "));

//3 at  -- return the elements at the given index
// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num_arr.at(3));
// console.log(num_arr.at(10));

// 4. join()  -- returns string
// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(num_arr.join("*"));

//5.  pop -- removes the last element from the array
// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// num_arr.pop();
// console.log(num_arr);

//6. shift -- removs the first element in the array
// num_arr.shift();
// console.log(num_arr);

//7. push -- adds the elements at the end of the array
// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// num_arr.push(11);
// num_arr.push(12, 13, 14, 15);
// num_arr.push(1);
// num_arr.push(true, [], {});
// console.log(num_arr);

// 8. unshift -- adds elements to the start of the array
// let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// num_arr.unshift(0);
// console.log(num_arr);

//9. delete
// let names = ["surya", "karthik", "thalaiva", "sethupathi"];
// delete names[1]; // not recommended  not deletes seled item will be replaced with empty
// delete names[2]; // not recommended
// delete names[3]; // not recommended
// delete names[0]; // not recommended
// console.log(names);
// console.log(names.length, names[1]);

//10. concat - returns a new array with values from the arrays added together
// let names = ["surya", "karthik", "thalaiva", "sethupathi"];

// let names2 = ["prabhas", "mahesh", "vamshi", "ravi teja"];
// console.log(names.concat(names2));
// console.log(names);
// console.log(names2);

//11. flat
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, [8, [9, [10, [11, [12, [13, [14, [15]]]]]]]]],
// ]; // nested array
//let flatted = matrix.flat();
//console.log(matrix);
// console.log(matrix, flatted);

// let flatted = matrix.flat(8);
// console.log(flatted);

// let flatted1 = matrix.flat(100);
// console.log(flatted1);

// let flatted2 = matrix.flat(Infinity);
// //infinity -- it represents a positive infinite number
// //-infinity -- it represents a negative infinite number

// console.log(flatted2);

// 12 . slice
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nums.slice(1, 5)); //2345
// console.log(nums.slice(1));
// console.log(nums.slice(-1));
// console.log(nums.slice(-1, -6));
// console.log(nums.slice(-6));

// 13. indexOf
let directors = [
  "sandeep",
  "rajamouli",
  "meher ramesh",
  "rgv",
  "vamshi",
  "siva",
  "puri",
  "harish shankar",
  "sandeep",
];
// console.log(directors.indexOf("puri"));
// console.log(directors.indexOf("rgv"));

// 14 lastIndexOf
// console.log(directors.lastIndexOf("sandeep"));

// 15 . includes
// console.log(directors.at(15));
// console.log(directors.indexOf("puri"));
// console.log(directors.indexOf("srreekanth"));

// console.log(directors.includes("rgv"));
// console.log(directors.includes("gvm"));

// 16. splice
// split + slice = splice
// CRUD
// create
// read
// update
// delete

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

// nums.splice(0, 1); // start delete  from 0 element to 1 element remove
// console.log(nums);

// nums.splice(0, 2);   //deletion
// console.log(nums);

nums.splice(10, 0, 11); // creation
console.log(nums);

nums.splice(nums.length - 1, 1); // start, how may to remove, add ele(insert)   // deletion
console.log(nums);

nums.splice(nums.length - 1, 1, 13); // insertion
console.log(nums);
console.log(nums.splice(0, 5));

let nums1 = [1, 5, 9, 6];
nums1.splice(1, 0, 2, 3, 4);
nums1.splice(5, 0, 6, 7, 8);
nums1.splice(9, 1, 10);
console.log(nums1);
