import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../../Header'
import Leftsidebar from '../../Leftsidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product() {
  const [record, setrecord] = useState([])
  const [mstatus, setMarket] = useState(["latest", "upcomming", "best"])
  const [status, setStatus] = useState(["active", "inactive"])

  const changemarketstatus = async (id, value) => {
    try {
      let recordd = await axios.patch(`http://localhost:8000/product/${id}`, {
        market: value
      })
      console.log(recordd);
      toast.success("Market status successfully add");
    } catch (error) {
      console.log(error);
      return false
    }
  }

  const rec = async () => {
    try {
      let recc = await axios.get("http://localhost:8000/product")
      setrecord(recc.data)
      console.log(recc);
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(() => {
    rec()
  }, [])

  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-lg-4 m-4">
          <Leftsidebar />
        </div>
        <div className="col-lg-12">
          <div style={{display:"flex",flexWrap:"wrap"}}>
            {
              record.map((val) => {
                return (
                  <article className="card" style={{ width: "300px",margin:"5px",height:"550px" }}>
                                 <select className='form-control'>
                      <option style={{textAlign:"center"}}>-----select status-----</option>
                      {
                        status.map((item) => {
                          return (
                            val.status == item ? (
                              <option style={{textAlign:"center"}} value={item} selected>{item}</option>
                            ) : (
                              <option style={{textAlign:"center"}} value={item}>{item}</option>
                            )
                          )
                        })
                      }

                    </select>
                    <select onChange={(e) => changemarketstatus(val.id, e.target.value)} className='form-control' style={{ margin: "10px 0 10px 0" }}>
                    <option style={{textAlign:"center"}}>-----select status-----</option>
                      {
                        mstatus.map((item) => {
                          return (
                            val.market == item ? (
                              <option style={{textAlign:"center"}} selected>{item}</option>
                            ) : (
                              <option style={{textAlign:"center"}}>{item}</option>
                            )
                          )
                        })
                      }
                    </select>
                    <div className="card__img">
                      <img style={{height:"200px",objectFit:"contain"}} src={val.image} alt />
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
      </div>
      <ToastContainer />
    </div >
  )
}

export default Product