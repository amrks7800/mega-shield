import { Footer, Header } from "@/components"
import { Outlet } from "react-router-dom"
import whatsapp from "/whatsapp.png"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <HoverCard>
        <HoverCardTrigger
          className="fixed bottom-5 right-0 z-[10000000000]
        w-32 cursor-pointer hover:scale-110
        transition-transform duration-200"
        >
          <a
            href="https://wa.me/+96659325444"
            target="_blank"
          >
            <img src={whatsapp} alt="whatsapp" />
          </a>
        </HoverCardTrigger>
        <HoverCardContent className="bg-[#181818] border-black">
          <div className="flex items-center gap-3">
            <span>😎</span>
            <span className="font-arabic text-slate-200">
              تحدث معنا عبر واتساب
            </span>
          </div>
        </HoverCardContent>
      </HoverCard>
    </>
  )
}
export default RootLayout
