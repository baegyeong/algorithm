function solution(arr1, arr2) {
    const arr1_len = arr1.reduce((a,b)=>a+b)
    const arr2_len = arr2.reduce((a,b)=>a+b)
    if(arr1.length===arr2.length){
        return arr1_len>arr2_len?1:arr1_len===arr2_len?0:-1;
    }else if(arr1.length>arr2.length){
        return 1;
    }else return -1;
}