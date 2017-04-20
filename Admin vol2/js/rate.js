
var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

var usersRef = ref.child("AppRating");
var newPostRef = usersRef.push();


const s1=document.getElementById('star1');
const s2=document.getElementById('star2');
const s3=document.getElementById('star3');
const s4=document.getElementById('star4');
const s5=document.getElementById('star5');


const dbRefObject = firebase.database().ref().child('AppRating');

dbRefObject.on('child_added', snap => {
 const st1=snap.child("star_1").val();
 const st2=snap.child("star_2").val();
 const st3=snap.child("star_3").val();
 const st4=snap.child("star_4").val();
 const st5=snap.child("star_5").val();

 const rating1=document.createElement('h4');
 s1.appendChild(rating1);
 rating1.innerHTML=st1;

 const rating2=document.createElement('h4');
 s2.appendChild(rating2);
 rating2.innerHTML=st2;

 const rating3=document.createElement('h4');
 s3.appendChild(rating3);
 rating3.innerHTML=st3;

 const rating4=document.createElement('h4');
 s4.appendChild(rating4);
 rating4.innerHTML=st4;

 const rating5=document.createElement('h4');
 s5.appendChild(rating5);
 rating5.innerHTML=st5;


});
