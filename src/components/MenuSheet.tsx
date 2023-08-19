import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { NavLink } from "."

const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="sm:hidden block">
        <Menu size={25} fill="#E34569" />
      </SheetTrigger>
      <SheetContent className="bg-[#333] text-slate-200">
        <SheetHeader>
          <SheetDescription>
            <nav className="flex flex-col items-center justify-center gap-6">
              <NavLink to="/">الرئيسية</NavLink>
              <NavLink to="/insurance">الضمان</NavLink>
              <NavLink to="/who">من نحن</NavLink>
              <NavLink to="/contact">تواصل معنا</NavLink>
              <NavLink to="/reserve">الحجز اونلاين</NavLink>
              <NavLink to="/shopping">التسوق</NavLink>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
export default MenuSheet
