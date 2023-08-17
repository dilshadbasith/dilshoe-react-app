import React, { useContext, useState } from "react";
import { myContext } from "../Context";
import { useParams } from "react-router-dom";

function AdminViewProduct() {
  const { product, setProduct } = useContext(myContext);
  const { id } = useParams();
  const filter = product.filter((item) => item.id === parseInt(id));
  const [shoename, setShoename] = useState(filter[0].name);
  const [shoecategory, setShoecategory] = useState(filter[0].type);
  const [shoeprice, setShoeprice] = useState(filter[0].price);
  const [isedit, setIsedit] = useState(true);


  const confirmChange = () => {
    const updatedItem = product.map((item) =>
      item.id === parseInt(id)
        ? {
            ...item,
            name: shoename,
            price: shoeprice,
            type: shoecategory,
          }
        : item
    );
    setProduct(updatedItem);
    alert("updated")
    setIsedit(true);
  };
  const handleSelection = (event) => {
    setShoecategory(event.target.value);
  };

  return (
    <div>
      <div className='addproductdiv'>
        <div className='addproductdiv2'>
          <img className='addproductimg' src={filter[0].src} alt="not found" />
        </div>
        <div className='addproductdiv3'>
          <form className={!isedit ? "form-active" : ""}>
            <div>
              <i
                onClick={() => setIsedit(!isedit)}
                class="fa-solid fa-pen-to-square"
                style={{display:"flex",justifyContent:"flex-end"}}
              ></i>
            </div>
            <label>Shoe Name:</label>
            <input
              type="text"
              value={shoename}
              disabled={isedit ? true : false}
              onChange={(e) => setShoename(e.target.value)}
            /><br/><br/>
            <label>Amount :</label>
            <input
              type="number"
              value={shoeprice}
              disabled={isedit ? true : false}
              onChange={(e) => setShoeprice(e.target.value)}
            /><br/><br/>
            <label>Category :</label>
            <select disabled={isedit ? true : false} onChange={handleSelection}>
              <option value={"men"}>Men</option>
              <option value={"women"}>Women</option>
            </select><br/><br/>
            {!isedit ? (
              <button className='addproductbtn' onClick={() => confirmChange()}>{""}confirm</button>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminViewProduct;
