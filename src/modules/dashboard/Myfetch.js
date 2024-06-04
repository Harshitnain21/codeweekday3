import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Myfetch() {

  const [sv, sf] = useState([]);

  const myfetch = () => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((d) => {
      return d.json();
    })
      .then((od) => {
        console.log(od);
        sf(od);
      })



  }
  useEffect(() => {
    myfetch();
  },[])


  return (
    <table className='border table table-bordered  border-primary'>
      <thead>
      <tr>
        <th>s.no</th>
        <th>userId</th>
        <th>Id</th>
        <th>title</th>
        <th width="500">Discription</th>
        <th width="120">Actions</th>
      </tr>
      </thead>
      <tbody>
        {sv.map((d,s) => {
          return (
            <tr key={d.id}>
              <td>{++s}</td>
              <td>{d.userId}</td>
              <td>{d.id}</td>
              <td>{d.title}</td>
              <td>{d.body}</td>
              <td>
              <Link  to={`view/`+d.id} className="badge text-bg-primary p-2"><IoEyeSharp/></Link>
              <span className="badge text-bg-info p-2 ms-2"><FaEdit/></span>
              <Link className="badge text-bg-danger p-2 ms-2" ><MdDelete/></Link>
              </td>
            </tr>
          )
        })}
      </tbody>
      <tfoot>

      </tfoot>
    </table>
  )
}

export default Myfetch