function solution(order) {
    const stack = [];
    let current = 1;
    let answer = 0;

    for (const target of order) {
        while (current <= target) {
            stack.push(current++);
        }

        if (stack[stack.length - 1] !== target) {
            break;
        }

        stack.pop();
        answer++;
    }

    return answer;
}