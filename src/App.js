import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import Checkout from './components/Checkout';
import data from './data';

function App() {

  const {productsList} = data; //destructuring productsList de data;  

  const [items, setItems] = useState([]);

  const addItem = (product) =>{  //se pasa por parametro el producto que se va agregar
      const exist = items.find(i=> i.id === product.id)   //variable que busca si la id ingresa es igual al id del producto
      if(exist){
          setItems(items.map(i => 
              i.id === product.id ? {...exist, quantity: exist.quantity + 1} : i)
          )   //si los id coinciden tengo que buscarlos en el array de items y sumar
      }else{
          setItems([...items, {...product, quantity:1}])
      }
  };

  const deleteItem = (product)=>{
    const remove = items.filter(p => p.id !== product.id)
    setItems(remove)
  };

  const clearAll = () =>{
    setItems([]);
  }

  const total = items.reduce((acumulador, current) => acumulador + current.price * current.quantity, 0);
  const spanNumber = items.length; //Numero que aparece junto con el icono del carrito

  return (
    <div className="App">
      <NavBar total={total} spanNumber={spanNumber} clearAll={clearAll}/>
      <h4 className="text-center mt-5">Lista de precios</h4>
      <ItemList productsList={productsList} addItem={addItem}/>
      <Checkout items={items} addItem={addItem} deleteItem={deleteItem} total={total} clearAll={clearAll}/>
    </div>
  );
}

export default App;
