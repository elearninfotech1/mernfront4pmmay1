import React, { useState } from 'react';
import innerstyles from './innerpages.module.css'
import axios from 'axios';
const AddStudent = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");

    const addStudentData=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:4000/student`,{name,email,phone,address})
        .then(res=>{
            alert("Student Added Succ....");
            setName("");
            setEmail("");
            setPhone("");
            setAddress("")
        })
        .catch(err=>{
            alert("Unable to Add Student Data")
            
        })
    }
  return (
    <main>
        <section className={innerstyles.bread}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Add Student</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">                        
                    </div>
                    <div className="col-md-4">   
                        <div className={innerstyles.bx_shadow}>
                            <form onSubmit={addStudentData}>
                                <div className='mb-4'>
                                    <input type='text' name="name" className='form-control' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className='mb-4'>
                                    <input type='text' name="email" className='form-control' value={email} placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <div className='mb-4'>
                                    <input type='text' name="phone" className='form-control' value={phone} placeholder='Phone' onChange={(e)=>setPhone(e.target.value)} />
                                </div>
                                <div className='mb-4'>
                                    <input type='text' name="address" className='form-control' value={address}  placeholder='Address'  onChange={(e)=>setAddress(e.target.value)} />
                                </div>
                                <div className='mb-4'>
                                    <input type='submit' className='btn btn-success' value="Add Student" />
                                </div>
                            </form>    
                        </div>                     
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default AddStudent