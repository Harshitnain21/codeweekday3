import React, { useEffect, useState } from 'react'
import Mychildone from './childspage/Mychildone'
import Mychildtwo from './childspage/Mychildtwo'

function Mypropspage() {

    const name = "kumar singh";
    const xyz = () => {
        alert("welcome to access parent function");
    }

    const [ldata, sldata] = useState([])

    useEffect(() => {

        const gtdata = JSON.parse(localStorage.getItem("mykey"));
        console.log(gtdata);
        sldata(gtdata ? gtdata : []);

    }, [])




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
                        <Mychildone abc={name} myfunc={xyz}></Mychildone>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='border bg-success p-2'>
                        <h1>Child elements</h1>
                        <Mychildtwo></Mychildtwo>
                    </div>
                </div>

                <div className='col-md-12'>
                    <div className='border bg-success p-2'>
                        <h1>get data from local storeage</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">s.no</th>
                                    <th scope="col">username</th>
                                    <th scope="col">Email id</th>
                                    <th scope="col">course</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ldata.map((d,s) => {
                                    return (
                                        <tr key={s}>
                                            <th scope="row">{++s}</th>
                                            <td>{d.name}</td>
                                            <td>{d.email}</td>
                                            <td>{d.course}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Mypropspage