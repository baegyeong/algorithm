function solution(s) {
    s = s.split(' ').map(x=>x*1).sort((a,b)=>a-b);
    return `${s.shift()} ${s.pop()}`;
    
}