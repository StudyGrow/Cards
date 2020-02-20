//Globale Variablen
var addInitHidden;

//Funktionen
function hideResults(){
    document.getElementById('matches').innerHTML='';
    document.getElementById('search').value='';
}




function findMatches(){
  var sText = $('#search').val();
  var cards = $('.card-header').map(function(){
              return $.trim($(this).text());
          }).get();
  var matches = cards.filter(card =>{
    const regex = new RegExp(`${sText}`, 'gi');
    return card.match(regex);
  });
  if(sText.length<=2 ||matches.length==0){
    matches=[];
    document.getElementById('matches').innerHTML='';
  }
  outputHTML(matches);// show max 5 results
}



function getRelatedIndex(content){
  var cards = document.getElementsByClassName('card-header');
  
  for(var i=0; i<cards.length;i++){
    
    if(cards[i].innerText==content){
      return cards[i].nextSibling.lastChild.id;
    }
  }
}




function outputHTML(matches){
  if(matches.length>0){
    const html = matches.map(match=> `<li class="list-group-item">
      <a class="nav-link" data-target="#carouselExampleControls" data-slide-to="${getRelatedIndex(match)}"  href="#">${match}</a> 
    </li>`).join('');
    document.getElementById('matches').innerHTML= '<ul class="list-group">' + html + '</ul>';
  }
} 




var getRandomCard = function() {
    randomShowCard();
}
function randomShowCard(){

  var activeCardIndex = document.getElementsByClassName('active')[0].getElementsByClassName('collapse')[0].id; //id of the card that is currently active

  var i = document.getElementById('carouselInner').children.length; //count the current amount of cards
  var rand = activeCardIndex;
  while(rand == activeCardIndex) //calculate a new random index
  {
    rand = Math.floor(Math.random() *i); //random index
  } 

  $('.carousel').carousel(rand); //use bootstrap method to go to a different slide
}



function getActiveCardIndex(){
  return document.getElementsByClassName('active')[0].getElementsByClassName('showMe')[0].getAttribute('id');
}





function showAlert(type,content){
  var msg = document.createElement("div");
  msg.setAttribute('class',`alert alert-${type} alert-dismissible fade show`);
  msg.setAttribute('role','alert');
  msg.innerHTML= `${content}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>`;
  document.getElementById('mainContainer').prepend(msg);
}






function addCard(){  //Funktion um eine neue Karte hinzuzufügen

  //Lese Daten aus der Form aus
  var thema = document.getElementById("thema").value;
  var content = document.getElementById('content').value;
  var vl= document.getElementById('vorlesung').textContent;
  var img = document.getElementById('vorlesung').textContent;
  
  var count =document.getElementById('carouselInner').children.length; //anzahl der bereits exisiterenden Karten
  var ul = document.getElementById("navlist");
  if(content.length==0||thema.lenght==0){
    showAlert('warning','Bitte fülle alle Felder aus');
  }
  else{
    
    var newCarouselItem = document.createElement("div");
    newCarouselItem.setAttribute('class','carousel-item');
    if (count == 0){
      newCarouselItem.setAttribute('class','active');
    }else if(count==1){
      var prev = document.createElement('a');
      prev.setAttribute('class','carousel-control-prev');
      prev.setAttribute('href','#carouselExampleControls');
      prev.setAttribute('role','button');
      prev.setAttribute('data-slide','prev');
      prev.innerHTML = '<i class="fas fa-chevron-left"></i>';

      var nxt = document.createElement('a');
      nxt.setAttribute('class','carousel-control-next');
      nxt.setAttribute('href','#carouselExampleControls');
      nxt.setAttribute('role','button');
      nxt.setAttribute('data-slide','next');
      nxt.innerHTML = '<i class="fas fa-chevron-right"></i>';

      document.getElementById('carouselExampleControls').appendChild(prev);
      document.getElementById('carouselExampleControls').appendChild(nxt);
    }
  
    newCarouselItem.innerHTML =`
    <div class="card">
    <div class="card-header" id=t${count}>
    ${thema}
    <div class="float-right"><button class="btn btn-light" type="button" data-toggle="collapse" ><div class="fas fa-pen" id="edit${count}"></div></button></div>
    </div>
    <div class="card-body">
    <button class="btn btn-light" type="button" data-toggle="collapse" data-target=${count} aria-expanded="false" aria-controls=${count}>
    Mehr dazu <i class="fas fa-caret-down"></i>
    </button>
    <div class="collapse" id=${count}>
    <br>
    <p>
    ${content}
    </p>
    </div>
    </div>
    </div>`;

    document.getElementById('carouselInner').appendChild(newCarouselItem); //Karteikarte ins Carousel einfügen

    //poste card an server
    fetch('/addCard',{
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        vorlesung:vl,
        thema:thema,
        content:content,
        img:img
      })
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      //id die vom server erhalten wird als id für karte hinzufügen
      var newCard = newCarouselItem.getElementsByClassName('card')[0];
      console.log(newCard); 
      newCard.setAttribute('id',data.id);  
        console.log(newCard); 
      console.log('success');   
    })
    .catch((err)=> console.log(err));
    
    //Leere form
    document.getElementById("thema").value = "";
    document.getElementById('content').value="";
    //Success message
    //zeige neue Karte an
    
      $('.carousel').carousel(count);
  }  
}






