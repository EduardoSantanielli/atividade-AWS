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
