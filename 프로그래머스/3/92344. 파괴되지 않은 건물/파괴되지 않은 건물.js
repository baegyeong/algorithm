function solution(board, skill) {
    const op = (type) => type === 1 ? -1 : 1
    const R = board.length
    const C = board[0].length
    
    const diff = Array.from({length:R+1}, ()=>Array(C+1).fill(0))
    
    for(const [type, r1, c1, r2, c2, degree] of skill){
        diff[r1][c1] += op(type) * degree
        diff[r1][c2+1] -= op(type) * degree
        diff[r2+1][c1] -= op(type) * degree
        diff[r2+1][c2+1] += op(type) * degree
    }
    
    for(let i=0; i<R; i++){
        for(let j=1; j<C; j++){
            diff[i][j] += diff[i][j-1]
        }
    }
    
    for(let j=0; j<C; j++){
        for(let i=1; i<R; i++){
            diff[i][j] += diff[i-1][j]
        }
    }
    
    for(let i=0; i<R; i++){
        for(let j=0; j<C; j++){
            board[i][j] += diff[i][j]
        }
    }

    return board.flat().filter(item=>item>0).length
}