function validation(){
    var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
        var message =document.getElementById("message").value;

    
    
    
    if (fname.value==null) alert("Please Enter Vaid First Name");
        if (lname.value==null) alert("Please Enter Vaid last Name");

    
    if(email.indexOf("@")==-1 || email.length<6) alert("Please Enter Valid EMAIL Address");
    
        if (subject.value==null) alert("Please Enter Valid Subject");

    
                if (message.value==null) alert("Please Enter Valid Message");

    

    
}