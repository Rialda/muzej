var refref = firebase.database().ref().child('Admin');



refref.on('value', function(snap){
	const uname=snap.child('username').val();
	const uprezz=snap.child('prezime').val();
	const upass=snap.child('password').val();
	const uconf=snap.child('confirm_password').val();
	const umail=snap.child('email').val();
	const upozz=snap.child('pozicija').val();
	const uslika=snap.child('slika').val();
	const logged_in=snap.child('logged_in').val();

function odjava(){

window.alert("Uspjesno odjavljeni!");
		var postData = {
			username: uname,
			prezime: uprezz,
			password: upass,
			confirm_password: uconf,
			email: umail,
			pozicija: upozz,
			slika: uslika,
			logged_in: 0
			};

				var newPostKey = refref.push().key;
				var updates = {};
			 updates['/Admin/' + snap.key] = postData;
			 return firebase.database().ref().update(updates);


else {
	window.alert("Doslo je do greske!");
}

}// end odjava()

});
