<?php
include_once  'bootstrap.php';

// 
$userModel = new UserMySQL($db);

$res = $userModel->listLastFiveUsersSignUp();

//var_dump($res);
//die();

echo json_encode($res);