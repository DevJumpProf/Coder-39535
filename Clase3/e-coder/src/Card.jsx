
function Card ({nombre,fechaNac,clubes,mundial,late,numero}) {
    return(
<div>
    <h1 style={{backgroundColor:"blue"}} >{nombre}</h1>
    <small>{fechaNac}</small>
    <p>{clubes}</p>
    <small>{mundial?"Gano un mundial 🌟":"Sigue Participando🥴"}</small>
    <div>
    <small>{late?"Late ✅":"Nola❌"}</small>
    </div>
 
</div>
    )
}

export default Card