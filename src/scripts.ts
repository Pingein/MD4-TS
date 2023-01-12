/* Write a function that takes two numbers (a and b) as argument
Sum a and b
Return the result */
function sum(a:number,b:number):number {
    return a + b
}
console.log('sum() results:')
console.log(sum(1,2)) //Expected 3
console.log(sum(1,10)) //Expected 11
console.log(sum(99,1)) //Expected 100


/* Write a function that takes a value as argument
Return the type of the value */
function getType(arg:any):string {
    return typeof arg
}
console.log('getType() results:')
console.log(getType(1)) //Expected 'number'
console.log(getType(false)) //Expected 'boolean'
console.log(getType({})) //Expected 'object'
console.log(getType(null)) //Expected 'object'
console.log(getType('string')) //Expected 'string'
console.log(getType(['array'])) //Expected 'object'


/* Write a function that takes two values, say a and b, as arguments
Return true if the two values are equal and of the same type */
function sameValueAndType(a:any, b:any):boolean {
    return a === b
}
console.log('sameValueAndType() results:')
console.log(sameValueAndType(2, 3)) //Expected false 
console.log(sameValueAndType(3, 3)) //Expected true 
console.log(sameValueAndType(1, '1')) //Expected false 
console.log(sameValueAndType('10', '10')) //Expected true


/* Write a function that takes a string (a) and a number (n) as arguments
Return the nth character of 'a' */
function getChar(str:string, n:number):string {
    return str.split('')[n-1]
}
console.log('getChar() results:')
console.log(getChar('abcd',1)) //Expected 'a'
console.log(getChar('zyxbwpl',5)) //Expected 'w'
console.log(getChar('gfedcba',3)) //Expected 'e'


/* Write a function that takes a string (a) as argument
Remove the first 3 characters of a
Return the result */
function removeFirstThree(str:string):string {
    return str.slice(3)
}
console.log('removeFirstThree() results:')
console.log(removeFirstThree('abcdefg')) //Expected 'defg'
console.log(removeFirstThree('1234')) //Expected '4'
console.log(removeFirstThree('fgedcba')) //Expected 'dcba'


/* Write a function that takes a string as argument
Extract the last 3 characters from the string
Return the result */
function getLastThree(str:string):string {
    return str.slice(str.length-3, str.length)
}
console.log('getLastThree() results:')
console.log(getLastThree('abcdefg')) //Expected 'efg'
console.log(getLastThree('1234')) //Expected '234'
console.log(getLastThree('fgedcba')) //Expected 'cba'


/* Write a function that takes a string (a) as argument
Get the first 3 characters of a
Return the result */
function getFirsthree(str:string):string {
    return str.slice(0, 3)
}
console.log('getFirsthree() results:')
console.log(getFirsthree('abcdefg')) //Expected 'abc'
console.log(getFirsthree('1234')) //Expected '123'
console.log(getFirsthree('fgedcba')) //Expected 'fge'


/* Write a function that takes a string (a) as argument
Extract the first half a
Return the result */
function getFirstHalf(str:string):string {
    return str.slice(0,str.length/2)
}
console.log('getFirstHalf() results:')
console.log(getFirstHalf('abcdefg')) //Expected 'abcd'
console.log(getFirstHalf('1234')) //Expected '1'
console.log(getFirstHalf('fgedcba')) //Expected 'fged'


/* Write a function that takes a string (a) as argument
Remove the last 3 characters of a
Return the result */
function removeLastThree(str:string):string {
    return str.slice(0, str.length-3)
}
console.log('removeLastThree() results:')
console.log(removeLastThree('abcdefg')) //Expected 'abc'
console.log(removeLastThree('1234')) //Expected '123'
console.log(removeLastThree('fgedcba')) //Expected 'fge'


/* Write a function that takes two numbers (a and b) as argument
Return b percent of a */
function getPercent(a:number,b:number):number {
    return (b/a)*100
}
console.log('getPercent() results:')
console.log(getPercent(100,50)) //Expected 50
console.log(getPercent(10,1)) //Expected 10 !0.1
console.log(getPercent(500,25)) //Expected 5 !125


/*Write a function that takes 6 values (a,b,c,d,e,f) as arguments
Sum a and b
Then substract by c
Then multiply by d and divide by e
Finally raise to the power of f and return the result */
function bruh(a:number,b:number,c:number,d:number,e:number,f:number):number {
    return ((a + b - c) * d / e) ** f
}
console.log('bruh() results:')
console.log(bruh(6,5,4,3,2,1)) //Expected 10.5
console.log(bruh(6,2,1,4,2,3)) //Expected 2744
console.log(bruh(2,3,6,4,2,3)) //Expected -8


/* Write a function that takes a number as argument
If the number is even, return true
Otherwise, return false */
function isEven(n:number):boolean {
    return (n % 2) == 0
}
console.log('isEven() results:')
console.log(isEven(10)) //Expected true
console.log(isEven(-4)) //Expected true
console.log(isEven(5)) //Expected false
console.log(isEven(-111)) //Expected false


/* Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b */
function occurences(a:string,b:string):number {
    let count:number = 0
    b.split('').forEach(char => char === a ? count++ : count)
    return count
}
console.log('occurences() results:')
console.log(occurences('m', 'how many times does the character occur in this sentence?')) //Expected 2
console.log(occurences('h', 'how many times does the character occur in this sentence?')) //Expected 4
console.log(occurences('?', 'how many times does the character occur in this sentence?')) //Expected 1


/* Write a function that takes a number (a) as argument
If a is a whole number (has no decimal place), return true
Otherwise, return false */
function isInt(n:number):boolean {
    return n.toString().split('.').length == 1
}
console.log('isInt() results:')
console.log(isInt(4)) //Expected true
console.log(isInt(1.123)) //Expected false
console.log(isInt(1048)) //Expected true


/* Write a function that takes two numbers (a and b) as arguments
If a is smaller than b, divide a by b
Otherwise, multiply both numbers
Return the resulting value */
function what(a:number,b:number):number {
    let result:number
    a < b ? result = a/b : result = a*b
    return result
}
console.log('what() results:')
console.log(what(10, 100)) //Expected 0.1
console.log(what(90, 45)) //Expected 4050
console.log(what(8, 20)) //Expected 0.4
console.log(what(2, 0.5)) //Expected 1


/* Write a function that takes two strings (a and b) as arguments
If a contains b, append b to the beginning of a
If not, append it to the end
Return the concatenation */ 
function concatStringByValues(word1:string,word2:string) {
    let result:string
    word1.match(word2) ? result = word2.concat(word1) : result = word1.concat(word2)
    return result
}
console.log('concatStringByValues() results:')
console.log(concatStringByValues('cheese', 'cake')) //Expected 'cheesecake'
console.log(concatStringByValues('lips', 's')) //Expected 'slips'
console.log(concatStringByValues('Java', 'script')) //Expected 'Javascript'


/* Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number */
function roundTo2DecimalPlaces(n:number) {
    return parseFloat(n.toFixed(2))
}
console.log('roundTo2DecimalPlaces() results:')
console.log(roundTo2DecimalPlaces(2.12397)) //Expected 2.12
console.log(roundTo2DecimalPlaces(3.136)) //Expected 3.14
console.log(roundTo2DecimalPlaces(1.12397)) //Expected 1.12


/* Write a function that takes a number (a) as argument
Split a into its individual digits and return them in an array
Tip: you might want to change the type of the number for the splitting */
function splitIntoNumbers(n:number) {
    return n.toString().split('').map(char => parseInt(char))
}
console.log('splitIntoNumbers() results:')
console.log(splitIntoNumbers(10)) //Expected [1,0]
console.log(splitIntoNumbers(931)) //Expected [9,3,1]
console.log(splitIntoNumbers(193278)) //Expected [1,9,3,2,7,8]


/* It seems like something happened to these strings
Can you figure out how to clear up the chaos?
Write a function that joins these strings together such that they form the following words:
'Javascript', 'Countryside', and 'Downtown'
You might want to apply basic JS string methods such as replace(), split(), slice() etc. */
function fixStringsAndMerge(str1:string,str2:string) {
    return str1.concat(str2.split('').reverse().join('')).replace('%', '')
}
console.log('fixStringsAndMerge() results:')
console.log(fixStringsAndMerge('java', 'tpi%rcs')) //Expected 'Javascript'
console.log(fixStringsAndMerge('c%ountry', 'edis')) //Expected 'Countryside'
console.log(fixStringsAndMerge('down', 'nw%ot')) //Expected 'Downtown'


/* This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number */
function isPrime(n:number):boolean {
    for (let i = 2; i<Math.ceil(n**0.5)+1; i++) {
        if (n % i == 0) { 
            return false 
        }
    }
    return true
}
function nearestLargestPrime(a:number):number {
    while (!isPrime(a)) {
        a += 1
    }
    return a
}
console.log('nearestLargestPrime() results:')
console.log(nearestLargestPrime(38)) //Expected 41
console.log(nearestLargestPrime(7)) //Expected 7
console.log(nearestLargestPrime(115)) //Expected 127
console.log(nearestLargestPrime(2000)) //Expected 2003


/* Write a function that takes two numbers, say x and y, as arguments
Check if x is divisible by y
If yes, return x
If not, return the next higher natural number that is divisible by y */
function findDividend(dividend:number,divisor:number):number {
    let remainder = dividend % divisor
    while (remainder !== 0) {
        dividend++
        remainder = dividend % divisor
    }
    return dividend
}
console.log('findDividend() results:')
console.log(findDividend(1, 23)) //Expected 23
console.log(findDividend(23, 23)) //Expected 23
console.log(findDividend(7, 3)) //Expected 9
console.log(findDividend(-5, 7)) //Expected 0 


