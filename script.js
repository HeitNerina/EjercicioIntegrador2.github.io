function calculoTicket(){
    let montoFinal;
    let cant=document.getElementById("cantidad").value;
    let cat=document.getElementById("categoria");
    let categoria = cat.value;
    switch(categoria){
        case "Estudiante": montoFinal=cant*(200-(200*80)/100); break;
        case "Trainee": montoFinal=cant*(200-(200*50)/100); break;
        case "Junior": montoFinal=cant*(200-(200*15)/100); break;
    }
    document.getElementById("ronly").value = montoFinal;
}