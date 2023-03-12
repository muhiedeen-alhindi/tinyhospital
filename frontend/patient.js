$("#btn-admin").on('click',function(){
    let id1 = localStorage.getItem('id');
    console.log(id1)
  
    let name = $("#type_hospital").val();
    console.log(name);   
  
    let data = new FormData();
    data.append('hospital', name);
    data.append('id', id1);
  
    axios.post('http://localhost/tinyhospital/backend/patients.php', data).then(function (res) {
        console.log(res.data);
    }).catch(function (err) {
        console.log(err);
    });
  });