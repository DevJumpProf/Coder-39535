import Show from "./components/Show"
import Create from "./components/Create"
import Edit from "./components/Edit";
/* import Edit from "./components/Edit"  */
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path="/" element={<Show/>}/>
<Route path="/create" element={<Create/>}/>
<Route path="/edit/:id" element={<Edit/>}/>
</Routes>

</BrowserRouter>

    </div>
  );
}

export default App;
