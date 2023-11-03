
//  var registration = document.getElementById("registered");


function registrationForm(){
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;


    

   if(firstName === '' ){
    Swal.fire({
        icon: 'error',
        title: 'First name should not be empty',
        text: 'Plz enter your first name',
        
      })
   }
  
    else if(lastName === ''){
    Swal.fire({
        icon: 'error',
        title: 'Last name should not be empty',
        text: 'Plz enter your last name',
        
      })
   }
   else if(email === ''){
    Swal.fire({
        icon: 'error',
        title: 'Email should not be empty',
        text: 'Plz enter your email',
              })
    }
    else if(phoneNumber === ''){
        Swal.fire({
            icon: 'error',
            title: 'Phone number should not be empty',
            text: 'Plz enter your phone number',
            
          })
    }
    else if (password === '') {
        Swal.fire({
            icon: 'error',
            title: 'Password should not be empty',
            text: 'Plz enter your password',
            
          })
    }
     else if(confirmPassword ==! password   ) {
         Swal.fire({    
             icon: 'error',
             title: 'Confirm password should not be empty',
             text: 'Plz enter your confirm password',
          
         })
    }
   else{
    Swal.fire({
        icon: 'success',
        title:  `${firstName }${lastName} Registration Successfuly`,
        showConfirmButton: false,
        timer: 2000,
    })
    var userData = {
        firstName: firstName,
        lastName: lastName,
        email : email,
        phoneNumber : phoneNumber,
        password : password,
        confirmPassword: confirmPassword,
    
       };
       var arr = JSON.parse(localStorage.getItem("userDataArray")) || [];
       arr.push(userData) ;  
       localStorage.setItem("userDataArray" , JSON.stringify(arr));
     
       setTimeout(()=>{
       window.location.href = "./post.html";
    },1000)
}


}





