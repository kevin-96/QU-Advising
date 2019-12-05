function validate() {
   if ((document.getElementById('userin').value == "student@quinnipiac.edu") && (document.getElementById('passin').value == "student123")){
      window.open("courseValidator.html");
   
   }
   else if ((document.getElementById('userin').value == "advisor@quinnipiac.edu") && (document.getElementById('passin').value == "advisor123")){
      window.open("student-list.html");
      window.close();
   }
   else{
      alert("Enter Valid Username And Password")
   } 
}
