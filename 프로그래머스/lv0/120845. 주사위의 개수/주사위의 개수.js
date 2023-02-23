function solution(box, n) {
    return box.map(x=>parseInt(x/n)).reduce((arr,cur)=>arr*cur);
}