function solution(sequence, k) {
    let sum = 0, j =0, minDistance = Infinity
    let result = []
    
    for(let i=0; i<sequence.length; i++){
        while(sum<k){
            sum += sequence[j++]
        }
        
        let distance = j - i
        
        if(sum === k){
            if(minDistance > distance) {
                minDistance = distance
                result = [i, j-1]
            }
        }
        
        sum -= sequence[i]
    }
    
    return result
}