function enableEdit(){
  var x = document.getElementById("addCard");
  if (x.getAttribute('style')=='display:none'){
      toggleAddView();
      addInitHidden=true;
  }else{
      addInitHidden=false;
  }
  var h4 = document.getElementById('addCard').getElementsByTagName('H4')[0];
  h4.innerText = 'Bearbeiten'; //überschrift ändern
  //button ändern
  var btn =  document.getElementById('addBtn');
  btn.setAttribute('class','btn btn-success mb-2')
  btn.setAttribute('value', 'Sichern');
  btn.setAttribute('state','save');

  var editBtn  = document.getElementById('editCard');
  editBtn.setAttribute('class','btn btn-danger');
  editBtn.innerHTML = '<i class="fas fa-times"></i>';
  editBtn.setAttribute('state','cross');

  var activeCarouselItem = document.getElementsByClassName('active')[0]; //aktive karte auswählen
  //Karteninhalt in die Textfelder laden
  document.getElementById('thema').value= activeCarouselItem.getElementsByClassName('card-header')[0].innerText;
   
  var child = activeCarouselItem.getElementsByClassName('card-body')[0].getElementsByClassName('collapse')[0].getElementsByTagName('p')[0].nextSibling;
  var temp = "";
  if(child != null){
    while(child != null){
      if(child.textContent == ""){
        
        temp += "\n";
        child = child.nextSibling;
      }
      else{
        temp += child.textContent;
        child = child.nextSibling;
      }
    }
  }

  document.getElementById('content').value = temp
  $('#content').focus();
}






function cancelEdit(){
  $('#staticBackdrop').modal('hide');
  //leere Form
  document.getElementById('thema').value= "";
  document.getElementById('content').value = "";
  
  var h4 = document.getElementById('addCard').getElementsByTagName('H4')[0];
  h4.innerText = 'Karteikarte hinzufügen'; //überschrift ändern
  var btn =  document.getElementById('addBtn');//ändere Buttons
  //addButton
  btn.setAttribute('class','btn btn-primary mb-2')
  btn.setAttribute('value', 'Hinzufügen');
  btn.setAttribute('state','add');
  //editButton
  var editBtn  = document.getElementById('editCard');
  editBtn.setAttribute('class','btn btn-light');
  editBtn.innerHTML = '<i class="fas fa-pen"></i>';
  editBtn.setAttribute('state','pen');
  if(addInitHidden){
      toggleAddView();
  }
}



function contentParse(content){  
  content = content.replace(/\n/gi, "\n<br>");
   return content;
 }


