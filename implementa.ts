///<reference path="pizza.ts"/>

namespace Pizzaria{

    ////////////////////////////////////

    let pizza = new Pizza();
    pizza._setNome("Paulistana");
    pizza._setSabor("Mussarela & Presunto");
    pizza._setTamanho("Grande")
    pizza._setPreco(300);

    /////////////////////////////////////////

    document.getElementById("nome").textContent = pizza._getNome();
    document.getElementById("sabor").textContent = pizza._getSabor();
    document.getElementById("tamanho").textContent = pizza._getTamanho();
    document.getElementById("preco").textContent = pizza._getPreco().toString();

    ////////////////////////////trecho inserido para exemplificar a implentação da tabela////////////////////////////////////////


}