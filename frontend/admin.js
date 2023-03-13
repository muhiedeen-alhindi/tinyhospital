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
        
        let option = $("<option></option>").val(id).text(hospitalName);
        selectElement.append(option);
      }
      let patient_id1 =localStorage.getItem('id');
      let patientid=$("<p></p>").text(patient_id1)
      $(".container").append(selectElement); 
      
      $(".container_id").append(patientid); 

    });
  });
  
// _______________________________________________________________________________________________


