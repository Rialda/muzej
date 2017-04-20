var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

const ulList=document.getElementById('slike');
const dbRefObject = firebase.database().ref().child('ImagesBottomSpace');

dbRefObject.on('child_added', snap => {
 const image1=snap.child("image1").val();
 const name=snap.child("name").val();
 const AdDescription=snap.child("AdDescription").val();

 const form=document.createElement('form');
 form.id=snap.key;
 ulList.appendChild(form);

 const img=document.createElement('img');
 img.setAttribute("src", image1);
 img.setAttribute("height", "250");
 img.setAttribute("width", "300");
 img.setAttribute("alt", name);
 img.setAttribute("title", AdDescription);
 form.appendChild(img);
 img.style.margin="30px";

 const br=document.createElement('br');
 const br1=document.createElement('br');
 const br2=document.createElement('br');
 const br3=document.createElement('br');

form.appendChild(br3);


 const slikaurl=document.createElement('input');
 slikaurl.setAttribute("type", "text");
 slikaurl.setAttribute("value", image1);
 form.appendChild(slikaurl);
 slikaurl.style.width="300px";
 slikaurl.style.margin="20px";


 form.appendChild(br1);

 const naziv=document.createElement('input');
 naziv.setAttribute("type", "text");
 naziv.setAttribute("value", name);
 form.appendChild(naziv);
 naziv.style.width="300px";
 naziv.style.margin="20px";


 form.appendChild(br2);

 const opis=document.createElement('textarea');
 opis.setAttribute("rows", "8");
 opis.setAttribute("cols", "80");
 opis.innerHTML=AdDescription;
 form.appendChild(opis);
 opis.style.margin="20px";


 form.appendChild(br);

 const button1=document.createElement('button');
 button1.id = 'newbtn';
 button1.innerHTML=("Izmijeni");
 form.appendChild(button1);
 button1.style.backgroundColor=" #0066ff";
 button1.style.color="white";
 button1.style.width="120px";
 button1.style.height="40px";

button1.addEventListener("mouseover", mouseOver);
button1.addEventListener("mouseout", mouseOut);

 function mouseOver() {
     button1.style.backgroundColor = "white";
     button1.style.color="#0066ff";
 }

 function mouseOut() {
     button1.style.backgroundColor = "#0066ff";
     button1.style.color="white";
 }

 const button2=document.createElement('button');
 button2.id = 'newbtn2';
 button2.innerHTML=("Izbrisi");
 form.appendChild(button2);
 button2.style.backgroundColor="#ff471a";
 button2.style.color="white";
 button2.style.width="100px";
 button2.style.height="40px";

 button2.addEventListener("mouseover", mouseOver2);
 button2.addEventListener("mouseout", mouseOut2);

  function mouseOver2() {
      button2.style.backgroundColor = "white";
      button2.style.color="#ff471a";
  }

  function mouseOut2() {
      button2.style.backgroundColor = "#ff471a";
      button2.style.color="white";
  }

 const hr=document.createElement('hr');
 ulList.appendChild(hr);


 var x=document.getElementById(snap.key);
 var i;
 var text="";
 for (i=0; i<x.length; i++){
  text+=x.elements[i].value;
 }

 button1.onclick = function EditEntry() {
         window.alert(x.elements[1].value);
       var postData = {
             image1: x.elements[0].value,
             name: x.elements[1].value,
             AdDescription: x.elements[2].value
         };

         // Get a key for a new entry
           var newPostKey = dbRefObject.push().key;
           var updates = {};
          // updates['/TestImages/' + newPostKey] = postData;
          updates['/ImagesBottomSpace/' + snap.key] = postData;
          return firebase.database().ref().update(updates);
    }

    button2.onclick = function RemoveEntry() {
            window.alert(x.elements[1].value);
          var postData = {
                image1: null,
                name: null,
                AdDescription: null
            };

            // Get a key for a new entry
            //  var newPostKey = dbRefObject.push().key;
              var updates = {};
             // updates['/TestImages/' + newPostKey] = postData;
             updates['/ImagesBottomSpace/' + snap.key] = postData;
             return firebase.database().ref().update(updates);
       }



}); // END OF MAIN FUNCTION
