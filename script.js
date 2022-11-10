function calculoTicket(){
    let montoFinal;
    let cant=document.getElementById("cantidad").value;
    let cat=document.getElementById("categoria");
    let categoria = cat.value;
    if(cant<=0){
        alert("La cantidad tiene que ser superior a 0. Reintente");
    }else{
        switch(categoria){
            case "Estudiante": montoFinal=cant*(200-(200*80)/100); break;
            case "Trainee": montoFinal=cant*(200-(200*50)/100); break;
            case "Junior": montoFinal=cant*(200-(200*15)/100); break;
        }
    }
    document.getElementById("ronly").value = montoFinal;
}
