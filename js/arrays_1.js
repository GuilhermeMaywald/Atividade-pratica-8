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
    let arrMercado = [['0', 'Sem cadastro'], ['1', 'Leite'], ['2', 'Ovo'], ['3', 'Farinha'], ['4', 'Milho'], ['5', 'Café']];
    let codProduto = prompt('Digite o código do produto: ');
    let incluirProduto = '';
    let encontrarProduto = '';
    let mensagem = '';

    for (let produto of arrMercado) {
        encontrarProduto = produto.indexOf(codProduto);
        if (encontrarProduto != -1) {
            mensagem = produto[1];
            break;
        } else if (encontrarProduto != codProduto){
            mensagem = prompt(`${arrMercado[0][1]}, Deseja incluir produto?`);
            if (mensagem == 'sim'){
                mensagem = prompt('Digite novo produto');
                incluirProduto = produto.push(arrMercado);
                mensagem = `Produto cadastrado com sucesso: ${produto}`; 
                break;
            }
        } else {
            mensagem = arrMercado[0][1];
        }
    }
    alert(mensagem);
}

