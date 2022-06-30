/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/*
ooooo
xxoxx
ooooo
*/

function cleanRoom(robot) {
    const key = (x, y) => [x, y].join(',');
    const visited = {};
    let direction = 0; // 0 up, 1 right, 2 down, 3 left
    const deltas = [
      [0, 1] // up
      [1, 0], // right
      [0, -1], // down
      [-1, 0], // left
    ];
  
    function changeDirection(newDir) {
      newDir = newDir % 4;
      while (direction !== newDir) {
        robot.turnRight();
        direction = (direction + 1) % 4;
      }
    }
  
  
    function cleanPosition(x, y) {
      // base case (gonna deal with this below)
      robot.clean();
      visited[key(x, y)] = true;
  
      // loop through possible adjacent positions that are not yet visited
      for (let i = 0; i < deltas.length; i++) {
        //   compute new possible position
        const [dx, dy] = deltas[i];
        const newX = x + dx;
        const newY = y + dy;
  
        //   if the new position is visited, continue (don't visit)
        if (visited[key(newX, newY)]) continue;
        //   try and move to the new position (turn?)
        changeDirection(i);
  
        //   if move was successful
        if (robot.move()) {
          cleanPosition(newX, newY);
          //      move back
          changeDirection((i + 2) % 4);
          robot.move();
        } else {
          //      mark this spot as visited
          visited[key(newX, newY)] = true;
        }
      }
    }
  
    cleanPosition(0, 0);
  }