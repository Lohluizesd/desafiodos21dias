var botaoAdicionar = document.querySelector("#adicionar-pessoa");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
//são dados criados pelo JS, ao colocar no formulário HTML! Agora preciso colocar esses
//dados na tabela
    var nome = form.nome.value;
    var peso = form.peso.value;
    var data = form.data.value;
    var meta = form.meta.value;
//creatElement cria um elemento
//aqui crio uma nova Tr, que é o pai da Td
    var pessoaNova= document.createElement("tr");
//crio uma Td que corresponde as colunas
//as tds estão vazias
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var dataTd = document.createElement("td");
    var metaTd = document.createElement("td");
//colocando dado na Td:

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    dataTd.textContent = data;
    metaTd.textContent = meta;
//propriedade do JS que permite colocar uma coisa como filho, no caso a td não está dentro da Tr

    pessoaNova.appendChild(nomeTd);
    pessoaNova.appendChild(pesoTd);
    pessoaNova.appendChild(dataTd);
    pessoaNova.appendChild(metaTd);

    //vamos criar uma variável pra tabela
    var tabela = document.querySelector("#tabela-pessoas");
//vamos colocar dentro da tabela vazia os dados das pessoas que colocamos anteriormente!
    tabela.appendChild(pessoaNova);
})