function validator(){
 var a = document.getElementById("pic").value;
 if (a != ""){
  document.getElementById("error").innerHTML = "";
  return window.alert(a);
 }
 else if(a.trim() == ""){
  b= document.getElementById("error").innerHTML = "Enter request";
 return b;
 }
}