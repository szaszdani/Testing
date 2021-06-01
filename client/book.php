<?php

ob_start();
session_start();

if (!$_SESSION['login'] == true) {
    header('LOCATION: http://localhost/testing/client/');
    die();
}

echo '
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Book Site</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
    <div class="container p-5">

        <p class="display-1">Book Site</p>
        <button class="btn btn-primary" onclick="load_booklist()">Kiolvasott könyvek listája</button> 
		<button class="btn btn-primary" onclick="load_booklist2()">Kiolvasandó könyvek listája</button>
        <a href="../service/logout.php" class="link">Logout</a>
        <div id="app" class="load"></div>
    </div>
    <script src="./src/script.js"></script>
</body>

</html>';
