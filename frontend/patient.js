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

  $(window).on('load',function() {
    axios({
      method: "get",
      url: "http://localhost/tinyhospital/backend/deparment.php"
    }).then(function (res) {
      console.log(res.data);
      let selectElement = $('<select id="dep_hospital"></select>');
      for (let i = 0; i < res.data.length; i++) {
        let id = res.data[i].id;
        let hospitalName = res.data[i].name;
        
        let option = $("<option></option>").val(id).text(hospitalName);
        selectElement.append(option);
      }
     
      
      $("#container").append(selectElement );  
    });
  });
  
  $(window).on('load',function() {
    axios({
      method: "get",
      url: "http://localhost/tinyhospital/backend/room.php"
    }).then(function (res) {
      console.log(res.data);
      let selectElement = $('<select id="dep_hospital"></select>');
      for (let i = 0; i < res.data.length; i++) {
        let id = res.data[i].id;
        let room = res.data[i].number;
        
        let option = $("<option></option>").val(id).text(room);
        selectElement.append(option);
      }
     
      
      $("#room").append(selectElement );  
    });
  });
  $(window).on('load',function() {
    axios({
      method: "get",
      url: "http://localhost/tinyhospital/backend/medication.php"
    }).then(function (res) {
      console.log(res.data);
      let selectElement = $('<select id="medication"></select>');
      for (let i = 0; i < res.data.length; i++) {
        let id = res.data[i].id;
        let name = res.data[i].name;
        
        let option = $("<option></option>").val(id).text(name);
        selectElement.append(option);
      }
     
      
      $("#medication").append(selectElement );  
    });
  });
  