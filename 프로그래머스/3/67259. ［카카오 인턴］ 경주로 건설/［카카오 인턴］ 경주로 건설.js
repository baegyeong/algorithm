function solution(board) {
    const N = board.length
    
    const queue = [[0,0,-1]]
    const directions = [[0,1],[1,0],[-1,0],[0,-1]]
    const costBoard = Array.from({length:N},()=>Array.from({length:N},()=>[Infinity, Infinity]))
    costBoard[0][0]=[0,0]
    
    let head = 0
    while(head<queue.length){
        const [x, y, dir] = queue[head++]
        
        for(const [dx, dy] of directions){
            const nx = dx+x
            const ny = dy+y
            
            if(nx<0||nx>=N||ny<0||ny>=N||board[nx][ny]===1) continue
            
            const cost = dir === -1 ? 0 : costBoard[x][y][dir]
            const nextDir = nx === x ? 1 : 0
            const newCost = nextDir === dir || dir === -1 ? cost + 100 : cost + 500 + 100
            
            if(newCost <= costBoard[nx][ny][nextDir]){
                costBoard[nx][ny][nextDir] = newCost
                queue.push([nx, ny, nextDir])
            }
        }
    }

    return Math.min(costBoard[N-1][N-1][0],costBoard[N-1][N-1][1]) 
}