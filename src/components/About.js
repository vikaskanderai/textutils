import React from 'react'

export default function About(props) {

    

  return (
    <div className='mx-3'style={{color:props.mode==="dark"?'white':'#042743'}}>
        <h2>About</h2>
        <p>This is a text utility application that allows the user to perform modifications on the text entered</p>
    </div>
  )
}
