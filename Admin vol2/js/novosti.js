var firebaseRef = firebase.database().ref();
var database = firebase.database();
var ref = new Firebase("https://historijskimuzejbih-985c5.firebaseio.com");

const ulList=document.getElementById('slike');
const dbRefObject = firebase.database().ref().child('WhatsNew');
//const dbRefList= dbRefObject.child('image1');

dbRefObject.on('child_added', snap => {
 const slika_dogadjaja=snap.child("slika_dogadjaja").val();
 const opis_dogadjaja=snap.child("opis_dogadjaja").val();
 const naziv_dogadjaja=snap.child("naziv_dogadjaja").val();

 const div=document.createElement('div');
	 div.id='newdiv';
   ulList.appendChild(div);

  const br1=document.createElement('br');
  const br2=document.createElement('br');

  div.appendChild(br1);

   const ime=document.createElement('h3');
    ime.innerHTML=naziv_dogadjaja;
    div.appendChild(ime);

     const img=document.createElement('img');
     img.setAttribute("src", slika_dogadjaja);
     img.setAttribute("height", "300");
     img.setAttribute("width", "350");
     img.setAttribute("alt", naziv_dogadjaja);
     img.setAttribute("title", naziv_dogadjaja);
     div.appendChild(img);

    const opis=document.createElement('h5');
      opis.innerHTML=opis_dogadjaja;
      div.appendChild(opis);

      div.appendChild(br2);

 //div.id=snap.key;


});

/*
 dbRefObject.on('child_changed', snap=>{
   const slika_dogadjaja=snap.child("slika_dogadjaja").val();
   const opis_dogadjaja=snap.child("opis_dogadjaja").val();
   const naziv_dogadjaja=snap.child("naziv_dogadjaja").val();	 const liChanged =document.getElementById(snap.key);
	 liChanged.innerHTML=slike;
 });

 dbRefObject.on('child_removed', snap=>{
   const slika_dogadjaja=snap.child("slika_dogadjaja").val();
   const opis_dogadjaja=snap.child("opis_dogadjaja").val();
   const naziv_dogadjaja=snap.child("naziv_dogadjaja").val();
   	const liToRemove =document.getElementById(snap.key);
	liToRemove.innerHTML=slike;
	liToRemove.remove();
 });
*/
