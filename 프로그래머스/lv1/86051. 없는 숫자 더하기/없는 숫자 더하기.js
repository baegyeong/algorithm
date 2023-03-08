function solution(numbers) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.forEach(x=>arr.splice(arr.indexOf(x),1));
    return arr.reduce((arr,cur)=>arr+cur);
}