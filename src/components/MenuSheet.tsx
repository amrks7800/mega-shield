import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { NavDropdown, NavLink } from "."
import { SERVICES_LINKS } from "@/constants"

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden block">
        <Menu size={25} fill="#E34569" />
      </SheetTrigger>
      <SheetContent className="bg-[#333] text-slate-200 z-[5000000000000000]">
        <SheetHeader>
          <SheetDescription>
            <nav className="flex flex-col items-center justify-center gap-6">
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
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
export default MenuSheet
