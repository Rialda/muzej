
var naziv_dogadjaja = document.getElementById("naziv_slike");
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

var usersRef = ref.child("WhatsNew");
var newPostRef = usersRef.push();


function submitClick(){

window.alert(x.elements[0].value);

newPostRef.set({
    naziv_dogadjaja: x.elements[0].value,
    slika_dogadjaja: x.elements[1].value,
  //  slika_lokalno: x.elements[3].value,
    opis_dogadjaja: x.elements[2].value
}); //end set

} //end submitClick
