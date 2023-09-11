function solution(strArr) {
    return strArr.map(x=>(strArr.indexOf(x))%2===0?x.toLowerCase():x.toUpperCase())
}