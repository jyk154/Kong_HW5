let arr = [1,2,3,4,5,6,7,8,9,10];

let odd_arr = arr.filter(num => num % 2 != 0);

let arr_div1 = arr.filter(num => num % 2 == 0 || num%5 == 0);

let arr_div2= arr.filter(num => num % 3 == 0).map(num => num*num);

let arr_sum= arr.filter(num => num % 5 == 0).map(num=>num*num).reduce((a,b) => a+b);

console.log('Original Array: ', arr);
console.log('Odd numbers: ', odd_arr);
console.log('Numbers divisible by 2 or 5: ', arr_div1);
console.log('square of Numbers divisible by 3:', arr_div2);
console.log('Sum of squares of numbers divisible by 5: ', arr_sum);