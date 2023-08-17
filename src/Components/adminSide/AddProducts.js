import React, { useContext, useState } from 'react'
import { myContext } from '../Context'
import { useNavigate } from 'react-router-dom'

function AddProducts() {
    const [productname,setProductname]=useState()
    const [productamount,setProductamount]=useState()
    const [productcategory,setProductcategory]=useState("men")
    const [img,setImg]=useState("")

    const {product,setProduct}=useContext(myContext)

    const navigate=useNavigate()

    const handleSelection=(event)=>{
        setProductcategory(event.target.value)
    }

    const addNewItem=()=>{
        setProduct([...product,{name:productname,price:productamount,src:img,category:productcategory,id:product.length+1}])
        alert("added new Ietm")
        navigate('/adminproducts')
    }
  return (
    <div>
    <div className='addproductdiv'>
      <div className='addproductdiv2'><img className='addproductimg' src={img} alt="not found" /></div>
        <div className='addproductdiv3'>
            <form className='addproductform'>
            <div>
                <label>Product Name:</label>
                <input type="text" onChange={(e)=>setProductname(e.target.value)}/>
                </div>
                <div>
                <label>Category:</label>
                <select onChange={handleSelection}>
                    <option value={"men"}>Men</option>
                    <option value={"women"}>Women</option>
                </select>
                </div>
                <div>
                <label>Amount:</label>
                <input type="number" onChange={(e)=>setProductamount(e.target.value)} />
                </div>
                <div>
                <label>Image:</label>
                <input type="text" onChange={(e)=>setImg(e.target.value)} />
                </div>
                <div>
                <button className='my-button' onClick={()=>addNewItem()}>ADD</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddProducts
