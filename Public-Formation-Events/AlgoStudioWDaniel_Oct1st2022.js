// Utilities DO NOT DELETE
class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class BTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function list2str(head) {
  const parts = [];

  while (head) {
    parts.push(head.value);
    head = head.next;
  }

  return `[${parts.join(" -> ")}]`;
}

// *******************************************

/*
Go is an ancient game played on a board of 19x19 grid of lines. Black and white stones are placed on the intersections of these lines. A group of stones of one color is considered connected if each stone is adjacent to at least one other in the group either horizontally or vertically. For example, the following is a connected group:

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W W + +
3 + + + W W +
4 + + + + + +
5 + + + + + +

A group of stones is captured when all adjacent points to the group are occupied by stones of the opposite color. Unoccupied intersections adjacent to a group of stones are called liberties. While playing the game, players must keep track of their groups and their liberty counts in order to look for strong moves to play.

The previous example group of white stones has 10 liberties. If the stone at (2, 3) is removed, it would be broken into two groups. The vertical group of three has 7 liberties and the horizontal group of two has 6:

  0 1 2 3 4 5
0 + + W + + +
1 + + W + + +
2 + + W + + +
3 + + + W W +
4 + + + + + +
5 B + + + + +

Given a 19x19 board and an occupied position on the board, count the liberties for that connected group. Assume that the board is square and at most 19x19, the size of a real Go board.


*/

function countLiberties(board, row, col) {
  const color = board[row][col];
  const stack = [[row, col]];
  let liberties = 0;
  const size = board.length; // assuming square
  const checked = new Set([[row, col]]);

  function checkLocation(r, c) {
    const key = `${r},${c}`;
    if (checked.has(key)) return;
    checked.add(key);

    if (r < 0 || r >= size) return;
    if (c < 0 || c >= size) return;
    if (board[r][c] === color) stack.push([r, c]);
    if (board[r][c] === "+") liberties++;
  }

  while (stack.length > 0) {
    const [x, y] = stack.pop();

    checkLocation(x + 1, y);
    checkLocation(x - 1, y);
    checkLocation(x, y + 1);
    checkLocation(x, y - 1);
  }

  return liberties;
}

console.log(
  countLiberties(
    [
      ["+", "+", "+"],
      ["+", "W", "+"],
      ["+", "+", "+"],
    ],
    1,
    1
  ),
  4
);

console.log(
  countLiberties(
    [
      ["+", "+", "+"],
      ["+", "B", "B"],
      ["+", "+", "B"],
    ],
    1,
    1
  ),
  4
);

console.log(
  countLiberties(
    // similar to the last example, but the new stone is NOT connected
    [
      ["B", "+", "+"],
      ["+", "B", "B"],
      ["+", "+", "B"],
    ],
    1,
    1
  ),
  4
);

console.log(
  countLiberties(
    [
      ["W", "+", "W"],
      ["W", "B", "B"],
      ["W", "W", "B"],
    ],
    1,
    1
  ),
  1
);
