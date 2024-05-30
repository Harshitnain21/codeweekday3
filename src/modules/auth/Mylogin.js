import React from 'react'
import { Link } from 'react-router-dom'

function Mylogin() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-5'>
                <h1>login page</h1>
                <div className='container-fluid shadow bg-light p-3'>
                  <div className='row'>
                    <div className='col-sm-12 mt-3'>
                      <input  type='text' placeholder='username' className='form-control'/>
                  </div>
                  <div className='col-sm-12 mt-3'>
                      <input  type='password' placeholder='username' className='form-control'/>
                  </div>
                  <div className='col-sm-12 mt-3'>
                      <Link to="landing"  className='btn btn-success'>Login</Link>
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mylogin