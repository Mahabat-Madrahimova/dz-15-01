function numbers(number1, number2) {
    if(number1 < number2) {
        console.log("первое число меньше");
    }else if (number1 > number2) {
        console.log("второе число меньше");
    }else if (number1 == number2) {
        console.log("они равны");
    }
};

const numb1 = prompt("1")
const numb2 = prompt("2")

numbers(numb1, numb2)

function countChar(pl) {
    console.log(pl.length);
}
const n1 = prompt("")

countChar(n1)
