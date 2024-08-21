<?php

//Estabelecendo conexao com o banco de dados
    $dbhost = 'Localhost';
    $dbusername = 'root';
    $dbpassword = 'infonatura';
    $dbname = 'usuarios';

    $connection = new mysqli($dbhost,$dbusername,$dbpassword,$dbname);

//Estabelecendo Relacao das variaveis com o banco de dados e realizando o login

    include_once('cadastro.php');

    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $verificaemail = "SELECT email FROM usuario WHERE email = '$email'";
    $verificasenha = "SELECT senha FROM usuario WHERE senha = '$senha'";

    
?>