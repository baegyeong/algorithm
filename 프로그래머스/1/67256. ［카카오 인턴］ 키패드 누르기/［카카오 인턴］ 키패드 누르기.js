function solution(numbers, hand) {
    let answer = ""
    const keypad = [[1,2,3],[4,5,6],[7,8,9],["*",0,"#"]]
    
    const R = keypad.length
    const C = keypad[0].length
    
    function findPosition(num){
        for(let i=0; i<keypad.length; i++){
            for(let j=0; j<keypad[0].length; j++){
                if(keypad[i][j]===num){
                    return [i, j]
                }
            }
        }
    }
    
    let left = findPosition("*")
    let right = findPosition("#")
    
    const directions = [[0,1],[1,0],[-1,0],[0,-1]]
    
    function calculateDist(start, end){
        const queue = [[...start, 0]]
        
        while(queue.length){
            const [x,y, dist] = queue.shift()
            
            if(x===end[0] && y === end[1]) return dist
        
            for(const [dx,dy] of directions){
                const nx = dx+x
                const ny = dy+y

                if(nx<0||nx>=R||ny<0||ny>=C) continue;
                queue.push([nx,ny,dist+1])
            }
        }
    }
    
    
    for(let num of numbers){
        if([1, 4, 7].includes(num)) {
            answer += "L"
            left = findPosition(num)
        } else if([3, 6, 9].includes(num)){
            answer += "R"
            right = findPosition(num)
        } else {
            const numPosition = findPosition(num)
            
            const leftDist = calculateDist(numPosition, left)
            const rightDist = calculateDist(numPosition, right)
            
            if(leftDist > rightDist){
                answer += "R"
                right = numPosition
            }else if(leftDist < rightDist){
                answer += "L"
                left = numPosition
            }else {
                if(hand==="left"){
                    answer += "L"
                    left = numPosition
                }else {
                    answer +="R"
                    right = numPosition
                }
            }
        }
    }
    
    return answer
}