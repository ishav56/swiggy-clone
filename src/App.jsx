
import './App.css'
// default  import 
import { HeaderComponents } from './navbar'
// named import 
// import {Restraurantcard} from './restrauntcred'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Abouts from './pages/About.jsx'
import HOME from './pages/HOME.jsx'
import Footer from './pages/Footer.jsx'
import Contact from './pages/Contact.jsx'
import Restraurant from './pages/Restraurant.jsx'



const App = () => {

  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <HeaderComponents />
          </div>
          <Routes>
            <Route path='/about' element={<Abouts name="ishav" />}></Route>
            <Route path='/home' element={<HOME />} ></Route>

            {/* this path="/" for show the default page */}
            <Route path='/' element={<HOME />} ></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/restraunt/:id' element={<Restraurant/>}></Route>
          </Routes>

          <div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}



export default App
