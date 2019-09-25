<?php
 class pizza{
     
        private $nome;
        private $sabor;
        private $tamanho;
        private $preco;
        
        public function __construct($nome, $sabor, $tamanho){
            $this->nome = $nome;
            $this->sabor = $sabor;
            $this->tamanho = $tamanho;
        }
        
        public function getPreco(){
            return $this->preco;
        }
        
        public function setPreco($preco){
            $this->$preco = preco;
        }
}
?>