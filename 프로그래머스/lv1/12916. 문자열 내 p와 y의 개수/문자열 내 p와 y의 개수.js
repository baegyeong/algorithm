function solution(s){
    const a = [...s.toLowerCase()].filter(x=>x==='p').length;
    const b = [...s.toLowerCase()].filter(x=>x==='y').length;
    return a===b?true:false;
}