function solution(arr, k) {
    return !(k%2)?arr.map(x=>x+k):arr.map(x=>x*k);
}