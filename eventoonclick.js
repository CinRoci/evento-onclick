function removeButton(element){
    console.log(element);
    element.style.display="none"
    element.remove();
    //Quita el voton de la pagina
}
function messageAlert(){
    window.alert("Ninja was liked");
    //al dar click en likes aparece una alerta con ese texto
}
function changeText(element){
    element.innerText="logout";
    //cambia la palabra login por logount
} 