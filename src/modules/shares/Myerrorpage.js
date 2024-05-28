import React from 'react'
import { Link } from 'react-router-dom'

function Myerrorpage() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-12 text-center'>
            <h1 className='h1 text-danger errorp'>404</h1>
            <p>Not Found page</p>
            <Link to="" className='btn btn-danger'>Back to Home</Link>
        </div>
    </div>
</div>
  )
}

export default Myerrorpage