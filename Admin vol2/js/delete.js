
var galerija = document.getElementsByClassName("galerija");
var naziv_slike = document.getElementById("naziv_slike");
var dodaj = document.getElementById("dodaj");
//var checkedValue = document.querySelector('.galerija:checked').value;
var x=document.getElementById("edit-form");
var i;
var text="";
for (i=0; i<x.length; i++){
	text+=x.elements[i].value;
}

var y=document.getElementById("edit-form2");
var j;
var text2="";
for (j=0; j<y.length; j++){
	text2+=y.elements[j].value;
}

var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

var checkedValue = null;
var inputElements = document.getElementsByClassName('galerija');


function submitClick(){
window.alert(x.elements[0].value);

for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;

var usersRef = ref.child(checkedValue);
var newPostRef = usersRef.remove();
newPostRef.set({
    name: null,
    image1: null,
    AdDescription: null
}); //end set

}//end if
}//end for

} //end submitClick




 // DELETING SPECIFIC NODE FROM A CHILD
/*
function submitClick2(){
	for(var i=0; inputElements[i]; ++i){
	      if(inputElements[i].checked){
	           checkedValue = inputElements[i].value;
	var usersRef = ref.child(checkedValue); //checkbox galerije

	var imeRef = usersRef.child("name"); // ImagesLeftSpace/name
	var upisanaVar = y.elements[4]; 	//ime koje je upisala y.elements[4]
 var newPostRef = imeRef.remove();

var newVar = ref.child(checkedValue);
var newnewVar = newVar.child("name");
var newVar2 = newnewVar.data.val();

//if(imeRef.data.val()==upisanaVar){
	/*	newPostRef.set({
				name: null,
				image1: null,
				AdDescription: null
		}); //end set

	//	window.alert("equal");

	}
	else{
	//	window.alert("not equal");
}




	}//end if
	}//end for

	}//end submitClick2()


//	for(var i=0; inputElements[i]; ++i){
	//      if(inputElements[i].checked){
	  //         checkedValue = inputElements[i].value;

	var usersRef = ref.child("ImagesBottomSpace"); // ex ImagesLeftSpace
  var nameRef = usersRef.child("name"); // key -- name, image1, addescription
  var newPostRef = usersRef.orderBy(x.elements[4].value); // naziv koji admin ukuca
	var removeRef = newPostRef.remove();
//naziv u bazi: name = data.key;
//vrijednost naziva u bazi: nazivslike = data.val();
	removeRef.set({
			name: null,
			image1: null,
			AdDescription: null
	}); //end set
	var newPostRef = usersRef.orderByValue().on(x.elements[4].value, function(data)){

			newPostRef.set({
			    name: null,
			    image1: null,
			    AdDescription: null
			}); //end set

	}


//}//end if
//}//end for
*/
