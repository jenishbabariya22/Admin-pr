import React, { useState } from 'react'
import Header from '../../Header'
import Leftsidebar from '../Leftsidebar'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addcategory() {
    const [category, setcategory] = useState()

    const submit = async () => {
        try {
            let result = await axios.post('http://localhost:8000/category', {
                category: category
            })
            toast.success("Category Added")
            setcategory('')
        } catch (error) {
            console.log(error);
            return false
        }
    }

    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-lg-4 m-4">
                    <Leftsidebar />
                </div>
                <div className="col-lg-8">
                    <form style={{ background: "rgba(82, 129, 197, 0.74)", margin: "10px", padding: "25px" }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Category Add</label>
                            <input value={category} onChange={(e) => setcategory(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="button" onClick={submit} className="btn" style={{ color: "black", background: "white" }}>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Addcategory