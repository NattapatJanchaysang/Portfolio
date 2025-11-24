import { BrowserRouter, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Notfound from "@/pages/Notfound"

const App = () => {
  return (
    <> 
      <BrowserRouter>
        <Route index element={<Home />}/>
        <Route path="*" element={<Notfound />}/>
      </BrowserRouter>    
    </>
  )
}

export default App