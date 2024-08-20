<?php

// Definindo Variáveis | Define as variaveis baseado nos names do 'cdastro.html'
$nome = $_POST['nome'];
$senha = $_POST['senha'];
$telefone = $_POST['telefone'];
$data = $_POST['data'];
$email = $_POST['email'];
$estado = $_POST['estado'];

// Verificando se os campos estão preenchidos
if (empty($nome) || empty($senha) || empty($telefone) || empty($data) || empty($email) || $estado == "Selecione um estado") {
  echo "<script>alert('Preencha todos os campos!');</script>"; //Exibi um alerta  para que o usuario preencha os campos vazios
  echo "<script>window.location.href = 'cadastro.html';</script>"; //Atualiza a pagina ao apertar o ok no alert
  exit;
}

// Se todos os campos estiverem preenchidos, continua com o cadastro
if (isset($_POST['enviar'])) { //Verifica se o botao Cadastrar foi clicado, para evitar que o usuario insira o endereco php direto na barra web

  include_once('config.php'); //importa configuracao do arquivo config.php para a conexao com banco de dados

  $result = mysqli_query($connection, "INSERT INTO usuario(email,telefone,data_nasc,pais,senha,nome) VALUES ('$email','$telefone','$data','$estado','$senha','$nome')"); //Insere as informacoes ja conferidas no banco de dados
} 
else 
{
  echo "<script>window.location.href = 'cadastro.html';</script>"; //Direciona para o formulario novamente 
}

?>