/* Write a function that takes two strings (a and b) as arguments
Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
Return the resulting string */
function insertCharacter(str:string,char:string):string {
    str = str.split('').reverse().join('')
    let new_str:string = ''
    while (str.length) {
        new_str += str.slice(0,3)
        str = str.slice(3)
        str.length ? new_str += char : 0
    }
    return new_str.split('').reverse().join('')
}
console.log('insertCharacter() results:')
console.log(insertCharacter('1234567','.')) //Expected '1.234.567'
console.log(insertCharacter('abcde','$')) //Expected 'ab$cde'
console.log(insertCharacter('zxyzxyzxyzxyzxyz','w')) //Expected 'zwxyzwxyzwxyzwxyzwxyz'


/* Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word */
function fixString(str:string):string {
    let str_split:string[] = str.split('')
    for (let i = 0; i < str_split.length; i++) {
        str_split[i] = String.fromCharCode(str_split[i].charCodeAt(0)+1)
    }
    return str_split.join('')
}
console.log('fixString() results:')
console.log(fixString('bnchmf')) //Expected 'coding'
console.log(fixString('bgddrd')) //Expected 'cheese'
console.log(fixString('sdrshmf')) //Expected 'testing'


/* Write a function that takes an array (a) and a value (n) as argument
Return the nth element of 'a' */
function getIndexValue(arr:any[],index:number) {
    return arr[index-1]
}
console.log('getIndexValue() results:')
console.log(getIndexValue([1,2,3,4,5],3)) //Expected 3
console.log(getIndexValue([10,9,8,7,6],5)) //Expected 6
console.log(getIndexValue([7,2,1,6,3],1)) //Expected 7


/* Write a function that takes an array (a) as argument
Remove the first 3 elements of 'a'
Return the result */
function removeFirstThreeFromArray(arr:any[]):any[] {
    return arr.slice(3)
}
console.log('removeFirstThreeFromArray() results:')
console.log(removeFirstThreeFromArray([1,2,3,4])) //Expected [4]
console.log(removeFirstThreeFromArray([5,4,3,2,1,0])) //Expected [2,1,0]
console.log(removeFirstThreeFromArray([99,1,1])) //Expected []


/* Write a function that takes an array (a) as argument
Extract the last 3 elements of a
Return the resulting array */
function getLastThreeFromArr(arr:any[]):any[] {
    return arr.slice(arr.length-3)
}
console.log('getLastThreeFromArr() results:')
console.log(getLastThreeFromArr([1,2,3,4])) //Expected [2,3,4]
console.log(getLastThreeFromArr([5,4,3,2,1,0])) //Expected [2,1,0]
console.log(getLastThreeFromArr([99,1,1])) //Expected [99,1,1]


/* Write a function that takes an array (a) as argument
Extract the first 3 elements of a
Return the resulting array */
function getFirstThreeFromArr(arr:any[]):any[] {
    return arr.slice(0,3)
}
console.log('getFirstThreeFromArr() results:')
console.log(getFirstThreeFromArr([1,2,3,4])) //Expected [1,2,3]
console.log(getFirstThreeFromArr([5,4,3,2,1,0])) //Expected [5,4,3]
console.log(getFirstThreeFromArr([99,1,1])) //Expected [99,1,1]


/* Write a function that takes an array (a) and a number (n) as arguments
It should return the last n elements of a */
function getLastNFromArr(arr:any[],n:number):any[] {
    return arr.slice(arr.length-n)
}
console.log('getLastNFromArr() results:')
console.log(getLastNFromArr([1, 2, 3, 4, 5], 2)) //Expected [ 4, 5 ]
console.log(getLastNFromArr([1, 2, 3], 6)) //Expected [ 1, 2, 3 ]
console.log(getLastNFromArr([1, 2, 3, 4, 5, 6, 7, 8], 3)) //Expected [ 6, 7, 8 ]


/* Write a function that takes an array (a) and a value (b) as argument
The function should clean a from all occurrences of b
Return the filtered array */
function removeValueFromList(arr:any[],value:any):any[] {
    return arr.filter(char => char !== value)
}
console.log('removeValueFromList() results:')
console.log(removeValueFromList([1,2,3], 2)) //Expected [1, 3]
console.log(removeValueFromList([1,2,'2'], '2')) //Expected [1, 2]
console.log(removeValueFromList([false,'2',1], false)) //Expected ['2', 1]
console.log(removeValueFromList([1,2,'2',1], 1)) //Expected [2, '2']


/* Write a function that takes an array (a) as argument
Return the number of elements in a */
function arrLength(arr:any[]):number {
    return arr.length
}
console.log('arrLength() results:')
console.log(arrLength([1,2,2,4])) //Expected 4
console.log(arrLength([9,9,9])) //Expected 3
console.log(arrLength([4,3,2,1,0])) //Expected 5


