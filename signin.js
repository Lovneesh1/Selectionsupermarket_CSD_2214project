function validation(){
    var idnum = document.getElementById("idnum").value;
        var email = document.getElementById("email").value;
    var mnum = document.getElementById("mnum").value;
    var secnum = document.getElementById("secnum").value;
    
    
    
    if (idnum.length<10) alert("Please Enter Valid 10 digit  Selection ID Number");
    
    if(email.indexOf("@")==-1 || email.length<6) alert("Please Enter Valid EMAIL Address");
    
    if (mnum.length<10 || mnum.length>10) alert("Please Enter Valid Mobile Number");
    
        if (secnum.length<4) alert("Please Enter Valid 4 digit  Security Code");
    

    
    

    
    
}