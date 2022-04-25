let btnValue 

function printValue(btn){
btnValue = btn.value
console.log(btnValue)
document.getElementById('sbmtBtn').disabled=false
return btnValue
}


function changeScreen(){
   document.getElementById('ratingContainer').style.display='none'
   document.getElementById('starIcon').style.display='none'
   document.getElementById('tyContainer').style.display='flex'

   document.getElementById('selectedRatingBox').innerHTML=`Você avaliou ${btnValue} de 5 ★ !`
}

