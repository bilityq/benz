
function clock(){
	var nowDay=new Date();
	var h=nowDay.getHours();
	var m=nowDay.getMinutes();
	var s=nowDay.getSeconds();
	h<10 ? h="0"+h : h=h;
	m<10 ? m= "0"+m : m=m;
	s<10 ? s= "0"+s : s=s;
    div1.innerHTML=h+":"+m+":"+s;
}
setInterval("clock()",500);



//this is the codes for validation//
function validation(){
		var name = document.getElementById("name").value;
		var subject = document.getElementById("Subject").value;
		var phone = document.getElementById("Phone").value;
		var email = document.getElementById("email").value;
		var message = document.getElementById("message").value;
		var error_message = document.getElementById("error_message");
	    var text;



        error_message.style.padding ="10px";

        if (name <5) {
        	text = "Please Enter valid informatin!";
        	 error_message.innerHTML = text;
        	 return false;
        }
        if (subject <10) {
        	text = "Please Enter valid subject";
        	 error_message.innerHTML = text;
        	 return false;
        }
        if (isNaN(phone) || phone.length != 10){
        	text = "Please Enter valid phone number";
        	 error_message.innerHTML = text;
        	 return false;
        }

        if (email.indexOf("@")== -1 || email.length < 6){
        	text = "Please Enter valid email";
        	 error_message.innerHTML = text;
        	 return false;
        }
        if (message.length <= 140){
        	text = "Please Enter more than 140 characters";
        	 error_message.innerHTML = text;
        	 return false;
        }
         alert("Form submitted successfully!")
         return true;

        }
        

