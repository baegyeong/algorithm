function solution(m, n, h, w, drops) {
    const desertMap = Array.from({ length: m }, () => Array(n).fill(Infinity))
    const rainW = Array.from({length: m }, () => Array(n-w+1).fill(Infinity))
    const rainH = Array.from({length: m-h+1 }, () => Array(n-w+1).fill(Infinity))
    
    for(let i = 0; i < drops.length; i++) {
        const [x, y] = drops[i]
        desertMap[x][y] = i + 1
    }
    
    let maxRainDrop = 0;
    let result = []
    
    for (let i = 0; i < m; i++) {
        const dq = [];
        let head = 0;

        for (let j = 0; j < n; j++) {

            while (
                dq.length > head &&
                desertMap[i][dq[dq.length - 1]] >= desertMap[i][j]
            ) {
                dq.pop();
            }

            dq.push(j);

            while (
                dq.length > head &&
                dq[head] <= j - w
            ) {
                head++;
            }

            if (j >= w - 1) {
                rainW[i][j - w + 1] = desertMap[i][dq[head]];
            }
        }
    }
    
    for (let i = 0; i <= n - w; i++) {
        const dq = [];
        let head = 0;

        for (let j = 0; j < m; j++) {

            while (
                dq.length > head &&
                rainW[dq[dq.length - 1]][i] >= rainW[j][i]
            ) {
                dq.pop();
            }

            dq.push(j);

            while (
                dq.length > head &&
                dq[head] <= j - h
            ) {
                head++;
            }

            if (j >= h - 1) {
                rainH[j - h + 1][i] = rainW[dq[head]][i];
            }
        }
    }
    
    let best = -1;
    let answerR = -1;   
    let answerC = -1;
    
    
    for (let r = 0; r < rainH.length; r++) {
      for (let c = 0; c < rainH[0].length; c++) {
        if (rainH[r][c] > best) {
          best = rainH[r][c];
          answerR = r;
          answerC = c;
        }
      }
    }
    
    return [answerR, answerC]
}