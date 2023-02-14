
import {MiContext} from "../../aplicacion/Provider"

const Verestado=()=>{

    const [state, setState] = MiContext()
return (
    <>
    <p>{state.name}</p>
    <p>{state.surName}</p>
    </>
)



}

export default Verestado