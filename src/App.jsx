
import { MovieProvider } from './contexts/MovieContext'
import Home from './pages/HomePage'
import Favorite from './pages/Favorite'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {


  return <MovieProvider><div><NavBar />
   <main className='main-content'>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/favorite' element={<Favorite />} />
    </Routes>
  </main></div>
  </MovieProvider>

}

export default App
