function printDigits (num){
    let reverse = 0
    let remainder = 0
    while (num > 0){
         remainder = num % 10
         reverse = (reverse * 10) + remainder
         num = num/10|0
    }
    console.log(reverse)
}
   
printDigits(1234)


// function printDigits(num){
//     num = num + " "
//     return num.split("").reverse().join("")
// }

// console.log(printDigits(1234))