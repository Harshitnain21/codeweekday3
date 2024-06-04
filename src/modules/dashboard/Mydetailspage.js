import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

function Mydetailspage() {
    const {id} = useParams();
    const [sv, sf] = useState([]);

    const myfetch = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((d) => {
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
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-12'>
                <h1>Id: {sv.id}</h1>
                <h3>title: {sv.title} </h3>
                <h5>Id: {sv.body}</h5>
                
            </div>
        </div>
    </div>
  )
}

export default Mydetailspage