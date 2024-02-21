import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';

function Register() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [phone, setphone] = useState("")
  let url = "http://localhost:8000/user"

  const submit = async () => {
    try {
      await axios.post(`${url}`, {
        name: name,
        email: email,
        password: password,
        phone: phone,
        role: "user"
      })
      alert("record submited")
      setemail("")
      setname("")
      setpassword("")
      setphone("")
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(() => {
    toast('Hello Jenish!',
      {
        icon: '👏',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
          display: "flex",
          justifyContent: "center"
        },
      }
    );
  }, [])

  return (
    <div>
      <Header />
      <div className="container" >
        <div classname="row" style={{ display: "flex", justifyContent: "center" }}>
          <form style={{ background: "lightblue", padding: "20px", margin: "15px", width: "600px" }}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="name" value={name} onChange={(e) => setname(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">name is required</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input value={email} onChange={(e) => setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Number</label>
              <input value={phone} onChange={(e) => setphone(e.target.value)} type="number" className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        reverseOrder={false} />
    </div>

  )
}

export default Register