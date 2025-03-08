import { BrowserRouter, Routes, Route } from "react-router"

// util
import DefaultLayout from "./utils/layouts"

// pages
import Home from "./pages/home/home"
import Weather, { loader } from "./pages/weather"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />} >
            <Route index element={<Home />} />
            <Route 
            path="/weather" 
            element={<Weather />}
            loader={loader}
          />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
