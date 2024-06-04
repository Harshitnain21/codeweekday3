import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';


function Myaxios() {

const [x , y]=useState([]);

const myapi =()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then((d)=>{
        console.log(d);
        y(d.data);
    });
}


// useEffect(()=>{
//     myapi();
// },[]);



// const abc = ()=>{
//     y("this is change value of default");
// }
  return (
    <Fragment>
    <div>Myaxios</div>
    <input type='button' value="change  value" onClick={myapi}/>
        {x.map((b)=>{
            return( 
                <div key={b.id}>
            <h1> {b.id}</h1>
            <h3>{b.title}</h3>
            </div>
        )
        })}
    </Fragment>
  )
}

export default Myaxios