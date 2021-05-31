<?php
session_start();
unset($_SESSION["login"]);
header("LOCATION: http://localhost/testing/client/");
