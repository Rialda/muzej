var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

const ulList=document.getElementById('slike');
const dbRefObject = firebase.database().ref().child('ImagesBottomSpace');
const dbRefList= dbRefObject.child('image1');



dbRefObject.on('child_added', snap => {
 const image1=snap.child("image1").val();
 const name=snap.child("name").val();
 const AdDescription=snap.child("AdDescription").val();
 const img=document.createElement('img');
 img.setAttribute("src", image1);
 img.setAttribute("height", "300");
 img.setAttribute("width", "300");
 img.setAttribute("alt", name);
 img.setAttribute("title", AdDescription);
 img.id=snap.key;
 ulList.appendChild(img);
});


 dbRefObject.on('child_changed', snap=>{
   const image1=snap.child("image1").val();
	 const liChanged =document.getElementById(snap.key);
	 liChanged.innerHTML=image1;
 });

 dbRefObject.on('child_removed', snap=>{
   const image1=snap.child("image1").val();
	const liToRemove =document.getElementById(snap.key);
	liToRemove.innerHTML=image1;
	liToRemove.remove();
 });
