import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { myContext } from "../Context";
import { useNavigate } from "react-router-dom";

function Products() {
  const { product, search } = useContext(myContext);
  const navigate = useNavigate();
  return (
    <>
      <h2 className="arrival">New Arrivals</h2>
      <div className="productsdiv">
        {product
          .filter((item) => {
            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search);
          })
          .map((item) => (
            <Card
              className="shadow p-3 mb-5 bg-body-tertiary rounded "
              style={{ width: "18rem" }}
            >
              <Card.Img className="productimg" variant="top" src={item.src} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <h5>Rs.{item.price}</h5>
                <button
                  className="my-button1"
                  onClick={() => navigate(`/browseproducts/${item.id}`)}
                >
                  View
                </button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

export default Products;
