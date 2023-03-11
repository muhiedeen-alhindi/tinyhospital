    let password = document.getElementById('password_signup')
    let email = document.getElementById('email_signup');
password.addEventListener("blur", function(){
  if(password.value.length<8){
      alert("password should  minimum 8  character long")
  }else if (!/^[A-Z]/.test(password.value)) {
      alert("Password must start with an uppercase letter.");
       
    }

})
email.addEventListener("blur", function(){
  
  if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email.value)){
              alert("use like this form muhie@live.com ")
                        }

})  
       
const signup_btn= document.getElementById("btn_signup")



signup_btn.addEventListener('click', signup);

 


function signup() {

    let name = document.getElementById('name_signup').value;
    let email = document.getElementById('email_signup').value;
    let password = document.getElementById('password_signup').value;
    let date = document.getElementById('date_of_birth').value;
    let type = document.getElementById('types').value;
    
    let data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('dob', date);
    data.append('type', type);

         
    axios.post(' http://localhost/tinyhospital/backend/signup.php/', data)
    .then((result) => {
    console.log(result.data);
    if (result.data.status== "success") {
      alert("Signed up successfully!");
    if(result.data.type==1){
       
      
      window.location.href = "http://127.0.0.1:5500/frontend/htmls/admin.html";

    }else if(result.data.type==2){
      window.location.href = "http://127.0.0.1:5500/frontend/htmls/employe.html";
    } else if(result.data.type==3){
      window.location.href = "http://127.0.0.1:5500/frontend/htmls/patient.html";
    }
    } else {
      alert("Email Already exists!");
    }
  })
  .catch((err) => {
    console.error(err);
  });
         
}
 
 
// _________________________________________________________________________________signup above_______________
 



