function solution(n, infection, edges, k) {
    let max = 0
    const pipes = new Set(edges.map(edge => edge[2]))
    
    function dfs(pipe, count, virus){
       if(count === k) {
            max = Math.max(max, virus.size)   
           return
       }
        
        const openPipe = edges.filter(edge => edge[2] === pipe)
        const samePipe = []
        for(const target of openPipe){
            const [x, y] = target

            const idxX = samePipe.findIndex(item => item.has(x))
            const idxY = samePipe.findIndex(item => item.has(y))

            if(idxX === -1 && idxY === -1){
                samePipe.push(new Set([x, y]))
            } else if(idxX === -1){
                samePipe[idxY].add(x)
            } else if(idxY === -1){
                samePipe[idxX].add(y)
            } else if(idxX !== idxY){
                const merged = new Set([...samePipe[idxX], ...samePipe[idxY]])
                samePipe.splice(Math.max(idxX, idxY), 1)
                samePipe.splice(Math.min(idxX, idxY), 1)
                samePipe.push(merged)
            }
        }
        
        const addVirus = []
        
        for(const node of virus){
            samePipe.forEach(pipe => {
                if(pipe.has(node)){
                    addVirus.push(...pipe)
                }
            })
        }
        
        if(addVirus.length === 0) return
     
        for(const pipe of pipes){
            count += 1
            let newVirus = new Set([...virus].concat(addVirus))
            
            dfs(pipe, count, newVirus)
            
            count -= 1
        }
    }
    
    for(const pipe of pipes) {
        dfs(pipe, 0, new Set([infection]))
    }
    
    return max
}