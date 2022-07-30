import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Character from './pages/Character'

const App = () => {
  return (
    <Router>
      <Flex
        className='xivApp'
        direction='column'
        h='100vh'
        justify='space-between'
      >
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/character/:name' element={<Character />} />
          </Routes>
        </main>
        <Footer />
      </Flex>
    </Router>
  )
}

export default App
