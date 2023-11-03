import React from 'react'

function Footer() {
    const myStyle={
            alignItems:'center',
            // color:'blue',
            textAlign:'center'
    }
  return (
    <div>
        <footer className="container " style={myStyle}>
            Copyright@2022.All right reservered  to core four team.
        </footer>
    </div>
  )
}

export default Footer