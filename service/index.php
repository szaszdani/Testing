<?php
ob_start();
session_start();

$username = isset($_POST['username']) ? $_POST['username'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';

$user = isset($_POST['user']) ? $_POST['user'] : '';
$pass = isset($_POST['pass']) ? $_POST['pass'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';

$con = mysqli_connect('localhost', 'root', 'mysql', 'booksite');

$ok = true;
$messages = array();

$db = new PDO("mysql:host=localhost;dbname=booksite;charset=utf8mb4", "root", "mysql");

if (isset($_GET['login'])) {

    if ($ok) {
        $sql = "SELECT username, password FROM users WHERE username='$username' and password='$password'";
        $run = mysqli_query($con, $sql);
        if (mysqli_num_rows($run) > 0) {
            $ok = true;
            $messages[] = "Sikeres bejelentkezés!";
            $_SESSION['login'] = true;
        } else {
            $ok = false;
            $messages[] = 'Helytelen felhasználónév vagy jelszó!';
        }
    }
} else
if (isset($_GET['regist'])) {

    $sqlF = "SELECT username FROM users WHERE username = '$user'";
    $runF = mysqli_query($con, $sqlF);
    if (mysqli_num_rows($runF) > 0) {
        $ok = false;
        $messages[] = "Ez a felhasználónév már foglalt! Kérem válasszon másikat!";
    } else
    if ($ok) {
        $sql = "INSERT INTO users(username,email,password) VALUES('$user', '$email', '$pass')";
        $run = mysqli_query($con, $sql);
        $messages[] = "Sikeres regisztráció! Most már beléphet!";
    }
}

echo json_encode(
    array(
        'ok' => $ok,
        'messages' => $messages
    )
);
