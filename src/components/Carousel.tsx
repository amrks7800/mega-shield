import useCarousel from "@/hooks/useCarousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { SERVICES } from "@/constants"

const Carousel = () => {
  const { page, next, prev } = useCarousel({
    time: 8000,
    pages: 6,
    autoPlay: true,
  })

  const content =
    page === 1 ? (
      <Slide
        path={SERVICES.thermal}
        img="bg-img1"
        content={{
          title: "العازل الحراري",
          rest: `بمنع تأثير التأكل الحراري و يطيل عمر اجزاء السيارة`,
        }}
      />
    ) : page === 2 ? (
      <Slide
        path={SERVICES.film}
        img="bg-img2"
        content={{
          title: "أفلام حماية السيارات",
          rest: `يحافظ على الوضوح ، ويضمن عدم التشقق
          مع التعرض للأشعة فوق البنفسجية أو رذاذ الملح
          `,
        }}
      />
    ) : page === 3 ? (
      <Slide
        path={SERVICES.nano}
        img="bg-img3"
        content={{
          title: "النانوسيراميك",
          rest: `نانوسيراميك عالي الجودة يحمي السيارة من التشققات و التعرض لعوامل الصدأ`,
        }}
      />
    ) : page === 4 ? (
      <Slide
        path={SERVICES.protect}
        img="bg-img4"
        content={{
          title: "الحماية الكاملة",
          rest: `
            حماية المقاعد و الكنب و الأجزاء الداخلية للسيارة
          `,
        }}
      />
    ) : page === 5 ? (
      <Slide
        path={SERVICES.polish}
        img="bg-img5"
        content={{
          title: "التلميع",
          rest: `
            تلميع داخلي و خارجي و للارضيات الجلدية
          `,
        }}
      />
    ) : page === 6 ? (
      <Slide
        path={SERVICES.glass}
        img="bg-img6"
        content={{
          title: "حماية الزجاج",
          rest: `
            حماية الزجاج الامامي من الكسر
          `,
        }}
      />
    ) : (
      ""
    )

  return (
    <div className="relative cut-viewport">
      <button
        className="absolute top-1/2 -translate-y-1/2 right-8 z-50"
        onClick={next}
      >
        <ChevronRight size={40} color="#e34569" />
      </button>
      <button
        onClick={prev}
        className="absolute top-1/2 -translate-y-1/2 left-8 z-50"
      >
        <ChevronLeft size={40} color="#e34569" />
      </button>
      {content}
    </div>
  )
}

type SlideProps = {
  img: string
  content: {
    title: string
    rest: string
  }
  path: string
}

const Slide = ({ img, content, path }: SlideProps) => {
  return (
    <div
      className={`cut-viewport ${img} bg-cover bg-center sm:bg-bottom bg-no-repeat flex sm:items-center justify-center
      items-start sm:pt-0 pt-20 relative`}
      key={img}
    >
      <div className="absolute bg-black/40 inset-0"></div>
      <div className="text-center duration-500 animate-in fade-in-0 z-10">
        <h1 className="sm:text-[90px] text-[50px] font-semibold text-white font-arabic">
          {content.title}
        </h1>
        <p className="text-md font-semibold text-slate-200 font-arabic">
          {content.rest}
        </p>
        <div className="flex items-center justify-center sm:flex-row flex-col gap-3 sm:gap-8 mt-7">
          <button
            className="flex items-center justify-center text-3xl font-bold font-arabic h-20 w-[220px] bg-white mx-auto my-5
          border-4 border-solid border-transparent text-black
          transition-colors hover:bg-transparent hover:border-white"
          >
            المزيد
          </button>
          <Link
            to={`/service/${path}`}
            className="flex items-center justify-center text-3xl font-bold font-arabic h-20 w-[220px] bg-primary mx-auto my-5
          border-4 border-solid border-transparent
          transition-colors hover:bg-transparent hover:border-primary"
          >
            <button>احجز الان</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Carousel
