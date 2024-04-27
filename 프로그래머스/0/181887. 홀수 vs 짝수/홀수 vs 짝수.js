function solution(num_list) {
    const evenArr = num_list.filter((x,idx)=>idx%2===0)
    const oddArr = num_list.filter((x, idx)=>idx%2===1)
    const even = evenArr.reduce((a,b)=>a+b)
    const odd = oddArr.reduce((a,b)=>a+b)
    
    return Math.max(even,odd)
}