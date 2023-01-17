import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Boton from './Boton';
import Card from "./Card"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <Boton numero= {1} />
    <Boton numero= {2} />
    <Boton numero= {3}/>
    <Boton numero= {4}/>
    <Boton />
    <Card nombre="Lionel Messi" fechaNac={1987} clubes={["Barcelona","PSG"]} mundial={true} late={true} numero={8} />
    <Card nombre="Cristiano Ronaldo" fechaNac={1985} clubes={["Manchester","Real Madrid" ,"Juventus"]} mundial={false} late={true} />
    </>
);

