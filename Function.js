// Functions  --- Not repeats Code


function SayHello() {
    console.log("Hello From JavaScript");
}
SayHello();




/* function SayHello() {
   a = prompt("Enter  Your Name");
    console.log(a);
}
SayHello(); */ 



 function calc(...numbers) { // array of numbers
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }
    return result;
}
console.log(10,20,30,40); 