function solution(arr, n) {
    let len = arr.length
    let isEven =(x)=> x%2===0

    if(isEven(len)){
        arr = arr.map((x,idx)=>!isEven(idx)?x+n:x)
    }else{
        arr = arr.map((x,idx)=>isEven(idx)?x+n:x)
    }
    
    return arr;
}