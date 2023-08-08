function solution(a, b) {
    let x = 0;
    let y = 0;
    let answer = 0;
    if(a>b){
        x=a;
        y=b;
    }else{
        x=b;
        y=a;
    }
    for(let i=y; i<=x; i++){
        answer += i;
    }
    return answer;
    
}