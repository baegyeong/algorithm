function solution(myString) {
    return myString.split('').map(x=>x.charCodeAt()<108?x.replaceAll(x, 'l'):x).join('')
}