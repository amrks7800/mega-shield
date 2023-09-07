import { Footer, Header } from "@/components"
import { Outlet } from "react-router-dom"
import whatsapp from "/whatsapp.png"

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <img
        src={whatsapp}
        alt="whatsapp"
        className="fixed bottom-5 right-0 z-[10000000000] w-32 cursor-pointer hover:scale-110 transition-transform duration-200"
      />
    </>
  )
}
export default RootLayout
