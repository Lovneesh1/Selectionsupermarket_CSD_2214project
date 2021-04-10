function validation(){
    
    var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
    var snum = document.getElementById("snum").value;
    var secnum = document.getElementById("secnum").value;
    var email = document.getElementById("email").value;
    
        if (fname==null || fname=="") alert("Please Enter Valid First Nmae");
        if (lname==null || lname=="") alert("Please Enter Valid Last Name");
    if(email.indexOf("@")==-1 || email.length<6) alert("Please Enter Valid EMAIL Address");

    if (snum.length<10) alert("Please Enter Valid 10 digit  Selection ID Number");
    
    
    
        if (secnum.length<4) alert("Please Enter Valid 4 digit  Security Code");
    

    
}