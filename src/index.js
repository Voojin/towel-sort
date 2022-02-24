// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) return [];

  let resultArr = [];
  
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 === 0){
      resultArr.push(...matrix[i]);
     } else {
      for(let j = matrix[i].length - 1; j >= 0; j--)
        resultArr.push(matrix[i][j]);
    }
  }
  return resultArr;
}