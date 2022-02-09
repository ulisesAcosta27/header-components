import React from 'react'
import './Imagen.css'
const Imagen = ({ img, type }) => {
  return (
    <div className='logo-fares' > 
      {
        type == 'logo' ?
        <div className='logo-container'>
          <img src={ img } />
          <p>Fares</p>
        </div> : 
       <p>Fares</p> 
      }
    </div>
  ) 
}

export default Imagen
