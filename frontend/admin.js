$(window).on('load',function() {
    axios({
      method: "get",
      url: "http://localhost/tinyhospital/backend/assignpatient.php/"
    }).then(function (res) {
      console.log(res.data);
      let selectElement = $('<select id="type_hospital"></select>');
      for (let i = 0; i < res.data.length; i++) {
        let id = res.data[i].id;
        let hospitalName = res.data[i].name;
        
        let option = $("<option></option>").val(hospitalName).text(hospitalName);
        selectElement.append(option);
      }
      let patient_id1 =localStorage.getItem('id');
      let patientid=$("<p></p>").text(patient_id1)
      $(".container").append(selectElement ,patientid);  
    });
  });
  
// _______________________________________________________________________________________________

  $("#btn-admin").on('click',function(){
       id1 =localStorage.getItem('id');
          //  console.log(id1)


     let name=$("#type_hospital").val()
    //  console.log( name  )   
    
    let data = new FormData();
    data.append('hospital', $("#type_hospital").val()  ),
    data.append('id', id1  ),
     
    axios.post(' http://localhost/tinyhospital/backend/assignpatient.php/', data).then(function (res) {
        console.log(res.data)
         

    }).catch(function (err) {
        console.log(err);
    })
   

  })