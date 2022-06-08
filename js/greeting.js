// 1
const name = prompt('Как вас зовут?');
alert('Привет! ' + name);


// 2
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];

if (arr1.length > arr2.length) {
    console.log('arr1 больше чем arr2')
}else if (arr1.length < arr2.length) {
    console.log('arr2 больше чем arr1')
}

// 3
const color = 'зеленый'
switch (color) {
    case 'красный':
        console.log('проход закрыт');
        break;
    case 'желтый':
        console.log('подождите еще немного')
        break;
    case 'зеленый':
        console.log('проход разрешен')
        break;
}


// 4
const arr = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]];
console.log( arr[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0] );


