import React, { useState } from 'react'

function Button({buttonTitle}) {

    const [theme, setTheme] = useState();

    function handleClick() {
        setTheme(theme => !theme)
    }

  return (
    <div 
        className='gen-button-con'
        onClick={handleClick}
        >
            {buttonTitle}
    </div>
  )
}

export default Button