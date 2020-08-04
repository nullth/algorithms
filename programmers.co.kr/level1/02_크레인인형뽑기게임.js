function solution(board, moves) {
  let result = 0;
  let size = board.length;
  let num = 0;
  let pocket = [];

  moves.forEach((move) => {
    let cnt = 0;
    while (true) {
      if (board[cnt][move - 1] !== 0) {
        if (pocket.length !== 0 && pocket[pocket.length - 1] === board[cnt][move - 1]) {
          pocket.pop();
          result += 2;
        } else {
          pocket.push(board[cnt][move - 1]);
        }
        board[cnt][move - 1] = 0;
        break;
      }
      cnt++;
      if (cnt === size) break;
    }
  });
  return result;
}
