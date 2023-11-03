function login(){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var storeData =  JSON.parse(localStorage.getItem("userDataArray"));
    console.log(storeData)
    if (!storeData || storeData.length === 0){
        swal.fire({
            icon: 'error',
            title: 'user email not found.'
        })
        setTimeout(() =>{
            window.location.href = "./index.html";
        }, 2000);
        return;
    }

    var userFound = false;
    for (var i = 0; i < storeData.length; i++){
        if(storeData[i].email === email && storeData[i].password === password){
            userFound = true;
            swal.fire({
                icon: 'success',
                title: `${storeData[i].email} successfully logged in`,
                showConfirmButton: false,
                timer: 1500
            });
            setTimeout(()=>{
                window.location.href = "./post.html";
            }, 1000);
            break;
        }
    }
    if (!userFound){
        swal.fire({
            icon: 'error',
            title: 'Invalid Email or Password',
        });

    }   




}