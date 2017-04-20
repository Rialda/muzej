
var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

const ulList=document.getElementById('profil');
const dbRefObject = firebase.database().ref().child('Admin');
//const dbRefList= dbRefObject.child('username');

dbRefObject.on('child_added', snap => {
 const username=snap.child("username").val();
 const prezime=snap.child("prezime").val();
 const email=snap.child("email").val();
 const pozicija=snap.child("pozicija").val();
 const slika=snap.child("slika").val();

 const div=document.createElement('div');
	 div.id='newdiv';
   ulList.appendChild(div);

 const naziv=document.createElement('h2');
       naziv.innerHTML="Administrator:";
       div.appendChild(naziv);

 const img=document.createElement('img');
   img.setAttribute("src", slika);
   img.setAttribute("height", "200");
   img.setAttribute("width", "300");
   div.appendChild(img);

const ime=document.createElement('h3');
 ime.innerHTML=username;
 div.appendChild(ime);

 const prez=document.createElement('h3');
  prez.innerHTML=prezime;
  div.appendChild(prez);


const pozicija_admina=document.createElement('h5');
  pozicija_admina.innerHTML=pozicija;
  div.appendChild(pozicija_admina);

 const e_mail=document.createElement('h5');
 e_mail.innerHTML=email;
 div.appendChild(e_mail);


 div.id=snap.key;

});

/*
 dbRefObject.on('child_changed', snap=>{
   const username=snap.child("username").val();
   const email=snap.child("email").val();
   const slika=snap.child("slika").val();
	 const liChanged =document.getElementById(snap.key);
	 liChanged.innerHTML=ulList;

 });

 dbRefObject.on('child_removed', snap=>{
   const username=snap.child("username").val();
   const email=snap.child("email").val();
   const slika=snap.child("slika").val();
	const liToRemove =document.getElementById(snap.key);
  liChanged.innerHTML=ulList;
	liToRemove.remove();
 });
*/
