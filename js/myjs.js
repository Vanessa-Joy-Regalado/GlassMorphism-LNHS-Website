function Mybutton(){
 var a = document.getElementById("email");
 var myPass = document.getElementById("password");

 if (a == user || myPass == 1234){
    window.location.replace("home.html");
 }
 else {
     confirm("press a button !");
 }
}