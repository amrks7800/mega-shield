import { images } from "@/constants"
import useCarousel from "@/hooks/useCarousel"
import { ChevronUp } from "lucide-react"

const About = () => {
  const { page, next } = useCarousel({
    time: 5000,
    pages: 5,
    autoPlay: true,
  })

  return (
    <section
      id="about"
      className="h-screen overflow-hidden relative"
    >
      <div
        className="absolute z-[1000] top-5 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={next}
      >
        <ChevronUp size={40} color="#E22D48" />
      </div>
      {images.map((item, i) => (
        <Slide
          img={item}
          pageNumber={i! + 1}
          currentPageNumber={page}
          key={i}
        />
      ))}
    </section>
  )
}

export default About

type SlideProps = {
  pageNumber: number
  img: string
  currentPageNumber: number
}

const Slide = ({
  pageNumber,
  currentPageNumber,
  img,
}: SlideProps) => {
  return (
    <div
      className={`absolute w-full h-full z-40 min-h-screen ${img} bg-cover bg-center bg-no-repeat flex items-center justify-center
      ${
        pageNumber === currentPageNumber
          ? "bottom-0 "
          : "-bottom-full delay-500"
      }
      transition-all duration-500`}
    >
      <div className="inset-0 absolute bg-black/40" />
    </div>
  )
}
