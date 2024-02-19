function solution(n, edge) {
    let visited = new Array(n+1).fill(false)
    let vertex = Array.from({length:n+1}, ()=>[])
    let result = new Array(n+1).fill(0);
    let queue = [];
    edge.sort((a,b)=>a[1]-b[1])
    
    for(let i = 0; i < edge.length; i++) {
        let index = edge[i][0];
        let value = edge[i][1];

        vertex[index].push(value);
        vertex[value].push(index);
    }

    bfs(1)
    
    function bfs(x){
        queue.push(x)
        visited[x]=true;
        while(queue.length!==0){
            let y = queue.shift();
            for(let i of vertex[y]){
                if(!visited[i]){
                    result[i]=result[y]+1
                    queue.push(i)
                    visited[i]=true
                }
            }
        }
    }
        
    const max = Math.max(...result)
    const count = result.filter(x=>x===max).length
    return count;
}

