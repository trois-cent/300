import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import WebFont from 'webfontloader'

// components
import Loader from './components/loaders/Loader/Loader'
import Nav from './components/navbars/Nav/Nav'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Methods from './pages/Methods/Methods'
import About from './pages/About/About'

const App = () => {

  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['MuseoModerno:100,200,300,400,500,600,700,800,900', 'Montserrat:100,200,300,400,500,600,700,800,900']
      }
    })
  }, [])

  return (
      <AnimatePresence mode='wait'>
      {
        loader 
        ?
        <Loader  setLoader={setLoader} />
        :
        <>
        {/* alerts & modals */}

        {/* navbars */}
        <Nav />

        {/* pages */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/methods' element={<Methods />}/>
          <Route path='/about-us' element={<About />}/>
        </Routes>
        </>
      }
      </AnimatePresence>
  )
}


export default App