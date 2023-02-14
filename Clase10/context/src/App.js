import Provider from "./aplicacion/Provider";
import Login from "./components/Login/Login";
import Verestado from "./components/Verestado/Verestado";

import "./App.css";

function App() {
  return (
    <Provider>
      <Login/>
   <Verestado/>
    </Provider>
  );
}

export default App;
