function solution(age) {
    const arr=['a','b','c','d','e','f','g','h','i','j'];
    return age.toString().split('').map(x=>arr[x]).join('');
}