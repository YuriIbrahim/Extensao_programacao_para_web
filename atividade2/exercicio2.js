
const matrizA = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  
  function calcularTransposta(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const transposta = [];
  
    for (let i = 0; i < colunas; i++) {
      transposta[i] = [];
      for (let j = 0; j < linhas; j++) {
        transposta[i][j] = matriz[j][i];
      }
    }
  
    return transposta;
  }
  
  console.log("Matriz A:");
  for (let i = 0; i < matrizA.length; i++) {
    console.log(matrizA[i]);
  }
  
  const matrizTransposta = calcularTransposta(matrizA);
  console.log("\nMatriz Transposta de A:");
  for (let i = 0; i < matrizTransposta.length; i++) {
    console.log(matrizTransposta[i]);
  }