import './App.css'
import Header from './components/header/Header'
import { AuthProvider } from './contexts/authContext.jsx'
import Router from './navigation/Router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <>
      <AuthProvider>
        <Header />
        <Router />
        <ToastContainer />
      </AuthProvider>
    </>
  )
}

export default App
