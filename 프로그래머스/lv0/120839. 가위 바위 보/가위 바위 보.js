function solution(rsp) {
    var answer = '';
    rsp.split("").forEach(function(x){
        if(x==='2') answer+=0;
        else if(x==='0') answer+=5;
        else if(x==='5') answer+=2;
    })
    return answer;
}