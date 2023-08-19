import { Footer, Header } from "@/components"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
export default RootLayout
