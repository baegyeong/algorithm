function solution(my_string, n) {
    var answer = '';
    my_string.split('').forEach(function(x){
        for(let i=0; i<n; i++)
            answer += x;
    })
    return answer;
}