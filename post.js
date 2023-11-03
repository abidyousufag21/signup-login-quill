function getData(){
    
    var getUserData = document.getElementById('dashboard-content');
    var userDataFrmStorage = JSON.parse(localStorage.getItem("userDataArray"));


    console.log(userDataFrmStorage);
    
    if (Array.isArray(userDataFrmStorage)) {
        var userDataHTML = "<ul>";
        userDataFrmStorage.forEach(function (userData) {
            userDataHTML += `
                <li>First Name: ${userData.firstName}</li>
                <li>Last Name: ${userData.lastName}</li>
                <li>Email: ${userData.email}</li>
                <li>Phone Number: ${userData.phoneNumber}</li>
            `;
        });
        userDataHTML += "</ul>";
        
        getUserData.innerHTML = userDataHTML;
        
    } else {
        getUserData.innerHTML = "No user data found.";
    }
   



}

// getData();


   
  

function redirection(){
    window.location.href = "./index.html"
};

function logOut(){
    localStorage.clear();
    setTimeout(redirection, 2000)
};



var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
];


var quill = new Quill('#editor', {
  modules: {
    toolbar: toolbarOptions
  },
  theme: 'snow',
  placeholder: "Write something..."


});








   function submit(){

   var post = document.getElementById("post");
   var content = quill.root.innerHTML;
     console.log(content);
     localStorage.setItem("post" , JSON.stringify(content));
     var storedContent = localStorage.getItem("post");

     if(storedContent){
        document.getElementById("post").innerHTML = JSON.parse(storedContent)
    };


};
 









 
  
  
