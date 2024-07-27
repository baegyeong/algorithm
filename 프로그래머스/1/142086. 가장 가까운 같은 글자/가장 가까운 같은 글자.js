function solution(s) {
    return [...s].map((element, index)=>{
        const num = [...s].slice(0,index).lastIndexOf(element)
        return num===-1?num:index-num
    })
}