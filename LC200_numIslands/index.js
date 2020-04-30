function numIslands(grid) {
    let count = 0;
    for(let row=0; row<grid.length; row++){
        for(let col=0; col < grid[0].length; col++){
            if(grid[row][col]==="1"){
            count++;
            dfs(grid, row, col);
        }
    }
  }

  function dfs(grid, row, col){
      if(
          row < 0 ||
          row >= grid.length ||
          col < 0 ||
          col >= grid[0].length ||
          grid[row][col] === '0'
          ){
              return;
          }
  grid[row][col] = "0";
  dfs(grid, row-1, col);
  dfs(grid, row+1, col);
  dfs(grid, row, col-1);
  dfs(grid, row, col+1);

  }
  return count;
}
// Time compexity = O(N*M)  IF WE DEFINE N AND M AS HEIGHT AND WIDTH
// OTHERWISE O(N) IF WE DEFINE N AS NUMBER OF CELLS IN MATRIX.
// Space complexity = O(1)
module.exports = numIslands;
