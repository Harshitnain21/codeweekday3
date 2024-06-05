import React from 'react'
import Mychildone from './childspage/Mychildone'
import Mychildtwo from './childspage/Mychildtwo'

function Mypropspage() {

const name="kumar singh";
const xyz = ()=>
{
    alert("welcome to access parent function");
}

  return (
    <div className='container' >
        <div className='row'>
            <div className='col-12'>
                <div className='border p-3 bg-light'>
                <h1>thi is parent element {name}</h1>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-6'>
                <div className='border bg-success p-2'>
                    <h1>Child elements</h1>
                    <Mychildone abc={name} myfunc= {xyz}></Mychildone>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='border bg-success p-2'>
                    <h1>Child elements</h1>
                    <Mychildtwo></Mychildtwo>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mypropspage