import { MenuSheet, NavLink } from "@/components"

const Navbar = () => {
  return (
    <>
      <nav className="sm:flex hidden items-center justify-center gap-6">
        <NavLink to="/">الرئيسية</NavLink>
        <NavLink to="/insurance">الضمان</NavLink>
        <NavLink to="/who">من نحن</NavLink>
        <NavLink to="/contact">تواصل معنا</NavLink>
        <NavLink to="/reserve">الحجز اونلاين</NavLink>
        <NavLink to="/shopping">التسوق</NavLink>
      </nav>
      <MenuSheet />
    </>
  )
}

export default Navbar
