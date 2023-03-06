function solution(phone_number) {
    return phone_number.split('').reverse().splice(4,).join('').replace(/[0-9]/g,"*")+phone_number.split('').reverse().splice(0,4).reverse().join('');
}