function updateCard(cardNumber){//Karteikarte updaten
  var oldTitle = document.getElementById('t'+cardNumber).innerText;
  var newTitle = document.getElementById('thema').value;
  
  if(oldTitle!=newTitle){ //falls der Titel geändert wird, wird automatisch eine neue Karte erstellt
    addCard(); 
  }else{
    var thema = document.getElementById("thema").value;
    var content = document.getElementById('content').value;
    var vl= document.getElementById('vorlesung').textContent;
    var img = document.getElementById('vorlesung').textContent;
  
    document.getElementsByClassName('active')[0].getElementsByClassName('collapse')[0].innerHTML = '<p lang="de">' + content.replace(/\n/gi, "<br>")+'</p>';
    //Leere form
    document.getElementById("thema").value ="";
    document.getElementById('content').value="";
    //überschrift ändern
    var h4 = document.getElementById('addCard').getElementsByTagName('H4')[0];
    h4.innerText = 'Karteikarte hinzufügen'; 
    //add button ändern
    var btn =  document.getElementById('addBtn');
    btn.setAttribute('class','btn btn-primary mb-2')
    btn.setAttribute('value', 'Hinzufügen');
    btn.setAttribute('state','add'); 
    //edit button ändern
    var editBtn  = document.getElementById('editCard');
    editBtn.setAttribute('class','btn btn-light');
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';
    editBtn.setAttribute('state','pen');
      
    var cardID = document.getElementById(cardNumber).parentNode.parentNode.getAttribute('id'); 
    
    
    
    fetch('/updateCard',{ //sende das Update an den Server
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        vorlesung:vl,
        thema:thema,
        content:content,
        img:img,
        id:cardID
      })
    })
    .catch((err)=> console.log(err)); 
    
  }
  if(addInitHidden){//Falls das Karteikarten feld vorm dem Bearbeiten ausgeblendet war wird es jetz wieder ausgeblendet
      toggleAddView();
  }
}






function toggleAddView(){//Zeige Karteikarte hinzufügen an oder blende es aus
  var x = document.getElementById("addCard");
  if (x.getAttribute('style')=='display:none') {
    x.setAttribute('style','display:block')
    document.getElementById('toggleAdd').setAttribute('class','btn btn-success');
  } else {
      x.setAttribute('style','display:none')
      document.getElementById('toggleAdd').setAttribute('class','btn btn-light');
  }  
}




//Event Listeners
$("form").submit(function(e){//verhindere dass eine POST request an den server geschickt wird, wenn im Suchfeld auf Enter gedrückt wird
      e.preventDefault();
});
$('.showMore').on('click',()=>{//öffne/schließe den content der entsprechenden Karte
    var relatedId = getActiveCardIndex();
    $(`#${relatedId}`).collapse('toggle');
});
$(document).on('keydown',(e)=>{//Pfeiltasten Shortcuts
  var relatedId =getActiveCardIndex();
  if($('input, textarea').is(':focus')==false){//user ist gerade nicht am Bearbeiten von Text
    switch(e.originalEvent.key){
      case'ArrowDown':
          $(`#${relatedId}`).collapse('toggle'); //Toggle Show more
        break;
      case'ArrowLeft':
        $('#carouselExampleControls').carousel('prev'); //voherige Karte  
        break;
      case'ArrowRight':
        $('#carouselExampleControls').carousel('next');//nächste Karte
        break;      
    }
  }
})
$('#editCard').on('click',()=>{
  //console.log($('#editCard').attr('state'))
  if($('#editCard').attr('state')=='pen'){
    enableEdit();
  }else if($('#editCard').attr('state')=='cross'){
    $('#staticBackdrop').modal('show');
  } 
})
$('#addBtn').on('click',()=>{
  if($('#addBtn').attr('state')=='add'){//Falls hinzufügen Button
    addCard();
  }else{//Falls Update Button
    var relatedId = getActiveCardIndex();
    updateCard(relatedId);
  }
})
$('#rand').on('click',getRandomCard);
$('#cancel').on('click',cancelEdit);
$(document).on('click',hideResults);
$('#carouselExampleControls').on('slide.bs.carousel', ()=> {
  $('.collapse').collapse('hide');
  var editBtn  = document.getElementById('editCard');
    if(editBtn){
      editBtn.setAttribute('class','btn btn-light');
      editBtn.innerHTML = '<i class="fas fa-pen"></i>';
      editBtn.setAttribute('state','pen');  
    }
    if($('#addBtn').attr('state')=='save'){
      cancelEdit();
  }
})
$('#toggleAdd').on('click',toggleAddView);
$('#search').on('input',findMatches);