/* Write a function that takes an array of numbers as argument
Return the number of negative values in the array */
function countNegativeValues(arr:number[]):number {
    let count:number = 0
    arr.forEach(num => num < 0 ? count+=1 : 0)
    return count
}
console.log('countNegativeValues() results:')
console.log(countNegativeValues([1,-2,2,-4])) //Expected 2
console.log(countNegativeValues([0,9,1])) //Expected 0
console.log(countNegativeValues([4,-3,2,1,0])) //Expected 1


/* Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order */
function sortArrDescend(arr:number[]):number[] {
    return arr.sort((a,b) => b-a)
}
console.log('sortArrDescend() results:')
console.log(sortArrDescend([1,3,2])) //Expected [3,2,1]
console.log(sortArrDescend([4,2,3,1])) //Expected [4,3,2,1]


/* Write a function that takes an array of strings as argument
Sort the array elements alphabetically
Return the result */
function sortArrAlphabet(arr:string[]):string[] {
    return arr.map(char => char.charCodeAt(0)).sort((a,b) => a-b).map(char => String.fromCharCode(char))
}
console.log('sortArrAlphabet() results:')
console.log(sortArrAlphabet(['b','c','d','a'])) //Expected ['a','b','c','d']
console.log(sortArrAlphabet(['z','c','d','a','y','a','w'])) //Expected ['a','a','c','d','w','y','z']


/* Write a function that takes an array of numbers as argument
It should return the average of the numbers */
function arrAverage(arr:number[]) {
    return arr.reduce((previous, current) => previous + current)/arr.length
}
console.log('arrAverage() results:')
console.log(arrAverage([10,100,40])) //Expected 50
console.log(arrAverage([10,100,1000])) //Expected 370
console.log(arrAverage([-50,0,50,200])) //Expected 50


/* Write a function that takes an array of strings as argument
Return the longest string */
function arrLongestWord(arr:string[]):string {
    let longest:string = ''
    arr.forEach(word => word.length > longest.length ? longest = word : 0)
    return longest
}
console.log('arrLongestWord() results:')
console.log(arrLongestWord(['help', 'me'])) //Expected 'help'
console.log(arrLongestWord(['I', 'need', 'candy'])) //Expected 'candy'


/* Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise */
function allEqual(arr:any[]) { 
    return new Set(arr).size === 1
}
console.log('allEqual() results:')
console.log(allEqual([true, true, true, true])) //Expected true
console.log(allEqual(['test', 'test', 'test'])) //Expected true
console.log(allEqual([1,1,1,2])) //Expected false
console.log(allEqual(['10',10,10,10])) //Expected false


/* Write a function that takes arguments an arbitrary number of arrays
It should return an array containing the values of all arrays */
function joinArrays(...arr:any[]):any[] {
    let joined:any[] = []
    for (let i = 0; i<arguments.length; i++) {
        joined.push(...arguments[i])
    }
    return joined
}
console.log('joinArrays() results:')
console.log(joinArrays([1, 2, 3], [4, 5, 6])) //Expected [1, 2, 3, 4, 5, 6]
console.log(joinArrays(['a', 'b', 'c'], [4, 5, 6])) //Expected ['a', 'b', 'c', 4, 5, 6]
console.log(joinArrays([true, true], [1, 2], ['a', 'b'])) //Expected [true, true, 1, 2, 'a', 'b']


/* Write a function that takes an array of objects as argument
Sort the array by property b in ascending order
Return the sorted array */
interface AB {
    a: number
    b: number
}
function sortByPropertyB(arr:AB[]) {
    return arr.sort((a,b) => a.b - b.b)
}
console.log('sortByPropertyB() results:')
console.log(sortByPropertyB([{a:1,b:2},{a:5,b:4}])) //Expected [{a:1,b:2},{a:5,b:4}]
console.log(sortByPropertyB([{a:2,b:10},{a:5,b:4}])) //Expected [{a:5,b:4},{a:2,b:10}]
console.log(sortByPropertyB([{a:1,b:7},{a:2,b:1}])) //Expected [{a:2,b:1},{a:1,b:7}]


/* Write a function that takes two arrays as arguments
Merge both arrays and remove duplicate values
Sort the merge result in ascending order
Return the resulting array */
function arrMergeSortRemoveDupes(arr1:number[],arr2:number[]) {
    arr1.push(...arr2)
    return Array.from(new Set(arr1)).sort((a,b) => a-b)
}
console.log('arrMergeSortRemoveDupes() results:')
console.log(arrMergeSortRemoveDupes([1,2,3], [3,4,5])) //Expected [1,2,3,4,5]
console.log(arrMergeSortRemoveDupes([-10,22,333,42], [-11,5,22,41,42])) //Expected [-11,-10,5,22,41,42,333]


