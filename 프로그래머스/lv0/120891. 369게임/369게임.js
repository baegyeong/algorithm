function solution(order) {
    return [...order.toString()].filter(x=>x==='3'||x==='6'||x==='9').length;
}