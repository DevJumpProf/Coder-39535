import "./App.css";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { LandingPage } from "./pages/LandingPage";
import { PeliculaDetalle } from "./pages/PeliculaDetalle";

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
  <Route path="/pelicula/:peliculaId" element={<PeliculaDetalle/>}/>
</Routes>
  </main>
</BrowserRouter>
  );
}
