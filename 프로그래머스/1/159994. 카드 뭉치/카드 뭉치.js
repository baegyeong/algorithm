function solution(cards1, cards2, goal) {
    let cards1Count = 0;
    let cards2Count = 0;
    let answer = 'Yes'
    
    goal.forEach(word=>{
        if(cards1[cards1Count]===word){
            cards1Count++;
        }else if(cards2[cards2Count]===word){
            cards2Count++;
        }else{
            answer="No"
            return false;
        }
    })
    
    return answer;

}