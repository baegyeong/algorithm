function solution(stones, k) {
    let answer = 0    
    let left=0
    let right = stones.reduce((max, cur) => Math.max(max, cur), 0)


    function canCross(mid){
        let result = 0
        let distance = 0

        for(let i=0; i<stones.length; i++){
            if(stones[i]<=mid){
                distance++
            } else{
                result = Math.max(result, distance)
                distance = 0
            }
        }        
        
        result = Math.max(result, distance)
        return result
        
    }
    
    while(left<=right){
        const mid = parseInt((left+right)/2)
        
        if(canCross(mid)<k){
            left = mid+1
        } else{
            right = mid-1
        }
    }
    
    return left
}