<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pizzaria</title>
    <link rel="stylesheet" href="css/bootstrap.css">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <!-- tabela criada para receber os valores-->
                <table class="table" id="tabela">
                   <tr>
                       <th>Nome</th>
                       <th>Sabor</th>
                       <th>Tamanho</th>
                       <th>Preço</th>
                   </tr>
                   <tr>
                      <td id="nome"></td>
                      <td id="sabor"></td>
                      <td id="tamanho"></td>
                      <td id="preco"></td>
                   </tr>
                </table>
            </div>
        </div>
        <?php
           require('pizza.php');
           $pedido = new pizza('Bauru','queijo e presunto','grande',300);
           
           $pedido->setPreco(300);
           echo"<br/>";
           
           echo $pedido->getPreco();
           
        ?>
    </div>
</body>
</html>