import React from 'react'
import Adminnavbar from './Adminnavbar'
import Adimncarousel from './Adimncarousel'

function Adminhome() {
  return (
    <div>
      <div className='sticky-top'><Adminnavbar/></div>
      <div><Adimncarousel/></div>
    </div>
  )
}

export default Adminhome
