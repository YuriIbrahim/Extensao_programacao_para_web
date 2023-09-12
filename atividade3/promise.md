# Promise

Promises são objetos em JavaScript que representam um valor que pode estar disponível agora, no futuro ou nunca. Elas são usadas para trabalhar com operações assíncronas de forma mais limpa e legível. Aqui está uma breve descrição e um exemplo de como usar Promises.

## Descrição

Uma Promise possui três estados:

1. **Pending**: O estado inicial, representa que a operação ainda não foi concluída.
2. **Fulfilled (Resolvida)**: A operação foi concluída com sucesso e o valor resultante está disponível.
3. **Rejected (Rejeitada)**: A operação falhou e o motivo do erro está disponível.

As Promises geralmente são usadas com funções que realizam operações assíncronas, como solicitações de rede, leitura de arquivos ou tempo limite.

## Exemplo

Aqui está um exemplo de como criar e usar uma Promise para simular uma operação assíncrona de busca de dados:

```javascript
const buscarDados = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const sucesso = true; // Simulando sucesso
      if (sucesso) {
        resolve("Dados encontrados!");
      } else {
        reject("Erro na busca de dados.");
      }
    }, 2000); 
  });
};

// Usando a Promise
buscarDados()
  .then((resultado) => {
    console.log(resultado); 
  })
  .catch((erro) => {
    console.error(erro); 
  });