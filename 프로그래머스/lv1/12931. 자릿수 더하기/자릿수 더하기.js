function solution(n)
{
    return n.toString().split('').map(x=>x*1).reduce((arr,cur)=>arr+cur);
}