import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

function ProductsList(){
    const [products, setProducts] = useState([])

    async function getAllProducts(){
        const response = await axios.get(import.meta.env.VITE_BASE_URL + '/products')
        setProducts(response.data)
    } 

    // takes in two arguemenets, function and array
    useEffect(()=>{
        getAllProducts()
    },[])

    return(
        <div>
            <h2>All Products</h2>
            {products.map((oneProduct)=>
            <div key={oneProduct._id}> 
                <p>Product Name: {oneProduct.title}</p>
                <Link to={`/products/${oneProduct._id}`}>See Details</Link>
            </div>
        )}
        </div>
    )
}

export default ProductsList