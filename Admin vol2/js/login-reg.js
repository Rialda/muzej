
var username = document.getElementById("username");
var prezime = document.getElementById("prezime");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var email = document.getElementById("email");
var pozicija = document.getElementById("pozicija");
var slika = document.getElementById("slika");

var register_submit = document.getElementById("register_submit");

var x=document.getElementById("register-form");
var i;
var text="";
for (i=0; i<x.length; i++){
	text+=x.elements[i].value;
}



var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");
var usersRef = ref.child("Admin");
var newPostRef = usersRef.push();

function submitClick(){
	if(x.elements[2].value==x.elements[3].value
			&& !!x.elements[0].value
			&& !!x.elements[1].value
			&& !!x.elements[2].value
			&& !!x.elements[3].value
			&& !!x.elements[4].value
			&& !!x.elements[5].value){

newPostRef.set({
    username: x.elements[0].value,
		prezime: x.elements[1].value,
    password: x.elements[2].value,
    confirm_password: x.elements[3].value,
		email: x.elements[4].value,
		pozicija: x.elements[5].value,
		slika: x.elements[6].value,
		logged_in: 0
}); //end set
window.alert("Registracija u toku. Sacekajte administratora da odobri Vasu registraciju.");
} //end if

else{
	window.alert("Polja ne smiju biti prazna. Polja sifra i ponovi sifru moraju biti ista! Pokusajte ponovo.");
}

} // end submitClick()


var refref = firebase.database().ref().child('Admin');

refref.on('child_added', function(snap){
	const uname=snap.child('username').val();
	const uprezz=snap.child('prezime').val();
	const upass=snap.child('password').val();
	const uconf=snap.child('confirm_password').val();
	const umail=snap.child('email').val();
	const upozz=snap.child('pozicija').val();
	const uslika=snap.child('slika').val();
	const logged_in=snap.child('logged_in').val();

	var login_submit = document.getElementById("login_submit");
	var y=document.getElementById("login-form");

	var j;
	var tekst="";
	for (j=0; j<y.length; j++){
		tekst+=y.elements[j].value;
	}

login_submit.onclick = function submitClick2(){
	if(uname==y.elements[0].value && upass==y.elements[1].value){

document.write("Uspjesno prijavljeni! Idite na pocetnu: file:///C:/Users/rialda/Desktop/Admin%20vol2/html/home.html");
		var postData = {
			username: uname,
			prezime: uprezz,
			password: upass,
			confirm_password: uconf,
			email: umail,
			pozicija: upozz,
			slika: uslika,
			logged_in: 1
			};

				var newPostKey = refref.push().key;
				var updates = {};
			 updates['/Admin/' + snap.key] = postData;
			 return firebase.database().ref().update(updates);
			/* var retVal = confirm("Uspjesno prijavljeni. ");
											if( retVal == true ){
												document.write ("file:///C:/Users/rialda/Desktop/Admin%20vol2/html/home.html");
												 return true;
											}*/

 }


else {
	window.alert("Pogresni podaci!");
}

}// end submitClick2()

});
