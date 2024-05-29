import React from 'react'
import Myheader from '../shares/Myheader'
import Myfooter from '../shares/Myfooter'
import Mysidenav from '../shares/Mysidenav'
import { Myjsondata } from './mydata'

function Mylandingpage() {
    return (
        <div className='container-fluid'>
            <div className='row fixed-top'>
                <div className='col g-0'>
                    <Myheader />
                </div>
            </div>
            <div className='row cus-mar'>
                <div className='col-md-2 g-0'>
                    <div className='border p-2 navfixed bg-info'>
                        <Mysidenav />
                    </div>
                </div>
                <div className='col-md-10 g-0'>
                    <div className='border p-2'>
                        <h4>Welcome to Dashboard </h4>
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
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col g-0 bg-info'>
                    <Myfooter />
                </div>
            </div>
        </div>

    )
}

export default Mylandingpage