function solution(num_list) {
    const even = num_list.filter(x=>x%2===0).length;
    var answer = [];
    answer.push(even, num_list.length-even);
    return answer;
}