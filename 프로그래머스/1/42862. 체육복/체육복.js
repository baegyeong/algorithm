function solution(n, lost, reserve) {
    let answer = 0;
    let visited = new Array(n).fill(false)
    
    let common = lost.filter((x) => reserve.includes(x));
    lost = lost.filter((x) => !common.includes(x));
    reserve = reserve.filter((x) => !common.includes(x));
    lost = lost.sort((a,b)=>a-b)
    
    const lostLen = lost.length;
    const reserveLen = reserve.length;
    const notLost = n-lost.length

    for(let i=0; i<lostLen; i++){
        const back = lost[i]-1;
        const prev = lost[i]+1;
        if(reserve.includes(back)&&!visited[back-1]){
            visited[back-1]=true;
            answer++;
        }
        else if(reserve.includes(prev)&&!visited[prev-1]){
            visited[prev-1]=true;
            answer++;
        }

    }
    
    return answer+notLost;
}
