import {
  About,
  Adds,
  Carousel,
  Welcome,
} from "@/components"
import { Route, Routes } from "react-router-dom"
import Services from "./nested-pages/Services"

const Home = () => {
  return (
    <Routes>
      <Route index element={<Page />} />
      <Route
        path="/service/:service"
        element={<Services />}
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
