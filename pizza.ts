namespace Pizzaria{
    export class Pizza{
        private _nome:string;
        private _sabor:string;
        private _tamanho:string;
        private _preco:number;
        
        public _getNome(){
            return this._nome;
        }
        
        public _setNome(nome:string){
            this._nome = nome;            
        }
        
        public _getSabor(){
            return this._sabor;
        }
        
        public _setSabor(sabor:string){
            this._sabor = sabor;            
        }
        
        public _getTamanho(){
            return this._tamanho;
        }
        
        public _setTamanho(tamanho:string){
            this._tamanho = tamanho;            
        }
        
        public _getPreco(){
            return this._preco;
        }
        
        public _setPreco(preco:number){
            this._preco = preco
        }
    }
}