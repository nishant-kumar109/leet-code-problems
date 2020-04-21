function uniquePaths(m, n) {
    let dpMatrix = [];
    for(let row = 1; row<=n; row++){
        dpMatrix.push([]);
    }

    // fill out first row of dpMatrix

    for(let row=0; row < n; row++){
        dpMatrix[row][0] = 1;
    }
    // fill out first column of dp matrix

    for(let col = 0; col<m; col++){
        dpMatrix[0][col] = 1;
    }

    for(let row=1; row<n; row++){
        for(let col = 1; col<m; col++){
            dpMatrix[row][col] = dpMatrix[row][col-1] + dpMatrix[row-1][col];

        }
    }
    console.log(dpMatrix)

    return dpMatrix[dpMatrix.length-1][m-1]
}

module.exports = uniquePaths;


// time complexity = O(N*M) where N and M dimensions of matrix
// space complexity = O(N*M) dpMatrix size depends on input matrix
