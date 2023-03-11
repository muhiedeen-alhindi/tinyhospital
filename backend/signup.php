<?php
include('connection.php');

header('Access-Control-Allow-Origin:*');
$email = $_POST['email'];
$name = $_POST['name'];
$dob = $_POST['dob'];
$password = $_POST['password'];
$type = $_POST['type'];

$signup =  $mysqli->prepare('select email from users where email=?');
$signup ->bind_param('s', $email);
$signup ->execute();
$signup ->store_result();
$check_signup  = $signup  ->num_rows();

$hashed_password = password_hash($password, PASSWORD_BCRYPT);

if ($check_signup > 0) {
    $response['status'] = "user already exists";
    
} else {
    $query =   $mysqli->prepare('insert into users(name,email,password,dob,type) values(?,?,?,?,?)');
    $query->bind_param('ssssi', $name, $email, $hashed_password,$dob,$type);
    $query->execute();
    $response['status'] = "success";
    $response['type'] = $type;
}

echo json_encode($response);
?>