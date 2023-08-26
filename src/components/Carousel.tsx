import useCarousel from "@/hooks/useCarousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { PRODUCTS, SERVICES } from "@/constants"

const Carousel = () => {
  const { page, next, prev } = useCarousel({
    time: 8000,
    pages: 4,
    autoPlay: true,
  })

  const content =
    page === 1 ? (
      <Slide
        path={SERVICES.thermal}
        img="bg-img1"
        content={PRODUCTS.thermoProtect}
      />
    ) : page === 2 ? (
      <Slide
        path={SERVICES.film}
        img="bg-img2"
        content={PRODUCTS.paintProtection}
      />
    ) : page === 3 ? (
      <Slide
        path={SERVICES.nano}
        img="bg-img3"
        content={PRODUCTS.nanoTheramic}
      />
    ) : page === 4 ? (
      <Slide
        path={SERVICES.protect}
        img="bg-img4"
        content={PRODUCTS.innerProtection}
      />
    ) : (
      ""
    )

  return (
    <div className="relative h-screen">
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
    description: string
  }
  path: string
}

const Slide = ({ img, content }: SlideProps) => {
  return (
    <div
      key={img}
      className="overflow-hidden flex sm:items-center justify-center
    items-start sm:pt-0 pt-20 relative h-screen"
    >
      <div
        className={`h-screen ${img} bg-cover bg-top sm:bg-center bg-no-repeat  scale-in absolute inset-0`}
      ></div>
      <div className="absolute bg-black/40 inset-0"></div>
      <div className="text-center duration-500 animate-in fade-in-0 z-10 sm:translate-y-0 translate-y-[80px]">
        <h1 className="sm:text-[90px] text-[50px] font-semibold text-white font-arabic">
          {content.title}
        </h1>
        <p className="text-md font-semibold text-slate-200 font-arabic">
          {content.description}
        </p>
        <div className="flex items-center justify-center sm:flex-row flex-col gap-3 sm:gap-8 mt-7 w-fit mx-auto">
          <Link to={`/shopping`}>
            <button
              className="flex items-center justify-center text-3xl font-bold font-arabic h-20 w-[220px] bg-white mx-auto my-5
          border-4 border-solid border-transparent text-black
          transition-colors hover:bg-transparent hover:border-white"
            >
              المزيد
            </button>
          </Link>
          <Link
            to={`/shopping`}
            className="flex items-center justify-center text-3xl font-bold font-arabic h-20 w-[220px] bg-primary mx-auto my-5
          border-4 border-solid border-transparent
          transition-colors hover:bg-transparent hover:border-primary"
          >
            <button>التسوق الان</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Carousel
