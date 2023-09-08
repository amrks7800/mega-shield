import {
  About,
  Adds,
  Carousel,
  Locations,
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
      <Route path="/service" element={<Services />} />
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
  <div>
    <Carousel />
    <Welcome />
    <About />
    <Adds />
    <Locations />
  </div>
)

export default Home
