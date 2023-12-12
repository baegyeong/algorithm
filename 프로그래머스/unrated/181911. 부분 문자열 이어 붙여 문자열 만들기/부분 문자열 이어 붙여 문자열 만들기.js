function solution(my_strings, parts) {
    const answer = my_strings.map((x,idx)=>x.slice(parts[idx][0],parts[idx][1]+1)).join('')
    return answer;
}