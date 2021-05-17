const testArray = [1,3,0,5,7,-8,32,5,32,-16,7,5,3];
//1
const sqrArray = [];
testArray.forEach(function(item){
    sqrArray.push(item*item);
} )
console.log (sqrArray);
//2
const filterArray = testArray.filter((item,index) => testArray.indexOf(item) == index);
console.log(filterArray);
//3
console.log(testArray.every(item => item >= 0));
//4
const negativeArray = testArray.filter(item => item < 0);
console.log(negativeArray);
//5
const sumItems = testArray.reduce((sum,currentItem)=>sum+currentItem);
console.log(sumItems);
//6
const secondTestArray = [1, 2, [3, 4], 5, {a: 7}];
const subArray = secondTestArray.filter(item => Array.isArray(item));
console.log(subArray);
//7
const testString = 'asd rffvg asef asdasfasdf as';
let arrOfString = testString.split(' ');
let resultString = arrOfString.filter(item => item.length > 4 );
console.log(resultString.length);
//8
let secondTestString = 'asfsad123123456asd 888888 123 10 21 6543221534';
console.log(secondTestString.match(/(?<!\d)\d{6}(?!\d)/gmi)); 