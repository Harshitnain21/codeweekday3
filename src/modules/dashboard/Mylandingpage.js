import React from 'react'
import Myheader from '../shares/Myheader'
import Myfooter from '../shares/Myfooter'
import Mysidenav from '../shares/Mysidenav'
import { Outlet } from 'react-router-dom'


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
                        <Outlet></Outlet>
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