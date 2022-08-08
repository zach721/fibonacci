/*Calculate Fibonacci numbers*/

function Fibonacci(number){
let first = 0
let second = 1
console.log('Fibbonacci secuence:')
for (let i= 0; i<number-1;i++){
    if(first==0){
        console.log(first)
    }
let third = first+second
console.log(first+second)
first = second
second = third
}}

Fibonacci(100)