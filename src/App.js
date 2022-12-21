import React from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import Nav from './components/Nav'
import "./styles.css"



const App = () => {
  return (
    <div className='container'>
      <Nav />
      <Main />
      <Footer />
    </div>
  )
}

export default App