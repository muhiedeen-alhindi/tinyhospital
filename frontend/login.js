function signin() {

    let email = document.getElementById('email_signin').value;
    let password= document.getElementById('password_signin').value;
    
    
    let data = new FormData();
    data.append('email', email);
    data.append('password', password);
    axios.post('http://localhost/tinyhospital/backend/login.php/', data).then(function (res) {
        console.log(res.data)
        
    if (res.data.response== "logged in") {
       
    if(res.data.type==1){
      window.location.href = "http://127.0.0.1:5500/frontend/htmls/admin.html";
    }
    else if(res.data.type==2){
      window.location.href = "http://127.0.0.1:5500/frontend/htmls/employe.html";
    } else if(res.data.type==3){
      window.location.href = "http://127.0.0.1:5500/frontend/htmls/patient.html";
    }

    }else {
      alert("wrong password or email");
    }
    

    }).catch(function (err) {
        console.log(err);
    })

}
let login_btn= document.getElementById("btn_signin")
console.log(login_btn)
login_btn.addEventListener('click', signin);