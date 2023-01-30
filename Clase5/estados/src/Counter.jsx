import { useState } from "react";
import Button from 'react-bootstrap/Button';

export const Counter = () =>{
    const[count,setCount]= useState(0)
    return (
        <>
      
        <Button onClick={()=>setCount(count+1)} size="sm" variant="success">+</Button>{' '}
        <p>Numero: {count}</p>
        <Button onClick={()=>setCount(count-1)} size="sm" variant="success">-</Button>{' '}

        </>
    )
}


/* import { useState, useEffect } from "react";

export const Counter = () =>{
    const[count,setCount]= useState(0)

    useEffect(()=>{
console.log("el contador se actualizo")
    },[count])

    return (
        <>
    <p>Numero: {count}</p>
        <button onClick={()=>setCount(count+1)} >+</button>
        <button onClick={()=>setCount(count-1)} >-</button>
        </>
    )
} */

/* import { useEffect } from "react";

function Window () {

useEffect(()=>{
const handleResize = () =>{
    console.log("la ventana se ha redimensionado");
}
window.addEventListener('resize', handleResize)

return () =>{
    window.removeEventListener('resize', handleResize) 
}
},[])

return (
    <p>Abri la consola y redimensiona la ventana</p>
)

}
export default Window */