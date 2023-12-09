function solution(arr1, arr2) {
    return arr1.map((x,index)=>x.map((x,idx)=>x+arr2[index][idx]));
}