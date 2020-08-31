// Given a board of stacked cubes, this function will calculate the surface area.
// The function takes in A - an array of cube heights for each position of the board.
// H = height of the board.
// W = width of the board.

function surfaceArea(A, H, W) {

    let currentCubeSurface = 0;
    let totalCubeSurface = 0;
    let heightDiff = 0

    for (let colI = 0; colI < H; colI++) {
        for (let rowI = 0; rowI < W; rowI++) {
            currentCubeSurface = (A[colI][rowI] * 4) + 2;

            // Check left
            checkNeighbourLeftRight(0, -1);
            // Check right
            checkNeighbourLeftRight(0, +1);
            // Check down
            checkNeighbourUpDown(+1, 0);
            // Check up
            checkNeighbourUpDown(-1, 0);


            function checkNeighbourLeftRight(plusMinusA, plusMinusB) {
                if (A[colI + plusMinusA][rowI + plusMinusB] != undefined) {
                    heightDiff = A[colI + plusMinusA][rowI + plusMinusB];
                    if (A[colI + plusMinusA][rowI + plusMinusB] > A[colI][rowI]) {
                        heightDiff = A[colI][rowI];
                    }
                    currentCubeSurface -= heightDiff;
                }
            }

            function checkNeighbourUpDown(plusMinusA, plusMinusB) {
                if (A[colI + plusMinusA] != undefined) {
                    heightDiff = A[colI + plusMinusA][rowI + plusMinusB];
                    if (A[colI + plusMinusA][rowI + plusMinusB] > A[colI][rowI]) {
                        heightDiff = A[colI][rowI];
                    }
                    currentCubeSurface -= heightDiff;
                }
            }

            totalCubeSurface += currentCubeSurface;
        }
    }

    return totalCubeSurface;
}
