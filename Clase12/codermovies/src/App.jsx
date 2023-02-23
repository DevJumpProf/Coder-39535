import "./App.css";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
<BrowserRouter>
  <header>
    <Link to="/">
      <h1 className="title">Peliculas</h1>
    </Link>
  </header>
  <main>
<Routes>
  <Route path="/"  element={<LandingPage/>}/>
  <Route path="/pelicula/:peliculaId" element="Componente Movie"/>
</Routes>
  </main>
</BrowserRouter>
  );
}
