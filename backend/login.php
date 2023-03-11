<?php
include('connection.php');
header('Access-Control-Allow-Origin:*');

$email = $_POST['email'];
$password = $_POST['password'];

$login = $mysqli->prepare('select id,name,email,password,dob,type from users where email=?');
$login->bind_param('s', $email);
$login->execute();

$login->store_result();
$num_rows = $login->num_rows();
$login->bind_result($id, $name, $email, $hashed_password,$dob, $type);
$login->fetch();
$response = [];
if ($num_rows == 0) {
    $response['response'] = "user not found";
} else {
    
    if (password_verify($password, $hashed_password)) {
        $response['response'] = "logged in";
        $response['id'] = $id;
        $response['name'] = $name;
        $response['email'] = $email;
        $response['dob'] = $dob;
        $response['type'] = $type;
        
    } else {
        $response["response"] = "Incorrect password";
    }
}

echo json_encode($response);
?>