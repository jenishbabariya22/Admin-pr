import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import axios from 'axios';

function Products() {

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [cat, setCat] = useState("");
    const [marketStateFilter, setMarketStatusFilter] = useState("");

    const getcategory = async () => {
        try {
            let { data } = await axios.get("http://localhost:8000/category")
            setCategory(data)
        } catch (error) {
            console.log(error);
            return false
        }
    }



    const getproduct = async () => {
        try {
            let { data } = await axios.get("http://localhost:8000/product")
            setProducts(data)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    const categoryFilter =async (cate) => {
        try {
           let {data}= await axios.get(`http://localhost:8000/product?category=${cate}&market=${marketStateFilter}`) 
           setProducts(data)
        } catch (error) {
            console.log(error);
            return false    
        }
    }

    useEffect(() => {
        getcategory()
        getproduct()
    }, [])

    return (
        <div>
            <Header />
            <div className="d-flex">
                <ul className="list-group" style={{ width: "300px" }}>
                    <li className="list-group-item">
                        {
                            category.map((val) => {
                                return (
                                    <button onClick={() => categoryFilter(val.category)} className='w-100 mb-3 btn btn-info'>{val.category}</button>
                                )
                            })
                        }

                    </li>
                </ul>
                <div className='all-clear' style={{ width: "300px", margin: "15px" }}>
                    <button onClick={() => getproduct()} className='w-100 mb-3 btn btn-info'>All Clear</button>
                </div>
            </div>
            <div className='d-flex'>
                {
                    products.map((val) => {
                        return (
                            <article className="card" style={{ width: "300px", margin: "5px", height: "450px" }}>
                                <div className="card__img">
                                    <img style={{ height: "200px", objectFit: "contain" }} src={val.image} alt />
                                </div>
                                <div className="card__name">
                                    <p>AIR ZOOM PEGASUS</p>
                                </div>
                                <div className="card__precis">
                                    <a href className="card__icon"><ion-icon name="heart-outline" /></a>
                                    <div>
                                        <h6>{val.title}</h6>
                                        <span className="card__preci card__preci--before">$990.00</span>
                                        <span className="card__preci card__preci--now">$749.00</span>
                                    </div>
                                    <a href className="card__icon"><ion-icon name="cart-outline" /></a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Products