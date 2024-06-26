import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Secondgraph from './Secondgraph.tsx';

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


function Mygraphpage() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <section className='bg-dark'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        {/* <YAxis /> */}
                        <Tooltip shared={true} trigger="mouseover" />
                        {/* <Legend /> */}
                        <Bar dataKey="pv" fill="red" />
                        <Bar dataKey="uv" fill="orange" />
                        <Bar dataKey="amt" fill="green" />
                    </BarChart>
                    </section>
                </div>
                <div className='col-md-6'>
                    <div className='bg-dark'>
                        <Secondgraph/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mygraphpage