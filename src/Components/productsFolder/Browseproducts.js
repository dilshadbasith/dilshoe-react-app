import React, { useContext } from "react";
import { myContext } from "../Context";
import { useParams } from "react-router-dom";
import Navbar1 from "../Navbar1";
import Footer from "../Footer";

function Browseproducts() {
  const dataa = useContext(myContext);
  const { product, cart, setCart } = dataa;
  const { id } = useParams();
  const {loggedin}=useContext(myContext)

  const data = product.filter((item) => item.id === parseInt(id));


  const productId = () => {
if(loggedin){

  if(cart.includes(data[0])){     
    alert("This product is already added");
  }else{
    setCart([...cart, ...data]);
    alert("product added to cart");
  }
}else{
  alert("please login")
}
}
  return (
    <div>
      <div className=" sticky-top">
        <Navbar1 />
      </div>
      {data.map((item) => (
        <div className="browsediv">
          <div>
            <img className="browseimage" src={item.src} alt="not found" />
          </div>
          <div className="browsechild">
            <h2 className="browsename">{item.name}</h2>
            <h4 className="browseprice">Rs.{item.price}</h4>
            <p className="browseprice">{item.discription}</p>
            <p className="browsecat">Category:{item.type}</p>
            <div>
              <h5 className="browsecat">Qty:{item.qty}</h5>
            </div>
            <br />
            <div>
              <button className="addcartbtn" onClick={productId}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Browseproducts;
