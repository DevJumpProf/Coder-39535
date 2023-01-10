
let estadoBatman = "apagado";

let sonidoBatman = document.querySelector("#bati-encendido")
let sonidoBoton = document.querySelector("#bati-click")

let batman = document.querySelector("#batman")
let boton = document.querySelector("#bati-boton")

boton.addEventListener("click",()=>{
    controlarBatman()
})

const controlarBatman = ()=>{

if (estadoBatman=="apagado"){
estadoBatman= "encendido";
sonidoLinterna()
batman.classList.add("batman-activo")
}else{
estadoBatman = "apagado"
sonidoLinterna()
batman.classList.remove("batman-activo")
}
}

const sonidoLinterna=()=> {
    if(sonidoBatman.paused){
        sonidoBoton.play()
        sonidoBatman.play()
    }else{
        sonidoBoton.play()
        sonidoBatman.pause()
        sonidoBatman.currentTime=  0;
    }
}
