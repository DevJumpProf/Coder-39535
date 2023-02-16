
import './App.css';

function App() {
/*   const onClickButton = ()=>{
    alert("Aca iria un modal (ventana emergente)")
  } */

  const onClickButton = ()=>{
    alert("hiciste Click")
  } 

  const onDoubleClickh1 = ()=>{
    alert("hiciste doble Click")
  } 

/*   const onMouseOver = ()=>{
    alert("Pasaste el mouse Sobre h2")
  }  */

/*   const onMouseOut= ()=>{
    alert("saliste de la linea")
  }  */

/*   const onKeyDownTecla=()=>{
    alert("presionaste una tecla")
  } */

/*   const onKeyPressTecla=()=>{
    alert("soltaste una tecla")
  } */

/*   const onFocusTecla=()=>{
    alert("ingresaste al campo")
  } */

  const onChangeForm=()=>{
    alert("hubo un cambio")
  }


  return (
    <div className="App">
{/*     <button className='CrearTareasBoton' onClick={()=> console.log("click")}> BOTON </button> */}
{/* <button className='CrearTareasBoton' onClick={onClickButton}> BOTON </button> */}

<button  onClick={onClickButton}>CLICK</button> 
<h1  onDoubleClick={onDoubleClickh1}>DOBLE CLICK</h1>
{/* <h2 onMouseOver={onMouseOver}> MOUSE OVER </h2> */}
{/* <h2 onMouseOut={onMouseOut}> MOUSE OUT </h2> */}

{/* <input type='text' onKeyDown={onKeyDownTecla} ></input> */}
{/*  <input type='text' onFocus={onFocusTecla} ></input>  */}

{/*  <input type='text' onBlur={onBlurTecla} ></input>  */}

{/*  <input type='text' onChange={onChangeForm} ></input>  */}




    </div>
  );
}

export default App;
