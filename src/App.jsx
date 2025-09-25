import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NotFoundPage } from "./pages/NotFound"
import { Toaster } from "./components/ui/toaster"

function App() {

  return (
   <>
   <Toaster />
   <BrowserRouter>
   <Routes>
    <Route index element = {<Home />}/>
    <Route path="*" element = {<NotFoundPage />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