/* Write a function that takes an array (a) and a number (b) as arguments
Sum up all array elements with a value greater than b
Return the sum */
function arrSumAllGreaterThan(arr:number[],n:number):number {
    return arr.filter(num => num > n).reduce((prev,curr) => prev+curr)
}
console.log('arrSumAllGreaterThan() results:')
console.log(arrSumAllGreaterThan([1, 2, 3, 4, 5, 6, 7], 2)) //Expected 25
console.log(arrSumAllGreaterThan([-10, -11, -3, 1, -4], -3)) //Expected 1
console.log(arrSumAllGreaterThan([78, 99, 100, 101, 401], 99)) //Expected 602


/* Write a function that takes two numbers (min and max) as arguments
Return an array of numbers in the range min to max */
function getRange(start:number,stop:number):number[] {
    let result:number[] = []
    for (let i = start; i<=stop; i++) { result.push(i) }
    return result
}
console.log('getRange() results:')
console.log(getRange(2, 10)) //Expected [2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(getRange(1, 3)) //Expected [1, 2, 3]
console.log(getRange(-5, 5)) //Expected [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
console.log(getRange(2, 7)) //Expected [2, 3, 4, 5, 6, 7]

/* Write a function that takes an array of strings as argument
Group those strings by their first letter
Return an object that contains properties with keys representing first letters
The values should be arrays of strings containing only the corresponding strings
For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
{ a: ['Alf', 'Alice'], b: ['Ben']} */
function groupAlphabetically(arr:string[]):{[key:string]:string[]} {
    let obj:{[key:string]:string[]} = {}
    arr.forEach(word => obj[(word[0].toLowerCase())] = [])
    arr.forEach(word => obj[(word[0].toLowerCase())].push(word))
    return obj
}
console.log('groupAlphabetically() results:')
console.log(groupAlphabetically(['Alf', 'Alice', 'Ben'])) //Expected { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(groupAlphabetically(['Ant', 'Bear', 'Bird'])) //Expected { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(groupAlphabetically(['Berlin', 'Paris', 'Prague'])) //Expected { b: ['Berlin'], p: ['Paris', 'Prague']}


/* Write a function that takes an array with arbitrary elements and a number as arguments
Return a new array, the first element should be either the given number itself
or zero if the number is smaller than 6
The other elements should be the elements of the original array
Try not to mutate the original array */
function addToArr(arr:any[], n:number) {
    let arr_copy:any[] = arr
    arr_copy.reverse()
    n < 6 ? arr_copy.push(0) : arr_copy.push(n)
    return arr_copy.reverse()
}
console.log('addToArr() results:')
console.log(addToArr([1,2,3], 6)) //Expected [6,1,2,3]
console.log(addToArr(['a','b'], 2)) //Expected [0,'a','b']
console.log(addToArr([null,false], 11)) //Expected [11,null,false]


/* Write a function that takes an array (a) and a value (n) as arguments
Save every nth element in a new array
Return the new array */
function keepEveryN(arr:any[],n:number):any[] {
    let result:any[] = []
    for (let i = 0; i<arr.length; i++) {
        if ((i+1)%n==0) {
            result.push(arr[i])
        }
    }
    return result
}
console.log('keepEveryN() results:')
console.log(keepEveryN([1,2,3,4,5,6,7,8,9,10],3)) //Expected [3,6,9]
console.log(keepEveryN([10,9,8,7,6,5,4,3,2,1],5)) //Expected [6,1]
console.log(keepEveryN([7,2,1,6,3,4,5,8,9,10],2)) //Expected [2,6,4,8,10]


/* Write a function that takes an object with two properties as argument
It should return the value of the property with key country */
interface Loc {
    country?: string
    continent?: string
    city?: string
}
const getCountry = (loc:Loc):string|undefined => loc.country
console.log('getCountry() results:')
console.log(getCountry({continent:'Asia',  country:'Japan'})) //Expected 'Japan'
console.log(getCountry({country:'Sweden',  continent:'Europe'})) //Expected 'Sweden'


/* Write a function that takes an object with two properties as argument
It should return the value of the property with key 'prop-2'
Tip: you might want to use the square brackets property accessor */
const getProp2Val = (obj:{[key:string]:any}):any => obj['prop-2']
console.log('getProp2Val() results:')
console.log(getProp2Val({  one: 1,  'prop-2': 2})) //Expected 2
console.log(getProp2Val({  'prop-2': 'two',  prop: 'test'})) //Expected 'two'


/* Write a function that takes an object with two properties and a string as arguments
It should return the value of the property with key equal to the value of the string */
const getProperty = (loc:Loc,key:string):string|undefined => loc[key as keyof Loc]
console.log('getProperty() results:')
console.log(getProperty({  continent: 'Asia',  country: 'Japan'}, 'continent')) //Expected 'Asia'
console.log(getProperty({  country: 'Sweden',  continent: 'Europe'}, 'country')) //Expected 'Sweden'


