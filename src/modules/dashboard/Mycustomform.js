import React, { useState } from 'react'

function Mycustomform() {
    const [cform, cformchan]=useState({
        name:"",
        email:"",
        course:""
    })

const inputupdate = (e)=>{
    // console.log(e);
    // cformchan(e.target.value);
    const {name,value} = e.target;
    cformchan((x)=>{
          return{
            ...x,
            [name]:value
          }
        })
}

const mydata =[];
const mysubmit =()=>{
    console.log(cform)
    // if(cform.name==="ravi")
    //     {
    //         alert("ok");
    //     }
    if(cform.name==="" || cform.email==="" || cform.course==="")
        {
            alert("form is blank");
        }
        else{
            // alert("welcome to dashboard");
            mydata.push(cform);
            localStorage.setItem("mykey",JSON.stringify(mydata));
        }
}



    return (
        <form>
        <div className='container bg-light p-4 shadow'>
            <div className='row'>
                <div className='col-md-4'>
                    <label className="form-label">Name</label>
                    <input type='text' placeholder='username' className='form-control' name='name' value={cform.name} onInput={inputupdate}/>
                    <div class="form-text text-danger">email id is required</div>
                </div>
                <div className='col-md-4'>
                    <label className="form-label">Email address</label>
                    <input type='email' placeholder='email' className='form-control' name='email' value={cform.email} onInput={inputupdate}/>
                    <div class="form-text text-danger">email id is required</div>
                </div>
                <div className='col-md-4'>
                    <label className="form-label">course</label>
                    <select className='form-control' name='course' value={cform.course} onChange={inputupdate}>
                        <option>mern</option>
                        <option>java</option>
                        <option>excel</option>
                    </select>
                    <div class="form-text text-danger">email id is required</div>
                </div>
                <div className='col-md-12 p-3'>
                   <button className='btn btn-success' type='button' onClick={mysubmit}>submit</button>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Mycustomform