import React, { useState } from 'react'

const ColorPicker = () => {

    const [color,setColor] = useState("#fff") 

    function handleChange(event){
        setColor(event.target.value)
    }

  return (
    <div className='color-picker'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor : color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label>Select Color</label>
        <input type="color" value={color} onChange={handleChange}/>
    </div>
  )
}

export default ColorPicker
