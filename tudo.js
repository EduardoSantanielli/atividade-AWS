var Pizzaria;
(function (Pizzaria) {
    var Pizza = /** @class */ (function () {
        function Pizza() {
        }
        Pizza.prototype._getNome = function () {
            return this._nome;
        };
        Pizza.prototype._setNome = function (nome) {
            this._nome = nome;
        };
        Pizza.prototype._getSabor = function () {
            return this._sabor;
        };
        Pizza.prototype._setSabor = function (sabor) {
            this._sabor = sabor;
        };
        Pizza.prototype._getTamanho = function () {
            return this._tamanho;
        };
        Pizza.prototype._setTamanho = function (tamanho) {
            this._tamanho = tamanho;
        };
        Pizza.prototype._getPreco = function () {
            return this._preco;
        };
        Pizza.prototype._setPreco = function (preco) {
            this._preco = preco;
        };
        return Pizza;
    }());
    Pizzaria.Pizza = Pizza;
})(Pizzaria || (Pizzaria = {}));
///<reference path="pizza.ts"/>
var Pizzaria;
(function (Pizzaria) {
    ////////////////////////////////////
    var pizza = new Pizzaria.Pizza();
    pizza._setNome("Paulistana");
    pizza._setSabor("Mussarela & Presunto");
    pizza._setTamanho("Grande");
    pizza._setPreco(300);
    /////////////////////////////////////////
    document.getElementById("nome").textContent = pizza._getNome();
    document.getElementById("sabor").textContent = pizza._getSabor();
    document.getElementById("tamanho").textContent = pizza._getTamanho();
    document.getElementById("preco").textContent = pizza._getPreco().toString();
    ////////////////////////////trecho inserido para exemplificar a implentação da tabela////////////////////////////////////////
})(Pizzaria || (Pizzaria = {}));
