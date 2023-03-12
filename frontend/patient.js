$("#btn-admin").on('click',function(){
    let id1 = localStorage.getItem('id');
     
    let name = $("#type_hospital").val();
    
  
    let data = new FormData();
    data.append('hospital', name);
    data.append('id', id1);
    axios.post('http://localhost/tinyhospital/backend/patients.php', data).then(function (res) {
        console.log(res.data);
      
     

    }).catch(function (err) {
        console.log(err);
    });
  });