/* Write a function that takes an object (a) and a string (b) as argument
Return true if a has a property with key b
Return false otherwise */
const objContainsKey = (obj:{[key:string]:any},key:string):boolean => Object.keys(obj).includes(key)
console.log('objContainsKey() results:')
console.log(objContainsKey({a:1,b:2,c:3},'b')) //Expected true
console.log(objContainsKey({x:'a',y:'b',z:'c'},'a')) //Expected false
console.log(objContainsKey({x:'a',y:'b',z:'c'},'z')) //Expected true


/* Write a function that a string (a) as argument
Create an object that has a property with key 'key' and a value of a
Return the object */
function createObject(value:string):{[key:string]:any} {
    return {key:value}
}
console.log('createObject() results:')
console.log(createObject('a')) //Expected {key:'a'}
console.log(createObject('z')) //Expected {key:'z'}
console.log(createObject('b')) //Expected {key:'b'}


/* Write a function that takes two strings (a and b) as arguments
Create an object that has a property with key 'a' and a value of 'b'
Return the object */
function createObjectKeyVal(key:string,value:string):{[key:string]:string} {
    return {[key as keyof {[key:string]:string}]:value}
}
console.log('createObjectKeyVal() results:')
console.log(createObjectKeyVal('a','b')) //Expected {a:'b'}
console.log(createObjectKeyVal('z','x')) //Expected {z:'x'}
console.log(createObjectKeyVal('b','w')) //Expected {b:'w'}


/* Write a function that takes two arrays (a and b) as arguments
Create an object that has properties with keys 'a' and corresponding values 'b'
Return the object */
function createObjFromArrays(keys:any[],values:any[]):{[key:string]:any} {
    let obj:{[key:number|string]:any} = {}
    for (let i = 0; i<keys.length; i++) {
        obj[keys[i]] = values[i]
    }
    return obj
}
console.log('createObjFromArrays() results:')
console.log(createObjFromArrays(['a','b','c'],[1,2,3])) //Expected {a:1,b:2,c:3}
console.log(createObjFromArrays(['w','x','y','z'],[10,9,5,2])) //Expected {w:10,x:9,y:5,z:2}
console.log(createObjFromArrays([1,'b'],['a',2])) //Expected {1:'a',b:2}


/* Write a function that takes an object (a) as argument
Return an array with all object keys */
const getKeys = (obj:{[key:string]:any}):string[] => Object.keys(obj)
console.log('getKeys() results:')
console.log(getKeys({a:1,b:2,c:3})) //Expected ['a','b','c']
console.log(getKeys({j:9,i:2,x:3,z:4})) //Expected ['j','i','x','z']
console.log(getKeys({w:15,x:22,y:13})) //Expected ['w','x','y']


/* Write a function that takes an object (a) as argument
Return the sum of all object values */
const sumObjValues = (obj:{[key:string]:number}):number => Object.values(obj).reduce((prev,curr) => prev+curr)
console.log('sumObjValues() results:')
console.log(sumObjValues({a:1,b:2,c:3})) //Expected 6
console.log(sumObjValues({j:9,i:2,x:3,z:4})) //Expected 18
console.log(sumObjValues({w:15,x:22,y:13})) //Expected 50


/* Write a function that takes an object as argument
It should return an object with all original object properties
except for the property with key 'b' */
function removeBFromObj(obj:{[key:string]:any}):{[key:string]:any} {
    let obj_copy:{[key:string]:any} = obj
    delete obj_copy['b']
    return obj_copy
}
console.log('removeBFromObj() results:')
console.log(removeBFromObj({a:1,b:7,c:3})) //Expected {a:1,c:3}
console.log(removeBFromObj({b:0,a:7,d:8})) //Expected {a:7,d:8}
console.log(removeBFromObj({e:6,f:4,b:5,a:3})) //Expected {e:6,f:4,a:3}


/* Write a function that takes two objects as arguments
Unfortunately, the property 'b' in the second object has the wrong key
should be named 'd' instead
Merge both objects and correct the wrong property name
Return the resulting object
It should have the properties 'a', 'b', 'c', 'd', and 'e' */
function joinObjAndFixKey(obj1:{[key:string]:any},obj2:{[key:string]:any}):{[key:string]:any} {
    obj2['d' as keyof {[key:string]:any}] = obj2['b']
    delete obj2['b']
    return {...obj1, ...obj2}
}
console.log('joinObjAndFixKey() results:')
console.log(joinObjAndFixKey({a:1,b:2},{c:3,b:4,e:5})) //Expected { a: 1, b: 2, c: 3, e: 5, d: 4}
console.log(joinObjAndFixKey({a:5,b:4},{c:3,b:1,e:2})) //Expected { a: 5, b: 4, c: 3, e: 2, d: 1}


