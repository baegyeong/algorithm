function solution(absolutes, signs) {
    for(let i=0; i<absolutes.length; i++){
        if(!signs[i]){
            absolutes[i]=-absolutes[i]
        }else continue;
    }
    return absolutes.reduce((a,b)=>a+b);
}