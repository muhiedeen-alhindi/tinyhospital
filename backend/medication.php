<?php 
  include('connection.php');
  header('Access-Control-Allow-Origin:*');
  
   
  
   
  $query = $mysqli->prepare('select name,id,cost From medications');
   
  $query->execute();
  $query->store_result();
  $num_rows = $query->num_rows();
  $query->bind_result($name, $id,$cost);
  
  $response = [];
  
   
  if ($num_rows == 0) {
      $response['response'] = " no availabe room ";
  } else {
      while ($query->fetch() )  {
          $data = array(
          'name' => $name,
          'cost' => $cost,
           
          'id'  =>$id,
          ); 
          array_push($response, $data);
      }
  }
  
   
   
  echo json_encode($response);
  
 ?>