import { Routes, Route } from "react-router"
import ProductsList from "./pages/ProductsList"
import CreateProduct from "./pages/CreateProduct"
import Navbar from "./components/Navbar"
import ProductDetails from "./pages/ProductsDetails"
import Homepage from "./pages/Homepage"

function App() {


  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="/products/create" element={<CreateProduct/>}/>
        <Route path="/products/:productId" element={<ProductDetails/>}/>
        <Route path="*"/>
      </Routes>
    </div>
  )
}

export default App
