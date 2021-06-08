import React from 'react'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="App">
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout