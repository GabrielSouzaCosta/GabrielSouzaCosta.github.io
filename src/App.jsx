import './App.scss'
import './i18n'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Work from './pages/work/Work'
import Blog from './pages/blog/Blog'
import Details from './pages/detailsPage/Details'
import ScrollTop from './components/ScrollTop'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === 'light' ? 'dark': 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <HashRouter>
          <ScrollTop>
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/about' element={ <About /> } />
                <Route path='/work' element={ <Work /> } />
                <Route path='/blog' element={ <Blog /> } />
                <Route path='/:project' element={ <Details /> } />
            </Routes>
          </ScrollTop>
        </HashRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
