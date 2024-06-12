import React, { useState } from 'react'

function Myconditional() {


const [abc,setabc]=useState('one');

const mychange = (a)=>{
    console.log(a.target.value);
    setabc(a.target.value);
}


  if(abc==="one")
    {
        return(
            <div className='page1'>
                <h1>this is first page</h1>
                <select onChange={mychange}>
                    <option>one</option>
                    <option>two</option>
                    <option>thre</option>
                </select>
            </div>
        )
    }
    else if(abc==="two")
        {
            return(
                <div className='page2'>
                    <h1>Thisis second page </h1>
                    <select onChange={mychange}>
                    <option>one</option>
                    <option>two</option>
                    <option>thre</option>
                </select>
                </div>
            )
        }
    else{
        return(
            <div>
            <h1 className='h1'>this condition is not found</h1>
            <select onChange={mychange}>
                    <option>one</option>
                    <option>two</option>
                    <option>thre</option>
                </select>
                </div>
        )
    }
}

export default Myconditional