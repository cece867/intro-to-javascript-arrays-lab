/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);


/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

//foods is ['pizza', 'cheeseburger']
foods.push('pizza', 'cheeseburger');
firstFood = foods[0];
//firstFood is 'pizza'

console.log('Exercise 2 result:', foods);


/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
foods.unshift('taco');
//food is  {'taco', 'pizza', 'cheeseburger'}

console.log('Exercise 3 result:', foods);


/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
// recall that foods is ['taco', 'pizza', 'cheeseburger']
let favFood;

favFood = foods[1]; 
foods[1] = 'pizza';

console.log('Exercise 4 result:', favFood);


/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
console.log(foods.length)
const lastFood = foods[foods.length -1];

//let food = ['taco', 'pizza', 'cheeseburger'];
foods.splice(2, 0, 'tofu');


console.log('Exercise 5 result:', foods);


/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

console.log(foods); // output: ['taco', 'pizza', 'cheeseburger', 'tofu']

foods.splice(2, 1, 'sushi', 'cupcake'); // Replace 'pizza' with 'sushi' and 'cupcake'



console.log(foods); // output: ['taco', 'sushi', 'cupcake', 'cheeseburger', 'tofu']

console.log('Exercise 6 result:', foods);


/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
//slice();
//slice(start);
//slice(start, end);

let yummy = foods.slice(1, 2);

console.log('Exercise 7 result:', yummy);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/
let soyIdx
for (let idx = 0; idx < foods.length; idx++) {
  if (foods[idx] === 'tofu') {
    soyIdx = idx;
  }
}

console.log('Exercise 8 result:', soyIdx);

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/
const elements = ["taco", "sushi", "cupcake", "cheeseburger", "tofu"];

console.log(elements.join());
// Expected output: ['taco->, sushi->, cupcake->, cheeseburger->, tofu'];

console.log(elements.join(""));
// Expected output: 'tacosushicupcakecheeseburgertofu'

console.log(elements.join("->"));
// Expected output: 'taco-sushi-cupcake-cheeseburger-tofu'

// let favFood = allFoods[1]; // Removed to fix redeclaration error

allFoods= foods[0,1,2,3,4]; 
foods[1] = 'taco,sushi,cupcake,cheeseburger, tofu';

console.log('Exercise 9 result:', allFoods);


/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/


console.log(foods.includes('soup'));

// Expected output: false

const hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);


/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:

*/


const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];


const odds = []; // Initialize the odds array as empty

nums.forEach(function(num) {
  if (num % 2 !== 0) { // Check if the number is odd (remainder when divided by 2 is not 0)
    odds.push(num); // Push the odd number to the odds array
  }
});

console.log(odds); // Output: [5, 23, 15, 21, 9, 45, 7, 81]

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/
//function fizzBuzzWithArrays(nums) {
  const fizz = [];
  const buzz = [];
  const fizzbuzz = [];

  // Method to iterate: for...of loop
  for (const num of nums) {
    // Check for divisibility by 3
    if (num % 3 === 0) {
      fizz.push(num);
    }

    // Check for divisibility by 5
    if (num % 5 === 0) {
      buzz.push(num);
    }

    // Check for divisibility by both 3 and 5 (i.e., by 15)
    if (num % 3 === 0 && num % 5 === 0) {
      fizzbuzz.push(num);
    }
  }

// return { fizz, buzz, fizzbuzz };
//}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const numList = numArrays[numArrays.length - 1];

console.log('Exercise 13 result:', numList);




/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/
const num = numArrays[2][1];



console.log('Exercise 14 result:', num);


/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/


let total = 0; // Initialize total before iterations

numArrays.forEach(innerArray => {
	innerArray.forEach(num => {
		total += num; // Add each number to total
	});
});

console.log(total); // 534



console.log('Exercise 15 result:\n', total);



