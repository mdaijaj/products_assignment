import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import '../App.css'


const Products = () => {
    const navigate = useNavigate();
    const [findRest, setFindRest] = useState([])
    const [query, setQuery] = useState(null)
    const [loading, setLoading] = useState(null)

    const allProducts = async () => {
        let logindata = await localStorage.getItem('loginInf')
        logindata = JSON.parse(logindata)

        !logindata || logindata == null ? navigate('/login') :
            fetch("https://dummyjson.com/products?limit=100")
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    setFindRest(data.products)
                })
    }

    useEffect(() => {
        allProducts()
    }, [])

    return (
        <>
            <div className="main" style={{ width: "90%", height: "200px", margin: "auto", borderRadius: "25px" }}>
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col-6" style={{ margin: "auto" }}>
                                <label className="label">Products Search :</label>
                                <input type="text" className="form-control" onChange={(e) => setQuery(e.target.value)} placeholder="Search Products...." />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <center><h3>Recenctly products Search....</h3></center><br />
            <div className="container">
                <ul className="row list-ul">
                    {loading ? "please wait data is loading" : ""}
                    {findRest.filter((user) => user.title.toLowerCase().includes(query))?.map((rest => {
                        return (
                            <>
                                <div className="col-12 li-list">
                                    <div className="row">
                                        <div className="col-6 d-flex justify-content-center">
                                            <div className="card" style={{ width: "35rem", borderRadius: "20px" }}>
                                                <img className="card-img-top" src={rest.thumbnail} alt="Card image cap" />
                                            </div>
                                        </div>
                                        <div className="col-6" style={{ textAlign: "left" }}>
                                            <h3 className="card-title">{rest.title}</h3>
                                            <h3 className="card-title"> {`brand : ${rest.brand}`}</h3>
                                            <p className="card-text">{`category: ${rest.category}`}</p>

                                            <p className="card-text">{`stock: ${rest.stock}`}</p>
                                            <p className="card-text">{`rating: ${rest.rating}`}</p>
                                            <p className="card-text">{`price: ${rest.price}`}</p>
                                            <p className="card-text">   {`discountPercentage: ${rest.discountPercentage}`}</p>
                                            <p className="card-text">{`description: ${rest.description}`}</p>
                                            <NavLink to={`/restdetails/${rest.id}`} className="btn btn-primary">Available</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }))
                    }
                </ul>
            </div>
        </>
    );
};

export default Products;