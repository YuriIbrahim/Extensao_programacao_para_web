const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
  const matrizB = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  
  function multiplicarMatrizes(matrizA, matrizB) {
    const linhasA = matrizA.length;
    const colunasA = matrizA[0].length;
    const linhasB = matrizB.length;
    const colunasB = matrizB[0].length;
  
    if (colunasA !== linhasB) {
      return "Não é possível calcular. O número de colunas de A deve ser igual ao número de linhas de B.";
    }
  
    const resultado = [];
  
    for (let i = 0; i < linhasA; i++) {
      resultado[i] = [];
      for (let j = 0; j < colunasB; j++) {
        resultado[i][j] = 0;
        for (let k = 0; k < colunasA; k++) {
          resultado[i][j] += matrizA[i][k] * matrizB[k][j];
        }
      }
    }
  
    return resultado;
  }
  
  const matrizC = multiplicarMatrizes(matrizA, matrizB);
  
  if (typeof matrizC === "string") {
    console.log(matrizC); 
  } else {
    console.log("Matriz C (Resultado da multiplicação AxB):");
    for (let i = 0; i < matrizC.length; i++) {
      console.log(matrizC[i]);
    }
  }
  