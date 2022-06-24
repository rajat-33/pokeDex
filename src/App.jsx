import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import typeColor from './TypeColor.jsx'


const App1=()=>{
    const [val, setVal]=useState();
    const [name, setName]=useState('_');
    const [type, setType]=useState('_');
    const [moves, setMoves]=useState('_');
    const [height, setHeight]=useState('_');
    const [weight, setWeight]=useState('_');
    const [image, setImage]=useState();
    const [bgColor, setBgColor]=useState('background-color: green');

    useEffect(()=>{
        async function getResponse(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${val}`);
            setName(res.data.name);
            setType(res.data.types[0].type.name);
            setMoves(res.data.moves.length);
            setHeight(res.data.height/10);
            setWeight(res.data.weight/10);
            setImage(res.data.sprites.front_default);
            document.getElementById('mainContainer').style= typeColor.get(type);
        }
        getResponse();
    })

    return(
        <>
            <div className="container" id="mainContainer" style={{bgColor}}>
                <input className="searchBox" placeholder="Search Pokemon" value={val}  onChange={(event)=>{
                    setVal(event.target.value);
                }}>
                </input>
                <div className='card'>
                    <img className="pokeImg" src={image}></img>
                    <h1 className="pokeName">Name: {name}</h1>
                    <h2 className="pokeType">Type: {type}</h2>
                    <h2 className="pokeMoves">It has {moves} moves</h2>
                    <h2 className="pokeHeight">Height: {height}m</h2>
                    <h2 className="pokeWeight">Weight: {weight}kg</h2>
                </div>
            </div>
        </>
    );
}

export default App1;