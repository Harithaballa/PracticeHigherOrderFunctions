function getSquareValue(numbers){
    return numbers.map( num => num*num );
}

function isPrime(num){
    if(num<2)
        return true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0)
            return false;
    }
    return true;
}

function getPrimeNumbers(numbers){
    return numbers.filter(num => isPrime(num))
}

function getSum(numbers){
    return numbers.reduce((num,sum) => sum+=num,0)
}

function printValues(numbers){
    console.log("Printing array values")
    return numbers.forEach(num => {
        console.log(num);
    });
    
}

let numbers=[1,3,4,7,9,11,15];

//filtering prime numbers from array
numbers= getPrimeNumbers(numbers);
printValues(numbers);

//getting sqaure of every element in array
numbers= getSquareValue(numbers);
printValues(numbers);

//finding sum of square of prime numbers 
let sum=getSum(numbers);
console.log(sum);


