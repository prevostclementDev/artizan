import { 
  BrowserRouter,
  Route, 
  Routes
} from 'react-router-dom'

/* Pages */
import About from '../pages/About'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import Artisans from '../pages/Artisans'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Artisans />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router