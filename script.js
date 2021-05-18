//Дан массив из чисел.Сделайте из него массив, состоящий из квадратов этих чисел.
const testArray = [1, 3, 0, 5, 7, -8, 32, 5, 32, -16, 7, 5, 3];
const sqrArray = [];
testArray.forEach(function(item){
    sqrArray.push(item * item);
} )
console.log (sqrArray);

//Дан массив из чисел.Верните массив, состоящий только из уникальных значений(убрать все дубликаты, число в новом массиве не должно повторяться)
const filterArray = testArray.filter((item, index) => testArray.indexOf(item) === index);
console.log(filterArray);

//Дан массив из чисел.Проверьте то, что все элементы в массиве больше нуля.
console.log(testArray.every(item => item >= 0));
//Дан массив из чисел.Оставьте в нем только отрицательные числа
const negativeArray = testArray.filter(item => item < 0);
console.log(negativeArray);

//Дан массив из чисел.Найдите сумму этих чисел.
const sumItems = testArray.reduce((sum, currentItem) => sum + currentItem);
console.log(sumItems);

//Дан массив, в нем могут быть обычные элементы и подмассивы. Оставьте в нем только подмассивы.
const secondTestArray = [1, 2, [3, 4], 5, {a: 7}];
const subArray = secondTestArray.filter(item => Array.isArray(item));
console.log(subArray);

//Верните количество слов в строке, длина которых больше 4 символов.
const testString = 'asd rffvg asef asdasfasdf as';
const arrOfString = testString.split(' ');
const resultString = arrOfString.filter(item => item.length > 4 );
console.log(resultString.length);

//Если в строке имеется шестизначное число(ни больше, ни меньше) - верните его, как результат функции. Число может быть не отделено от других символов пробелами.
const secondTestString = 'asfsad123123456asd 888888 123 10 21 6543221534';
console.log(secondTestString.match(/(?<!\d)\d{6}(?!\d)/gmi)); 