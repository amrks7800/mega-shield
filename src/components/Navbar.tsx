import { MenuSheet, NavLink } from "@/components"

import logo from "/logo.png"
import { motion } from "framer-motion"
import { Reveal } from "./animators/Reveal"

const Navbar = () => {
  return (
    <>
      <nav className="sm:flex hidden items-center justify-center gap-6">
        <Reveal delay={1}>
          <div className="h-14 grid place-content-center">
            <NavLink to="/">الرئيسية</NavLink>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="h-14 grid place-content-center">
            <NavLink to="/insurance">الضمان</NavLink>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="h-14 grid place-content-center">
            <NavLink to="/who">من نحن</NavLink>
          </div>
        </Reveal>
        <motion.div
          initial={{ y: "-220%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-[120px] sm:block hidden"
        >
          <img src={logo} alt="logo" />
        </motion.div>
        <Reveal delay={1}>
          <div className="h-14 grid place-content-center">
            <NavLink to="/contact">تواصل</NavLink>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="h-14 grid place-content-center">
            <NavLink to="/shopping">التسوق</NavLink>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="h-14 grid place-content-center">
            <NavLink to="/service" children="الحجز" />
          </div>
        </Reveal>
      </nav>
      <MenuSheet />
    </>
  )
}

export default Navbar
