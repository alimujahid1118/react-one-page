import { Routes, Route } from "react-router-dom"
import { HomePage } from "./HomePage"
import { ContactUsDetail } from "./components/ContactUsDetail"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact-us-info" element={<ContactUsDetail />} />
    </Routes>
  )
}

export default App
