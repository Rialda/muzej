
var podsjetnik = document.getElementById("podsjetnik");

var x=document.getElementById("podsjetnik-form");
var i;
var text="";
for (i=0; i<x.length; i++){
	text+=x.elements[i].value;
}

var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

var usersRef = ref.child("Podsjetnik");
var newPostRef = usersRef.push();

function submitClick(){
window.alert(x.elements[1].value);
newPostRef.set({
    podsjetnik: x.elements[1].value

});

}

const preObject=document.getElementById('podsjetnik');
const ulList=document.getElementById('list');

const dbRefObject = firebase.database().ref().child('Podsjetnik');
const dbRefList= dbRefObject.child('podsjetnik');
//dbRefObject.on('value', snap => {preObject.innerHTML=JSON.stringify(snap.val(), null, 3)});


dbRefObject.on('child_added', snap => {
 const podsjetnik=snap.child("podsjetnik").val();
 //var item=dbRefObject.snap.child.("podsjetnik").val();

 const div=document.createElement('div');
	 div.id='newdiv';
 const li=document.createElement('li');
 	li.id='newli';
 const button=document.createElement('button');
	button.id = 'newbtn';
	button.onclick = function RemoveEntry() {
					var postData = {
								podsjetnik: null,
						};

				 		var updates = {};
						 updates['/Podsjetnik/' + snap.key] = postData;
						 return firebase.database().ref().update(updates);
					 }

 button.innerHTML=("Obrisi");

 const button2=document.createElement('button');
	button2.id = 'newbtn2';
	button2.style.textDecoration="line-through";
 button2.innerHTML=("Zavrseno");
 button2.onclick = function crossLine() {
			li.style.textDecoration="line-through";
					}

 li.innerHTML=podsjetnik;
 li.id=snap.key;
 ulList.appendChild(div);
 div.appendChild(li);
 li.appendChild(button2);
 li.appendChild(button);

});

 dbRefObject.on('child_changed', snap=>{
	 const podsjetnik=snap.child("podsjetnik").val();
	 const liChanged =document.getElementById(snap.key);
	 liChanged.innerHTML=podsjetnik;
 });

 dbRefObject.on('child_removed', snap=>{
	const podsjetnik=snap.child("podsjetnik").val();
	const liToRemove =document.getElementById(snap.key);
	liToRemove.innerHTML=podsjetnik;
	liToRemove.remove();
 });

/*
function removeItem() {
	dbRefObject.on('value', snap => {
	 const podsjetnik2=snap.child("podsjetnik").val().remove();
}
 }*
/*
<script>
//var podd = document.getElementById('podsjetnik');
var myRef = ref.child("Podsjetnik");
myRef.on('child_added', function(snapshot){
var podsjetnik = snapshot.child("podsjetnik").val();
var p = document.createElement("p");
//p.innerHTML=snap.child("podsjetnik").val();
p.innerHTML="Success";
document.getElementById('podsjetnik').appendChild(p);

});
 </script>
 */
