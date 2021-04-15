
const idInput = document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

function setCard(){
   let card = idInput.value ;
   let cardColor = colorInput.value;
   let diamonds = document.getElementById('diamonds').childNodes;
   let hearts = document.getElementById('hearts').childNodes;
   let spades = document.getElementById('spades').childNodes;
   let clubs = document.getElementById('clubs').childNodes;


   if (card === 'diamonds' || card === 'hearts'){
       for(let i = 0;i<=hearts.length;i++){
        diamonds[i].style.color = `${cardColor}`;
        hearts[i].style.color = `${cardColor}`;
        idInput.style.color = `${cardColor}`;
       }
   }else if (card === 'spades' || card === 'clubs'){
       for(let i = 0;i<=spades.length;i++){
        spades[i].style.color = `${cardColor}`;
        clubs[i].style.color = `${cardColor}`;
        idInput.style.color = `${cardColor}`;
       }
   }
}
function reset(){
    let diamonds = document.getElementById('diamonds').childNodes;
    let hearts = document.getElementById('hearts').childNodes;
    let spades = document.getElementById('spades').childNodes;
    let clubs = document.getElementById('clubs').childNodes;

    for(let i = 0;i<=spades.length;i++){
        spades[i].style.color = 'grey';
        clubs[i].style.color = 'grey';
        diamonds[i].style.color = 'grey';
        hearts[i].style.color = 'grey';
    }
}