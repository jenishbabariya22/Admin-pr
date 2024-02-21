import React, { useEffect, useState } from 'react'
import Header from '../../Header'
import Leftsidebar from '../Leftsidebar'
import axios from 'axios'

function Category() {
  const [record, setrecord] = useState([])



  const rec = async () => {
    try {
      let recc = await axios.get("http://localhost:8000/category")
      setrecord(recc.data)
      console.log(recc);
    } catch (error) {
      console.log(error);
      return false
    }
  }

  const remove = async (id) => {
    try {
      let del = await axios.delete('http://localhost:8000/category/', id)
      console.log(del);
    } catch (error) {
      console.log(error);
      return false
    }
    alert("hello")
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
          <div className="d-flex" style={{ flexWrap: "wrap" }}>
            {
              record.map((val) =>
                <div class="card m-4" style={{ width: "18rem", }}>
                  <div class="card-body">
                    <h5 class="card-title">{val.category}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button onClick={() => remove(val.id)} className='btn btn-danger' style={{ marginRight: "10px" }}>Delete</button>
                    <button className='btn btn-primary'>Edit</button>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category