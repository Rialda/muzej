
var galerija = document.getElementsByClassName("galerija");
var naziv_slike = document.getElementById("naziv_slike");
var url_slike = document.getElementById("url_slike");
//var slika_lokalno = document.getElementById("slika_lokalno");
var opis = document.getElementById("opis");
var dodaj = document.getElementById("dodaj");
//var checkedValue = document.querySelector('.galerija:checked').value;
var x=document.getElementById("edit-form");
var i;
var text="";
for (i=0; i<x.length; i++){
	text+=x.elements[i].value;
}
var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

var checkedValue = null;
var inputElements = document.getElementsByClassName('galerija');


function submitClick(){
window.alert(x.elements[1].value);
for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;

var usersRef = ref.child(checkedValue);
var newPostRef = usersRef.push();

newPostRef.set({
    name: x.elements[4].value,
    image1: x.elements[5].value,
  //  slika_lokalno: x.elements[3].value,
    AdDescription: x.elements[6].value
}); //end set

}//end if
}//end for

} //end submitClick
