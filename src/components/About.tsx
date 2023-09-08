import { images } from "@/constants"
import useCarousel from "@/hooks/useCarousel"
import { ChevronUp } from "lucide-react"
import DotsGroup from "./DotsGroup"
import { useEffect, useState } from "react"

const About = () => {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(prev => prev + 1)
      } else {
        setPercentage(0)
      }
    }, 40)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const { page, next, go } = useCarousel({
    time: 5000,
    pages: 5,
    autoPlay: true,
  })

  useEffect(() => {
    setPercentage(0)
  }, [page])

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
      <div className="absolute z-[1000] bottom-5 left-1/2 -translate-x-1/2">
        <DotsGroup
          page={page}
          percentage={percentage}
          go={go}
          setPercentage={setPercentage}
        />
      </div>
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
          ? "bottom-0"
          : "-bottom-full delay-500"
      }
      transition-all duration-500`}
    >
      <div className="inset-0 absolute bg-black/40" />
    </div>
  )
}
