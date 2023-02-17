function solution(my_string) {
    const a = [...my_string].map(x=>Number(x)).filter(Boolean);
    return a.reduce((arr,cur)=>arr+cur); 
}