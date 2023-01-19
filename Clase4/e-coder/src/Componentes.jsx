/* import React,{Component} from "react"

export class Componente extends Component{
    render(){
        return(
            <p>Componente Basado en Clases-rce-</p>
        )
    }
}

 */
/* ------------------------------------------------ */
/* function Componente (){
    return(
        <p>Componente Basado en funciones-rfce</p>
    )
}

export default Componente */


/* import React,{Component} from "react"

export class Componente extends Component{
    render(){
        return(
            <p>Componente Basado en Clases-rce-</p>
        )
    }
}
 */


export const Titulo = ({nombre}) =>{
    return(
        <h1>{nombre}</h1>
    )
}

export const Item = ({valor})=>{
    return(
        <h1>{valor}</h1>
    )
}

export const Input = ({placeholder})=>{
    return(
        <input type="text" placeholder={placeholder} />
    )
} 