import React from 'react'
import './SaimaZaki_style_button.css'

const SaimaZaki_Button = ({text}) => {
  return (
    <div>
        <button className='button'>{text}</button>
    </div>
  )
}

export default SaimaZaki_Button