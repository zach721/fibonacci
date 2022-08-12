
function Fibonacci(number:number){
    let first:number = 0
    let second:number = 1
    console.log('Fibbonacci secuence:')
    for (let i:number= 0; i<number-1;i++){
        if(first==0){
            console.log(first)
        }
    let third:number = first+second
    console.log(first+second)
    first = second
    second = third
    }}
    
    export default Fibonacci