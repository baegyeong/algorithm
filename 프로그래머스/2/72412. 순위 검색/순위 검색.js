function solution(info, query) {
    const answer = []
    const queries = query.map(item => item.split(" ").filter(item => item !== "and"))
    const dataMap = new Map()
    
    function getCombinations(attrs) {
        if (attrs.length === 0) return [[]]

        const [first, ...rest] = attrs
        const subCombinations = getCombinations(rest)

        return subCombinations.flatMap(combo => [
            [first, ...combo],
            ["-", ...combo]
        ])
    }

    info.forEach(item => {
        const itemArr = item.split(" ")
        const score = +itemArr.pop()

        getCombinations(itemArr).forEach(combo => {
            const key = combo.join("/")
            const arr = dataMap.get(key) ?? []
            arr.push(score)
            dataMap.set(key, arr)
        })
    })
    
    dataMap.forEach((value, key)=>dataMap.set(key, value.sort((a,b)=>a-b)))
    
    queries.forEach(item=>{
        const base = +item.pop()
        const scores = dataMap.get(item.join("/"))
        if (!scores) { 
            answer.push(0)
            return 
        }
        
        let left = 0, right = scores.length-1
        
        while(left<right){
            let mid = parseInt((left+right)/2)
            if(base>scores[mid]){
                left = mid +1   
            }else{
                right=mid
            }
        }
        
        answer.push(scores[right] >= base ? scores.length - right : 0)
    })
    
    return answer
}