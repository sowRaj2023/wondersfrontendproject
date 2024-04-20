import { BrowserRouter as Router,Route,Routes } from "react-router-dom"

import Header from "./components/Header"
import WondersList from "./components/WondersList"
import About from "./components/About"
import NotFound from "./components/NotFound"
import WonderItemDetails from "./components/WonderItemDetails"


const App = () => (
  <Router>
  <Header />
  <Routes>
  <Route path = "/" element={<WondersList/>}/>
  <Route path = "/about" element={<About/>}/>
  <Route path="/wonders/:id"   element={<WonderItemDetails/>}/>
  <Route path = "*" element = {<NotFound/>}/>
  </Routes>
  </Router>
)
export default App
