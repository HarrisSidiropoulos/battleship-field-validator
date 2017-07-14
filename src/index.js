/* eslint-disable no-unused-vars, no-multi-spaces, no-param-reassign, no-console, one-var, one-var-declaration-per-line */
function findShip(x, y, field, visited, ships) {
  // should not be in contact with other ship by corner
  if (
      (field[x - 1] && (field[x - 1][y - 1] === 1 || field[x - 1][y + 1] === 1)) ||
      (field[x + 1] && (field[x + 1][y - 1] === 1 || field[x + 1][y + 1] === 1))
    ) return false;

  let k = 0, l = 0, m = 0;
  for (k = 0; k < ships.length; k += 1) {
    // horizontal
    for (l = 0; l < ships.length; l += 1) {
      if (!field[x][y + l] || field[x][y + l] === 0) break;
      // The ship cannot overlap or be in contact with any other ship
      if (l > 0 && field[x + 1] && field[x + 1][y + l] === 1) return false;
      visited[`(${x},${y + l})`] = true;
    }
    // vertical
    for (m = 0; m < ships.length; m += 1) {
      if (!field[x + m] || field[x + m][y] === 0) break;
      // The ship cannot overlap or be in contact with any other ship
      if (m > 0 && field[x + m][y + 1] === 1) return false;
      visited[`(${x + m},${y})`] = true;
    }
  }
  ships[Math.max(l, m) - 1][1] -= 1;
  return !(l > 1 && m > 1);
}
function validateBattlefield(field) {
  const ships = [[1, 4], [2, 3], [3, 2], [4, 1]];
  const visited = {};
  for (let i = 0; i < field.length; i += 1) {
    for (let j = 0; j < field[i].length; j += 1) {
      if (ships.every(val => val[1] === 0) && field[i][j] === 1) return false;
      if (!visited[`(${i},${j})`] && field[i][j] === 1) {
        if (!findShip(i, j, field, visited, ships)) return false;
      }
    }
  }
  return ships.every(val => val[1] === 0);
}

export default validateBattlefield;
