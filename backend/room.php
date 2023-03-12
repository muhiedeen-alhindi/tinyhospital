<?php 
  include('connection.php');
  header('Access-Control-Allow-Origin:*');
  
   
  
   
  $query = $mysqli->prepare('select number,id From rooms');
   
  $query->execute();
  $query->store_result();
  $num_rows = $query->num_rows();
  $query->bind_result($number, $id,);
  
  $response = [];
  
   
  if ($num_rows == 0) {
      $response['response'] = " no availabe room ";
  } else {
      while ($query->fetch() )  {
          $data = array(
          'number' => $number,
           
          'id'  =>$id,
          ); 
          array_push($response, $data);
      }
  }
  
   
   
  echo json_encode($response);
  
 ?>