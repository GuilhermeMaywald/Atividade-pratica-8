/*
Crie um arquivo chamado arrays1_js.html, e vamos fazer um algoritmo:
a. Crie um array para armazenar a seguinte lista:
0 - Sem cadastro
1 - Leite
2 - Ovo
3 - Farinha
4 - Milho
5 – Café

b. Através da função adequada, receba o “Código do produto” do usuário, busque o código na posição correspondente do array que você criou, e exiba o nome do produto. Ex: Usuário digitou 1, “Leite”.

c. Caso o usuário digite um código que não esteja contido, exiba o valor da posição 0 do seu vetor, e pergunte se deseja adicionar o produto.

d. Se o usuário optar por adicionar o produto, receba o valor utilizando a função adequada no JS, inclua esse valor em seu vetor e conclua com uma mensagem de sucesso, com o código e nome do produto. Ex: “Produto incluído com sucesso: 6 - Óleo”.
*/

{
    let arrMercado = [
      "Sem cadastro",
      "Leite",
      "Ovo",
      "Farinha",
      "Milho",
      "Café",
    ];
  
    let codProduto = Number(prompt("Digite o código do produto: "));
    let mensagem = "";
    let encontrarProduto = '';
    let incluiProduto = '';
    encontrarProduto = arrMercado[codProduto];
  
    if (encontrarProduto != '' && codProduto != 0){
      mensagem = (encontrarProduto);
    } else {
      mensagem = prompt('Produto não cadastrado, deseja adicionar o produto?');
        if (mensagem == 'sim'){
            incluiProduto = (prompt('Digite novo produto.'));
            arrMercado.push(incluiProduto);
            mensagem = (`Produto incluído com sucesso: ${incluiProduto}`);
        } else {
            mensagem = 'Obrigado por consultar.'
        }
    }
    alert(mensagem);
}