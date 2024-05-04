import {Button, NextUIProvider, Tooltip} from '@nextui-org/react'
import Header from './components/header/Header'
import { AuthProvider } from './contexts/authContext.jsx'
import Router from './navigation/Router.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {CartProvider} from "./contexts/cartContext.jsx";

function App () {
  return (
    <>
      <NextUIProvider>
        <AuthProvider>
          <CartProvider>
              <Header />
              <Router />
              <ToastContainer />

              <div className='fixed bottom-5 w-full left-0 flex justify-center items-center'>
                  <Tooltip color='warning' content="Désolé de ne pas avoir réalisé le devoir à 100% (y compris le bonus ou la qualité du code). J'ai préféré me concentrer sur d'autres travaux nécessaires pour la validation du diplôme." className="capitalize">
                      <Button color='warning'>
                        Information sur le devoir
                      </Button>
                  </Tooltip>
              </div>

          </CartProvider>
        </AuthProvider>
      </NextUIProvider>
    </>
  )
}

export default App
