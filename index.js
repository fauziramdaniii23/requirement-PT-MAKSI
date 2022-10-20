console.log ('hello world!');

for(let i=1; i<11; i++){
    console.log(i);
}

function isPrime(n) {
    if (n < 2)
    return `${n} is not a prime number`

    for (let i=2; i < n; i++){
        if (n%i === 0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}
console.log(isPrime(23));

function isNumber(n){
    if (n>0){
        return `${n} The number is positive`
    }
    else if(n === 0){
        return `${n} The number is zero`
    }
    else {
        return `${n} The number is negative`
    }
}
console.log(isNumber(5));

let text = "hello world";
let upperCaseText = text.toLocaleUpperCase()
console.log(upperCaseText)

let kata = "hello world";
let karakter = kata.charAt(9);
console.log(karakter);

let kataa = ["H","E","L","L","O"];
for(const kataini of kataa){
console.log(kataini);
}

const nilai =[5, 9, 13, 43, 2, 7];
const nilaiTerendah = Math.min(...nilai);
console.log(nilaiTerendah);

let angka = [5, 9, 13, 43, 2, 7];
let total = 0;
for(i=0; i<angka.length; i++){
    total += angka[i]
}
console.log(total);

let arr =[5, 9, 13, 43, 2, 7];
let arry = arr.sort(function(a,b){
    return a-b;
})
console.log(arry);
