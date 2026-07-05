function solution(people, limit) {
    people.sort((a,b)=>a-b)
    
    let answer = 0
    let left = 0, right = people.length-1
    let sum =0

    while(left <= right){
        if(people[left] + people[right]<=limit){
            left++
            right--
            answer++
        }else{
            right--
            answer++
        }
    }

    return answer
}