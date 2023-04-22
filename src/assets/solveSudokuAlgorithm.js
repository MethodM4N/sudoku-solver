// Проверяем решена ли уже задача, если решена возвращаем решение
// если нет ищем решение, проверяем задачу на валидность
function solveSudokuAlgorithm(board) {
  if (solvedSudoku(board)) {
    return board;
  } else {
    const possibilities = solveBoards(board);
    const validBoards = checkValid(possibilities);
    return searchForSolution(validBoards);
  }
}

// Бэктрэк решение
function searchForSolution(boards) {
  if (boards.length === 0) {
    return false;
  } else {
    let first = boards.shift();
    const attempt = solveSudokuAlgorithm(first);
    if (attempt) {
      return attempt;
    } else {
      return searchForSolution(boards);
    }
  }
}

// Проверяем решена задача, все ячейки заполнены числами?
function solvedSudoku(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

// Находим первую пустую ячейку и пробуем подставить туда числа от 1-9
function solveBoards(board) {
  let res = [];
  const firstEmpty = findEmptySquare(board);
  if (firstEmpty !== undefined) {
    const y = firstEmpty[0];
    const x = firstEmpty[1];
    for (let i = 1; i <= 9; i++) {
      let newBoard = [...board];
      let row = [...newBoard[y]];
      row[x] = i;
      newBoard[y] = row;
      res.push(newBoard);
    }
  }
  return res;
}

// Ищем первую пустую ячейку, возвращаем её x и y координаты
function findEmptySquare(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
}

// Проверяем задачу на валидность
function checkValid(boards) {
  let res = [];
  for (let i = 0; i < boards.length; i++) {
    if (validateRows(boards[i]) && validateColumns(boards[i]) && validateBoxes(boards[i])) {
      res.push(boards[i]);
    }
  }
  return res;
}

// Проверяем повторяются ли числа в строке
function validateRows(board) {
  for (let i = 0; i < 9; i++) {
    let cur = [];
    for (let j = 0; j < 9; j++) {
      if (cur.includes(board[i][j])) {
        return false;
      } else if (board[i][j] !== 0) {
        cur.push(board[i][j]);
      }
    }
  }
  return true;
}

// Проверяем повторяются ли числа в столбце
function validateColumns(board) {
  for (let i = 0; i < 9; i++) {
    let cur = [];
    for (let j = 0; j < 9; j++) {
      if (cur.includes(board[j][i])) {
        return false;
      } else if (board[j][i] !== 0) {
        cur.push(board[j][i]);
      }
    }
  }
  return true;
}

// Инициализируем 3х3 квадраты и проверяем повторяются ли в них числа
function validateBoxes(board) {
  const initialBox = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];
  for (let y = 0; y < 9; y += 3) {
    for (let x = 0; x < 9; x += 3) {
      let cur = [];
      for (let i = 0; i < 9; i++) {
        let coordinates = [...initialBox[i]];
        coordinates[0] += y;
        coordinates[1] += x;
        if (cur.includes(board[coordinates[0]][coordinates[1]])) {
          return false;
        } else if (board[coordinates[0]][coordinates[1]] !== 0) {
          cur.push(board[coordinates[0]][coordinates[1]]);
        }
      }
    }
  }
  return true;
}

export default solveSudokuAlgorithm;
