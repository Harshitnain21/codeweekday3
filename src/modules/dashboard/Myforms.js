import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Myforms() {
    const {register,handleSubmit,formState: { errors }} = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='container'>
            <div className='row'>
                <div className='col-8'>
                    <h1>MY forms</h1>
                    <div className='container-fluid shadow bg-light p-3'>
                        <div className='row'>
                            <div className='col-sm-6 mt-3'>
                                <label className="form-label">Email address</label>
                                <input type='email' placeholder='email' className='form-control' {...register("email",{required:true})}/>
                                {errors.email && <div class="form-text text-danger">email id is required</div>}
                            </div>

                            <div className='col-sm-6 mt-3'>
                                <label className="form-label">full Name</label>
                                <input type='text' placeholder='fullnameeee' className='form-control' {...register("fullname",{required:true, maxLength:8})}/>
                                {errors.fullname && <div class="form-text text-danger">full name is required</div>}
                            </div>
                            <div className='col-sm-6 mt-3'>
                                <label className="form-label">Phone No</label>
                                <input type='text' placeholder='phone' className='form-control' {...register("phone",{required:true, pattern:/[0-9]{10}/i})}/>
                                {errors.phone && <div class="form-text text-danger">Phone No is required</div>}
                            </div>

                            <div className='col-sm-6 mt-3'>
                                <label className="form-label">Age</label>
                                <input type='number' placeholder='age' className='form-control' {...register("age")}/>
                                <div class="form-text text-danger">age is required</div>
                            </div>

                            <div className='col-sm-6 mt-3'>
                                <label className="form-label">Position</label>
                                <select className='form-control' {...register("position")}>
                                    <option>Designer</option>
                                    <option>Developer</option>
                                    <option>Tester</option>
                                    <option>Other</option>
                                </select>
                                <div class="form-text text-danger">full name is required</div>
                            </div>

                            <div className='col-sm-6 mt-3'>
                                <label className="form-label">Gender</label><br/>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="male"  {...register("gender")}/>
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" value="female" {...register("gender")}/>
                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div>

                            </div>


                            <div className='col-sm-12 mt-3'>
                                <button type='submit' className='btn btn-success'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    )
}

export default Myforms