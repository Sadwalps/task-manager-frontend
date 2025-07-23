import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Homepage'

import Footer from './Footer'
import Header from './Header'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
