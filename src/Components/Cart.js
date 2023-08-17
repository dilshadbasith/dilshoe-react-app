import React, { useContext } from "react";
import { myContext } from "./Context";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";


function Cart() {
  const dataa = useContext(myContext);
  const { cart, setCart } = dataa;
  const navigate=useNavigate()

  const deleteItem = (id) => {
    setCart((b) => b.filter((item) => item.id !== id));
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id ===parseInt(id)  && item.qty > 1) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });
  
    setCart(updatedCart);
  };


  // increment function


  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id ===parseInt(id)  ) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
  
    setCart(updatedCart);
  };





  
  
  return (
    <div>
      <h1 className="arrival">Cart Items</h1>
      {cart.map((item) => (
        <Card className="shadow p-3 mb-5 bg-body-tertiary rounded">
          <Card.Body className="cartcard">
            <div>
              <img className="cartimage" src={item.src} alt="not found" />
            </div>
            <div>
              <h4>{item.name}</h4>
              <h6>Rs.{item.price}</h6>
            </div>
            <div>
            <h5>Qty:</h5>
              <button
                className="countbtn"
                onClick={()=>handleDecrement(item.id)}
              >
                -
              </button>
              <span className="count">{item.qty}</span>
              <button
                className="countbtn"
                onClick={()=>handleIncrement(item.id)}
              >
                +
              </button>
            </div>
            <div>
             <h5>Price:</h5>
              {item.price * item.qty}
            </div>
            <div>
              <Button variant="danger" onClick={() => deleteItem(item.id)}>
                Delete
              </Button>&nbsp;&nbsp;
              <Button variant="info" onClick={()=>navigate(`/payment/${item.id}`)}>Buy</Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cart;
