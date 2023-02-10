function solution(sides) {
    let max = sides[0]>sides[1]?sides[0]:sides[1];
    max = max>sides[2]?max:sides[2];
    const sum = sides.reduce((arr,cur)=>arr+cur);
    if(sum-max>max)
        return 1;
    else return 2;
}