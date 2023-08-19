import { ReactNode } from "react"
import { Link } from "react-router-dom"

type NavLinkProps = {
  children: ReactNode
  to: string
}

const NavLink = ({ children, to }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className="text-slate-200 transition-colors font-bold text-lg hover:text-white font-arabic"
    >
      {children}
    </Link>
  )
}
export default NavLink
