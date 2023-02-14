import {MiContext} from "../../aplicacion/Provider"

const Login = () =>{

const [state, setState] = MiContext()

    return(
        
        <>
        <input type="text" onChange= {(e)=>{setState({...state,name:e.target.value})}}/>
        <input type="text" onChange= {(e)=>{setState({...state,surName:e.target.value})}}/>
        </>
    )

}

export default Login





