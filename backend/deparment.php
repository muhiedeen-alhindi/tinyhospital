<?php
include('connection.php');
header('Access-Control-Allow-Origin:*');
 
 
 
$query = $mysqli->prepare('select name,id,hospital_id  From departments');
 
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($name, $id,$hospital_id);

$response = [];

 
if ($num_rows == 0) {
    $response['response'] = " no availabe departments";
} else {
    while ($query->fetch() )  {
        $data = array(
        'name' => $name,
        'hospital_id' => $hospital_id,
        'id'  =>$id,
        ); 
        array_push($response, $data);
    }
}

 
 
echo json_encode($response);




 ?>