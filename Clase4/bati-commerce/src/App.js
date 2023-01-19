import React from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import './App.css';

export default function App() {
  return (
    <>
      <NavBar background={'transparent'} />
      <Hero title="Batman Store" />
      <ItemListContainer greeting= "Lista de Productos"/>

    </>
  );
}
