function solution(n, w, num) {
    const arr = []
    let j
    let answer = 0
    
    for(let i=1; i<=n; i+=w){
        let newBox = Array.from({length: w},(_,idx)=>i+idx)
        
        if(arr.length%2===1) newBox = newBox.reverse()
        
        if(newBox.includes(num)){
            j = newBox.indexOf(num)
        }
        
        arr.push(newBox)
    }
    
    arr[arr.length-1] = arr[arr.length-1].map(item=>item<=n ? item : 0)
    
    for(let i=0; i<arr.length; i++){
        if(num < arr[i][j]){
            answer++
        }
    }
    
    return answer+1
}