/* Write a function that takes an object (a) and a number (b) as arguments
Multiply all values of 'a' by 'b'
Return the resulting object */
function multiplyObjValues(obj:{[key:string]:number},n:number) {
    let keys:string[] = Object.keys(obj)
    for (let i = 0; i<keys.length; i++) {
        obj[keys[i]] *= n
    }
    return obj
}
console.log('multiplyObjValues() results:')
console.log(multiplyObjValues({a:1,b:2,c:3},3)) //Expected {a:3,b:6,c:9}
console.log(multiplyObjValues({j:9,i:2,x:3,z:4},10)) //Expected {j:90,i:20,x:30,z:40}
console.log(multiplyObjValues({w:15,x:22,y:13},6)) //Expected {w:90,x:132,y:78}


/* Write a function that takes an object as argument
Somehow, the properties and keys of the object got mixed up
Swap the Javascript object's key with its values and return the resulting object */
function swapKeysValues(obj:{[key:string|number]:any}):{[key:string|number]:any} {
    let keys:any[] = Object.keys(obj)
    let values:any[] = Object.values(obj)
    let new_obj:{[key:string|number]:any} = {}
    for (let i = 0; i<values.length; i++) {
        new_obj[values[i] as keyof {[key:string|number]:any}] = keys[i]
    }
    return new_obj
}
console.log('swapKeysValues() results:')
console.log(swapKeysValues({z:'a',y:'b',x:'c',w:'d'})) //Expected {a:'z',b:'y',c:'x',d:'w'}
console.log(swapKeysValues({2:'a',4:'b',6:'c',8:'d'})) //Expected {a:'2',b:'4',c:'6',d:'8'}
console.log(swapKeysValues({a:1,z:24})) //Expected {1:'a',24:'z'}


/* Write a function that takes an object as argument
Some of the property values contain empty strings
Replace empty strings and strings that contain only whitespace with null values
Return the resulting object */
function objReplaceEmptyString(obj:{[key:string]:string}) {//:{[key:string]:string} {
    let values:string[] = Object.values(obj)
    let keys:any[] = Object.keys(obj)
    let new_obj:{[key:string]:string|null} = obj
    for (let i = 0; i<values.length; i++) {
        if (values[i].replace(' ','').length == 0) {
            new_obj[keys[i]] = null
        }
    }
    return new_obj
}
console.log('objReplaceEmptyString() results:')
console.log(objReplaceEmptyString({a:'a',b:'b',c:''})) //Expected { a: 'a', b: 'b', c: null }
console.log(objReplaceEmptyString({ a:'',b:'b',c:' ', d:'d'})) //Expected { a: null, b: 'b', c: null, d: 'd' }
console.log(objReplaceEmptyString({ a:'a',b:'b ',c:' ',d:''})) //Expected { a: 'a', b: 'b ', c: null, d: null }


/* Write a function that takes an object as argument containing properties with personal information
Extract firstName, lastName, size, and weight if available
If size or weight is given transform the value to a string
Attach the unit cm to the size
Attach the unit kg to the weight
Return a new object with all available properties that we are interested in */
interface Person {
    fn: string
    ln: string
    age?: number
    height?: number|string
    weight?:number|string
    email?: string
}
function extractValuesAndAddUnits(person:Person):Person {
    let person_copy:Person = person
    let given_parameters = Object.keys(person_copy)
    given_parameters.includes('height') ? person_copy['height'] += 'cm' : 0
    given_parameters.includes('weight') ? person_copy['weight'] += 'kg' : 0
    Array('age', 'email').forEach(key => delete person_copy[key as keyof Person])
    return person_copy
}
console.log('extractValuesAddUnits() results:')
console.log(extractValuesAndAddUnits({fn:'Lisa',ln:'Müller',age:17,height:175,weight: 67})) //Expected {fn: 'Lisa', ln: 'Müller', height: '175cm', weight: '67kg'}
console.log(extractValuesAndAddUnits({fn:'Martin',ln:'Harper',age:26,email:'martin.harper@test.de', weight: 102})) //Expected {fn: 'Martin', ln: 'Harper', weight: '102kg'}
console.log(extractValuesAndAddUnits({fn:'Andrew',ln:'Harper',age:81,height:175,weight: 71})) //Expected {fn: 'Andrew', ln: 'Harper', height: '175cm', weight: '71kg'}
console.log(extractValuesAndAddUnits({fn:'Matthew',ln:'Müller',age:19,email:'matthew@mueller.de'})) //Expected {fn: 'Matthew', ln: 'Müller'}


/* Write a function that takes an array of objects and a string as arguments
Add a property with key 'continent' and value equal to the string to each of the objects
Return the new array of objects
Tip: try not to mutate the original array */
function addContinentKey(places:Loc[],continent:string) {
    let places_copy:Loc[] = places
    places_copy.forEach(place => place['continent'] = continent)
    return places_copy
}
console.log('addContinentKey() results:')
console.log(addContinentKey([{city:'Tokyo',country:'Japan'},{city:'Bangkok',country:'Thailand'}],'Asia')) //Expected [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
console.log(addContinentKey([{city:'Stockholm',country:'Sweden'},{city:'Paris',country:'France'}],'Europe')) //Expected [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]


