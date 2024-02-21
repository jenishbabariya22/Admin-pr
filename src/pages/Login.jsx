import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import { useAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [auth, setauth] = useAuth()
  const navigate = useNavigate()

  const submit = async () => {
    try {
      let { data } = await axios.get(`http://localhost:8000/user?password=${password}&email=${email}`)
      if (data.length > 0) {
        localStorage.setItem("userlogin", JSON.stringify(data))
        setauth({
          ...auth,
          user: data[0]
        })
        navigate('/admin/product')
        toast.success("user Login")
      } else {
        toast.error("User Please Register Data")
      }
      setemail("")
      setpassword("")

    } catch (error) {
      console.log(error);
      return false
    }

  }

  return (
    <>
      <Header />
      <div style={{ marginTop: "90px" }}>
        <div classname="conatiner">
          <div classname="row" style={{ display: "flex", justifyContent: "center" }}>
            <form style={{ background: "rgba(82, 129, 197, 0.74)	", padding: "20px", margin: "20px", width: "500px" }}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="button" className="btn" style={{ background: "white", color: "black" }} onClick={submit}>Submit</button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          reverseOrder={false} />
      </div>
    </>


  )
}

export default Login