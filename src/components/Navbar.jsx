import { Link } from "react-router"

function Navbar() {
  return (
    <nav>
      <Link to='/products'>All Products </Link> 
      <Link to='/products/new-product'>Create Product </Link> 
      <Link to='/'>Homepage</Link>
    </nav>
  )
}

export default Navbar
