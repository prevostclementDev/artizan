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
import Home from '../pages/Home'
import Artisan from '../pages/Artisan'
import Auth from '../pages/Auth'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='artisans'> 
          <Route index element={<Artisans />} /> {/* Route <domaine>/artisans */}
          <Route path=':artisanSlug' element={<Artisan />} /> {/* Route <domaine>/artisans/<ID> */}
        </Route>
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contact' element={<Contact />} />
        <Route path='authentication' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router