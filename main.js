const d = document, card = d.querySelector(".card"), contDes = d.querySelector(".cont-description");

card.addEventListener('mouseover',  e =>{    
    card.classList.add("card-hover") 
    contDes.classList.add("cont-description-active");
    
 
})

card.addEventListener('mouseout',  e =>{     
    contDes.classList.remove("cont-description-active")
    card.classList.remove("card-hover") 
})