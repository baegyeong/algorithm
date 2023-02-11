function solution(my_string, letter) {
    return [...my_string].filter(x=>x!=letter).join('');
}