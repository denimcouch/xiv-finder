import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Character from './pages/Character'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/character/:name' element={<Character />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
