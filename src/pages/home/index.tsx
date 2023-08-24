import {
  About,
  Adds,
  Carousel,
  Welcome,
} from "@/components"
import { Route, Routes } from "react-router-dom"
import Services from "./nested-pages/Services"
import ServicesDescription from "./nested-pages/ServicesDescription"
import ServiceCriteria from "./nested-pages/ServiceCriteria"

const Home = () => {
  return (
    <Routes>
      <Route index element={<Page />} />
      <Route
        path="/service/:service"
        element={<Services />}
      />
      <Route
        path="/description/:service"
        element={<ServicesDescription />}
      />
      <Route
        path="/more/:service"
        element={<ServiceCriteria />}
      />
    </Routes>
  )
}

const Page = () => (
  <div className="cut-viewport">
    <Carousel />
    <Welcome />
    <About />
    <Adds />
  </div>
)

export default Home
