import { Navbar } from "."
import logo from "/logo.png"

const Header = () => {
  return (
    <header className="h-20 bg-[#333]/70 fixed inset-x-0 top-0 z-[10000000]">
      <div className="container mx-auto h-20 flex items-center justify-between">
        <div className="w-44">
          <img src={logo} alt="logo" />
        </div>
        <Navbar />
      </div>
    </header>
  )
}
export default Header
