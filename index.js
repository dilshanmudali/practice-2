// function reverse(str){
//   let newS = str.split('')
//   let revStr = ''
//   for(let char of str){
//     revStr = char + revStr
//   }
//   return revStr
// }

// reverse('hello world')


// function reverse(str){
  
//   return str.split('').reduce((revStr,char) => {
//     return char + revStr
//   }, '')

// }

// reverse('hello world')


// palindrome

// function palindrome(str){
//   let revStr = str.split('').reverse().join('');

//   return revStr === str
// }

// palindrome('racecar')

// function revInt(int){
//   let revStr = int.toString().split('').reverse().join('');

//   return parseInt(revStr) * Math.sign(int)
// }

// revInt(-521)

// function capitalize(str){
//   let newStr = str.toLowerCase().split(' ').map(function(char) {
//     return (char[0].toUpperCase() + char.slice(1))
//   }).join(' ')
//   return newStr
// } 

// console.log(capitalize('into the dark night'))


// function maxChar(str){
//   let charMap = {}
//   let counter = 0
//   let maxChar = ''

//   str.split('').map(char => {
//     if(charMap[char]){
//       charMap[char]++
//     }else{
//       charMap[char] = 1
//     }   
//   })
//   // console.log(charMap)
//   for (key in charMap){
//     if(charMap[key] > counter){
//       counter = charMap[key]
//       maxChar = key
//     }
//   }
//   return maxChar
// }

// console.log(maxChar('javascript'))//a


