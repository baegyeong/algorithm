function solution(citations) {
    citations.sort((a,b)=>a-b)
    const N = citations.length
    let left=0, right=N
    
    while(left<right){
        const mid = Math.ceil((left+right)/2)

        const len = citations.filter(item=>item>=mid).length
        if(len >= mid) left = mid
        else right = mid-1
    }
    
    return left
}