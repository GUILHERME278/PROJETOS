<?php

//Estabelecendo conexao com o banco de dados
    $dbhost = 'Localhost';
    $dbusername = 'root';
    $dbpassword = 'infonatura';
    $dbname = 'usuarios';
 
    $connection = new mysqli($dbhost,$dbusername,$dbpassword,$dbname);

    ?>