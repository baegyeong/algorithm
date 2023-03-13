function solution(sizes) {
    for(let i in sizes)
        if(sizes[i][0]>sizes[i][1])
            [sizes[i][1], sizes[i][0]] = [sizes[i][0], sizes[i][1]];
    let arr = sizes.map(x=>x[0]*1).sort((a,b)=>b-a);
    let arr_2 = sizes.map(x=>x[1]*1).sort((a,b)=>b-a);
    return arr[0]*arr_2[0];
    
}