/* Write a function that takes an array of numbers as argument
Convert the array to an object
It should have a key for each unique value of the array
The corresponding object value should be the number of times the key occurs within the array */
function getCount(arr:number[]):{[key:number]:number} {
    let count:{[key:number]:number} = {}
    arr.forEach(number => Object.keys(count).includes(number.toString()) ? count[number]++ : count[number] = 1)
    return count
}
console.log('getCount() results:')
console.log(getCount([1,2,2,3])) //Expected {1:1,2:2,3:1}
console.log(getCount([9,9,9,99])) //Expected {9:3,99:1}
console.log(getCount([4,3,2,1])) //Expected {1:1,2:1,3:1,4:1}


/* Write a function that takes two date instances as arguments
It should return true if the dates are equal
It should return false otherwise */
function datesEqual(date1:Date,date2:Date):boolean {
    return date1.toISOString()===date2.toISOString()
}
console.log('datesEqual() results:')
console.log(datesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) //Expected false
console.log(datesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) //Expected true
console.log(datesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) //Expected false


/* Write a function that takes two date instances as argument
It should return the number of days that lies between those dates */
function daysBetween(date1:Date,date2:Date):number {
    return Math.abs(date1.getTime()-date2.getTime()) / 3600 / 24 / 1000
}
console.log('daysBetween() results:')
console.log(daysBetween(new Date('2020-06-11'), new Date('2020-06-01'))) //Expected 10
console.log(daysBetween(new Date('2000-01-01'), new Date('2020-06-01'))) //Expected 7457


/* Write a function that takes two date instances as argument
It should return true if they fall on the exact same day
It should return false otherwise */
function sameDay(date1:Date,date2:Date):boolean {
    return date1.getDay() === date2.getDay()
}
console.log('sameDay() results:')
console.log(sameDay(new Date('2000/01/01'), new Date('2000/01/01'))) //Expected true
console.log(sameDay(new Date('2000/01/01'), new Date('2000/01/02'))) //Expected false
console.log(sameDay(new Date('2001/01/01'), new Date('2000/01/01'))) //Expected false
console.log(sameDay(new Date('2000/11/01'), new Date('2000/01/01'))) //Expected false


/* Write a function that takes two number arrays as parameters 
and return an array which contains elements from both 
arrays */
function combineArr(arr1:number[],arr2:number[]):number[] {
    arr1.push(...arr2)
    return arr1
}
console.log('combineArr() results:')
console.log(combineArr([1, 2], [3, 4]) ) //Expected [1, 2, 3, 4]
console.log(combineArr([1, 2], [3, 4, 5, 6]) ) //Expected [1, 2, 3, 4, 5, 6]


/* Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the last element */
function addStringToEndOfArr(arr:any[],str:string):any[] {
    return [...arr, str]
}
console.log('addStringToEndOfArr() results:')
console.log(addStringToEndOfArr(['Apple', 'Orange', 'Banana'], 'Kiwi')) //Expected ['Apple', 'Orange', 'Banana', 'Kiwi']


/* Write a function that takes an array and a string as parameters 
and return an array which contains all elements from the given array
and the given string as the first element */
function addStringToBeginningOfArr(arr:any[],str:string):any[] {
    return [str, ...arr]
}
console.log('addStringToBeginningOfArr() results:')
console.log(addStringToBeginningOfArr(['Apple', 'Orange', 'Banana'], 'Kiwi')) //Expected ['Apple', 'Orange', 'Banana', 'Kiwi']


/* Write a function that takes two objects as parameters 
and return an object which contains properties from both 
objects */
function joinObjects(obj1:{[key:string]:any},obj2:{[key:string]:any}):{[key:string]:any} {
    return {...obj1, ...obj2}
}
console.log('joinObjects() results:')
console.log(joinObjects({a:1,b:2},{c:3,d:4})) //Expected {a:1,b:2,c:3,d:4}
console.log(joinObjects({a:1,b:2},{c:3,d:4,e:5,f:6})) //Expected {a:1,b:2,c:3,d:4,e:5,f:6}


/* Write a function that takes an object and a string as parameters 
and return an object which contains properties from the given object
and a new property favoriteMovie with the value equal to the given string */
function addFavMovieToObj(person:{[key:string]:any},movie:string):{[key:string]:any} {
    return {...person, 'favoriteMovie':movie}
}
console.log('addFavMovieToObj() results:')
console.log(addFavMovieToObj({eyeColor: 'green', age: 10 }, 'Garfield') ) //Expected { eyeColor: 'green', age: 10, favoriteMovie:  'Garfield' }
console.log(addFavMovieToObj({eyeColor: 'blue', age: 15 }, 'Twilight') ) //Expected { eyeColor: 'blue', age: 15, favoriteMovie:  'Twilight' }