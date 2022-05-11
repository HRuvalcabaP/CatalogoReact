import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return(
    <div className="d-flex justify-content-between">
     
      <div className="d-flex align-items-center">
        <a href="" className="avbar-brand display-5 p-2" style={{'text-decoration': 'none', 'color': 'black'}}>Sneakers</a>
      </div>
    
      <div className="d-flex align-items-center">
        <a className="nav-link active" aria-current="page" href="" style={{'text-decoration': 'none', 'color': 'black'}}>Collection</a>
        <a className="nav-link active" aria-current="page" href="" style={{'text-decoration': 'none', 'color': 'black'}}>Men</a>
        <a class="nav-link active" aria-current="page" href="" style={{'text-decoration': 'none', 'color': 'black'}}>Women</a>
        <a className="nav-link active" aria-current="page" href="" style={{'text-decoration': 'none', 'color': 'black'}}>About</a>
        <a className="nav-link active" aria-current="page" href="" style={{'text-decoration': 'none', 'color': 'black'}}>Contact</a>
      </div>

      <div className="d-flex align-items-center">
      <a href="" style={{'text-decoration': 'none', 'color': 'black', 'margin-right': 20}}><TiShoppingCart></TiShoppingCart></a>
      <img style={{'border-radius': '100%', 'width': 50}} src="https://i.pinimg.com/736x/8a/52/d3/8a52d3863a272e2e0556861ba98dceb1.jpg"></img>
      </div>
    </div>
  )
}

export default Header;