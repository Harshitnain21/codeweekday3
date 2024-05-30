import React from 'react'
import { Myjsondata } from './mydata'

function Myhome() {
  return (
    <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-md-3 p-2 text-white'>
                                    <div className='bg-success p-2 rounded shadow'>
                                        <h2>No:20</h2>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2 text-white'>
                                    <div className='bg-warning p-2 rounded shadow'>
                                        <h2>No:20</h2>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2 text-white'>
                                    <div className='bg-primary p-2 rounded shadow'>
                                        <h2>No:20</h2>
                                    </div>
                                </div>
                                <div className='col-md-3 p-2 text-white'>
                                    <div className='bg-danger p-2 rounded shadow'>
                                        <h2>No:20</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                

                                    {Myjsondata.map((d) => {
                                        return (
                                            <div className='col-md-3'>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h5 className="card-title">{d.id}</h5>
                                                    <p className="card-text h6">{d.title}</p>
                                                    <hr/>
                                                    <p className="card-text">{d.body}</p>

                                                    <a href="#" className="btn btn-primary">{d.id}</a>
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    })}


                                </div>
                           
                        </div>
  )
}

export default Myhome