import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../../Header';
import Leftsidebar from '../../Leftsidebar';

function Addproduct() {

    const [categoryRecord, setcategoryRecord] = useState([])
    console.log(categoryRecord.category);
    const [category, setcategory] = useState()
    const [price, setprice] = useState()
    const [product, setproduct] = useState()
    const [qty, setqty] = useState()
    const [image, setimage] = useState()
    const [discription, setdiscription] = useState()
    const [title, settitle] = useState()

    const submit = async () => {
        try {
            let result = await axios.post('http://localhost:8000/product', {
                category: category,
                product: product,
                qty: qty,
                image: image,
                discription: discription,
                title: title
            })
            toast.success("Category Added")
            setcategory('')
            setdiscription("")
            setimage("")
            setproduct("")
            setqty("")
            settitle("")
        } catch (error) {
            console.log(error);
            return false
        }
    }

    const getcategory = async () => {
        try {
            let { data } = await axios.get(`http://localhost:8000/category`)
            setcategoryRecord(data)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    useEffect(() => {
        getcategory()
    }, [])

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
                            <select onChange={(e) => setcategory(e.target.value)} value={category} type="text" className="form-control">
                                <option value="">select category</option>
                                {
                                    categoryRecord.map((cat) => {
                                        return (
                                            <option>{cat.category}</option>
                                        )
                                    })
                                }
                            </select>
                            <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                            <input value={product} onChange={(e) => setproduct(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label htmlFor="exampleInputEmail1" className="form-label">Product Price</label>
                            <input value={price} onChange={(e) => setprice(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label htmlFor="exampleInputEmail1" className="form-label">Qty</label>
                            <input value={qty} onChange={(e) => setqty(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <form style={{ background: "rgba(82, 129, 197, 0.74)", margin: "10px", padding: "25px" }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Image Link</label>
                            <input value={image} onChange={(e) => setimage(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label htmlFor="exampleInputEmail1" className="form-label">Discription</label>
                            <input value={discription} onChange={(e) => setdiscription(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                            <input value={title} onChange={(e) => settitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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

export default Addproduct