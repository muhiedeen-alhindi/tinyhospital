<?php 
 

include('connection.php');
header('Access-Control-Allow-Origin:*');

 

 
$query = $mysqli->prepare('select name,id From hospitals');
 
$query->execute();
$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($name, $id,);

$response = [];

 
if ($num_rows == 0) {
    $response['response'] = " no availabe hospitals";
} else {
    while ($query->fetch() )  {
        $data = array(
        'name' => $name,
         
        'id'  =>$id,
        ); 
        array_push($response, $data);
    }
}

 
 
echo json_encode($response);


 








?>