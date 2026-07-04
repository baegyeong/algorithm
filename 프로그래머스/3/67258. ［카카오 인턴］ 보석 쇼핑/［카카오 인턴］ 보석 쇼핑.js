function solution(gems) {
    const gemsSet = new Set(gems)
    const size = gemsSet.size
    
    const gemsCount = {}
    
    for(const gem of gemsSet){
        gemsCount[gem] = 0
    }
    
    let j = 0
    let answer = []
    let minDistance = Infinity
    
    let jewelryCount = 0
    
    for(let i=0; i<=gems.length-size; i++){    
        while(jewelryCount < size && j < gems.length){
            if(gemsCount[gems[j]] === 0){
                jewelryCount++
            }
            gemsCount[gems[j++]] += 1
        }
        
        if(jewelryCount < size && j === gems.length) break;

        const distance = j - i
        if(minDistance > distance){
            minDistance = distance
            answer = [i+1, j]
        }

        gemsCount[gems[i]] -= 1
        if(gemsCount[gems[i]] === 0){
            jewelryCount--
        }
    }
    
    return answer
}