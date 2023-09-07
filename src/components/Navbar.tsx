import {
  MenuSheet,
  NavLink,
  NavDropdown,
} from "@/components"
import { SERVICES_LINKS } from "@/constants"
import logo from "/logo.png"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <>
      <nav className="sm:flex hidden items-center justify-center gap-6">
        <NavLink to="/">الرئيسية</NavLink>
        <NavLink to="/insurance">الضمان</NavLink>
        <NavLink to="/who">من نحن</NavLink>
        <motion.div
          initial={{ y: "-220%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-[120px] sm:block hidden"
        >
          <img src={logo} alt="logo" />
        </motion.div>
        <NavLink to="/contact">تواصل</NavLink>
        <NavLink to="/shopping">التسوق</NavLink>
        <NavDropdown name="الحجز" links={SERVICES_LINKS} />
      </nav>
      <MenuSheet />
    </>
  )
}

export default Navbar
