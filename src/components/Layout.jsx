import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout