function solution(num_list) {
    let a = 0;
    let b = 0;
    
    num_list = num_list.map(x=>x.toString())
    a = Number(num_list.filter(x=>x%2===1).reduce((a,b)=>a+b));
    b = Number(num_list.filter(x=>x%2===0).reduce((a,b)=>a+b));
    return a+b;
}