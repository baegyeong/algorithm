function solution(board, moves) {
  const N = board.length;
  const stack = [];
    
  let flag = false;
  let answer = 0;

  for (const move of moves) {
    let idx = 0;

    while (idx < N && board[idx][move - 1] === 0) {
      idx++;
      if (idx === N) {
        flag = true;
      }
    }

    if (flag) continue;
      
    if(stack[stack.length-1] === board[idx][move-1]) {
        stack.pop()
        answer += 2
    }else{
        stack.push(board[idx][move - 1]);    
    }

    board[idx][move - 1] = 0;
  }

  return answer;
}