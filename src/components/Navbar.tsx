import {
  MenuSheet,
  NavLink,
  NavDropdown,
} from "@/components"
import { SERVICES_LINKS } from "@/constants"

const Navbar = () => {
  return (
    <>
      <nav className="sm:flex hidden items-center justify-center gap-6">
        <NavLink to="/">الرئيسية</NavLink>
        <NavLink to="/insurance">الضمان</NavLink>
        <NavLink to="/who">من نحن</NavLink>
        <NavLink to="/contact">تواصل معنا</NavLink>
        <NavLink to="/shopping">التسوق</NavLink>
        <NavDropdown
          name="الحجز اونلاين"
          links={SERVICES_LINKS}
        />
      </nav>
      <MenuSheet />
    </>
  )
}

export default Navbar
