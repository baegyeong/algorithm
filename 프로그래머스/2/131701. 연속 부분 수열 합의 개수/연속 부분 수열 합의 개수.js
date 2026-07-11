function solution(elements) {
    const N = elements.length;
    const answer = new Set();

    for (let len = 1; len <= N; len++) {
        let sum = 0;
        for (let k = 0; k < len; k++) sum += elements[k];
        answer.add(sum);

        for (let start = 1; start < N; start++) {
            sum += elements[(start + len - 1) % N] - elements[start - 1];
            answer.add(sum);
        }
    }

    return answer.size;
}