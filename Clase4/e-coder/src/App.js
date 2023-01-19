
import './App.css';
/* import Componente from "./Componentes"
import FeedbackMessage from './FeedbackMessage';  */
import {Input,Item,Titulo} from "./Componentes"
function App() {
  return (
    <>
<Titulo nombre= "Curso React"/>
<Item valor= "La mejor comision"/>
<Input placeholder="Escriba algo Aqui"/>
</>
  );
}

export default App;
