function solution(arr) {
    const arr2 = arr.slice();
    const min = (arr2.sort((a,b)=>a-b).splice(0,1)+'')*1;
    const x = arr.indexOf(min);
    arr.splice(x,1)
    return arr.length>0?arr:[-1];
}