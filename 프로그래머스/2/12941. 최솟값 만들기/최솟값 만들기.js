function solution(A,B){
    A = A.sort((a,b)=>b-a);
    B = B.sort((a,b)=>a-b);

    return A.map((item,index)=>item*B[index]).reduce((acc,cur)=>acc+cur)
}