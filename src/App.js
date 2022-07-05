import './App.css';
import axios from "axios";
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [lista, setLista] = useState([{}]);
  const [esconder, setOcultar] = useState(false);
    const [poke, setPokemon] = useState({});
  useEffect(() => {
    const get = async () => {
      const data = await axios.get("https://pokeapi.co/api/v2/pokemon")
      setLista(data.data.results)
      return data.data    
  }
  get()
   },[]);
  const obtInf =async (id) =>{
    console.log(id)
    navigate(`/pokemon/${id}`);
    const data= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    setPokemon(data.data)
    console.log(data.data)
    setOcultar(true)
  }
  
 
  return (
    <div className="App" >
    
    <p> POKEMON YO TE ELIJO </p>

     <ul className='fotolista'>
        {lista.map((lista , index) => (
   <div>   
          <li key={lista.name}>
         {lista.name}
         

          </li>
          <button onClick={() => obtInf(index+1)} className="boton">VER POKEMON SELECCIONADO</button>
          
   </div>
        ))}
      </ul> 
  
    </div>
  );
}

export default App;
