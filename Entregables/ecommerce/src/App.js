import './App.css';
import React from 'react';

import { ItemListContainer } from './components/Desafios/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Desafios/NavBar/NavBar';
import { ItemDetailContainer } from './components/Desafios/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartContainer } from './components/Desafios/CartContainer/CartContainer';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
            <div>
                <Navbar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer />}/>
                  <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
                  <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
                  <Route path="/cart" element={<CartContainer/>}/>
             {/*      <Route path='*' element={<ItemListContainer />}/> */}
                  {/*  // cualquier otra ruta me reenderiza este componente */}
                </Routes>
            </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
