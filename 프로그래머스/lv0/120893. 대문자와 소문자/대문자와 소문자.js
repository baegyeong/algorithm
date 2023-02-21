function solution(my_string) {
    let answer='';
    my_string.split("").forEach(function(x){
        if(x.charCodeAt(0)>64 && x.charCodeAt(0)<91)
            answer+=(String.fromCharCode(x.charCodeAt(0)+32));
        else if(x.charCodeAt()>96 && x.charCodeAt()<123)
            answer+=(String.fromCharCode(x.charCodeAt()-32));
    })
    
    return answer;
}