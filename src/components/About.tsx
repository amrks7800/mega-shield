import { images } from "@/constants"
import useCarousel from "@/hooks/useCarousel"
import { ChevronUp } from "lucide-react"
import DotsGroup from "./DotsGroup"
import { useEffect, useState } from "react"
import { Reveal } from "./animators/Reveal"
import { Button } from "./ui/button"
import { SERVICES } from "@/constants"
import { MoreDialog } from "."
import { Link } from "react-router-dom"

const About = () => {
  const [percentage, setPercentage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

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
      className="cut-viewport overflow-hidden relative"
    >
      <div
        className="absolute z-[60] top-5 left-1/2 -translate-x-1/2 cursor-pointer"
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
          title={Object.values(SERVICES)[i]}
          setIsOpen={setIsOpen}
        />
      ))}
      <div className="absolute z-[40] bottom-5 left-1/2 -translate-x-1/2">
        <DotsGroup
          page={page}
          percentage={percentage}
          go={go}
          setPercentage={setPercentage}
        />
      </div>
      <MoreDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  )
}

export default About

type SlideProps = {
  pageNumber: number
  img: string
  currentPageNumber: number
  title: string
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Slide = ({
  pageNumber,
  currentPageNumber,
  img,
  title,
  setIsOpen,
}: SlideProps) => {
  return (
    <div
      className={`absolute w-full h-full z-40 ${img} bg-cover bg-center bg-no-repeat flex items-center justify-center
      ${
        pageNumber === currentPageNumber
          ? "bottom-0"
          : "-bottom-full delay-500"
      }
      transition-all duration-500`}
    >
      <div className="inset-0 absolute bg-black/40" />
      <div className="relative w-full h-full flex items-center justify-center z-50">
        <div className="text-center">
          <Reveal
            delay={0.5}
            className="mx-auto w-fit block"
          >
            <span className="font-arabic text-lg text-primary">
              خدمة
            </span>
          </Reveal>
          <Reveal
            delay={0.8}
            className="mx-auto w-fit block my-4"
          >
            <h1 className="mx-auto w-fit font-arabic text-3xl">
              {title}
            </h1>
          </Reveal>
          <div className="flex items-center gap-3">
            <Link to={"/service"}>
              <Button
                className={`font-arabic text-lg transition-all hover:text-primary hover:bg-carCabin hover:bg-cover hover:bg-center hover:bg-no-repeat hover:scale-125 relative group flex mx-auto`}
              >
                <div className="inset-0 absolute bg-black/40 hidden group-hover:block" />
                <span className="z-50">أحجز الآن</span>
              </Button>
            </Link>
            <Button
              className="px-5 py-[7px] rounded-lg bg-orange-400 font-arabic text-lg transition-all hover:text-primary hover:bg-carCabin hover:bg-cover hover:bg-center hover:bg-no-repeat hover:scale-125 relative group flex mx-auto"
              onClick={() => setIsOpen(prev => !prev)}
            >
              المزيد
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
