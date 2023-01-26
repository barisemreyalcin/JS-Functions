// 1. Print the word as many times as specified 
function Print(word, times){
    for(i=1; i<=times; i++){
        console.log(word);
    }
}
Print("Kobe", 3);


// 2. Write a function that compute the area and perimeter of a rectangle.
function areaPerimeter(length, height){
    let area = length * height;
    let perimeter = 2 * (length + height);

    return `Area: ${area}, Perimeter: ${perimeter}`;
}
let result = areaPerimeter(5, 8);
console.log(result);


// 3. Heads and Tails Function
function tossCoin() {
    let random = Math.random();
    if(random < 0.5){
        console.log("Tail")        
    }else{
        console.log("Head")
    }
    console.log(random);
}
tossCoin();


// 4. Write a function that prints sub-multipliers of entered number
function subMultip(number) {
    let subMultips = [];
    
    for(let i=1; i <= number; i++){
        if(number % i ==0) {
            subMultips.push(i);
        }
    }

    return subMultips;
}
console.log(subMultip(24));


// 5. Define a function called "sum" that can be take changeable number of parameters.
function sum() {
    let result = 0;

    for(i=0; i<arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}
console.log(sum(6, 8, 4, 44));