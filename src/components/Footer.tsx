import { MailOpen, MapPin } from "lucide-react"
import { NavLink } from "."
import logo from "/logo.png"

const Footer = () => {
  return (
    <footer className="flex flex-wrap sm:flex-row flex-col py-20">
      <div className="flex-1 text-center px-4 basis-[25%] flex gap-4 flex-col items-center">
        <img src={logo} alt="logo" />
        <p
          className="font-arabic font-semibold text-md text-slate-300 max-w-[600px]
      text-center mx-auto my-5"
        >
          نحن فريق من المحترفين المتخصصين في تقديم أفضل
          أفلام تظليل النوافذ للسيارات والشركات والمنازل في
          المملكة. نحن نقدم حلولًا مبتكرة وجودة عالية
          لعملائنا في قطاع الأعمال والفردية.
        </p>
      </div>
      <div className="flex-1 text-center px-4 basis-[25%] flex gap-4 flex-col sm:items-start items-center sm:mb-0 mb-5">
        <NavLink to="/">الرئيسية</NavLink>
        <NavLink to="/insurance">الضمان</NavLink>
        <NavLink to="/who">من نحن</NavLink>
        <NavLink to="/contact">تواصل معنا</NavLink>
        <NavLink to="/reserve">الحجز اونلاين</NavLink>
        <NavLink to="/shopping">التسوق</NavLink>
      </div>
      <div className="flex-1 text-center px-4 basis-[25%] flex gap-4 flex-col sm:items-start items-center">
        <NavLink to="/">إفلام نانوسيراميك للنوافذ</NavLink>
        <NavLink to="/">طلاء سيراميك للحماية</NavLink>
        <NavLink to="/">فيلم حماية الدهان</NavLink>
        <NavLink to="/">العزل الحراري</NavLink>
      </div>
      <div className="flex-1 px-4 basis-[25%] sm:border-t-0 border-t border-solid border-primary mt-4">
        <h1 className="text-primary text-2xl text-right ltr">
          +966593254444
        </h1>
        <span className="flex items-center gap-2 my-3">
          <MapPin size={30} color="red" />
          <p className="text-lg font-arabic font-semibold">
            طريق سلطانة, الراية , المدينة المنورة
          </p>
        </span>
        <span className="flex items-center gap-2">
          <MailOpen size={30} color="red" />

          <p className="text-lg font-arabic font-semibold">
            info@megashield.com
          </p>
        </span>
      </div>
    </footer>
  )
}
export default Footer
