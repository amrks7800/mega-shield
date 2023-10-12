import useCarousel from "@/hooks/useCarousel"
import { ChevronUp } from "lucide-react"
import DotsGroup from "./DotsGroup"
import { useEffect, useState } from "react"
import { Reveal } from "./animators/Reveal"
import { Button } from "./ui/button"
import { MoreDialog } from "."
import { Link } from "react-router-dom"
import { useGetAllMainServicesQuery } from "@/app/api/ServicesApiSlice"

const About = () => {
  const [percentage, setPercentage] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState("")

  const { data: mainServices } =
    useGetAllMainServicesQuery("")

  useEffect(() => {
    const interval = setInterval(() => {
      if (percentage < 100) {
        setPercentage(prev => prev + 1)
      } else {
        setPercentage(0)
      }
    }, 40)

    console.log(mainServices?.mainServices)

    return () => {
      clearInterval(interval)
    }
  }, [mainServices])

  const { page, next, go } = useCarousel({
    time: 5000,
    pages: mainServices?.count!,
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
      {mainServices &&
        mainServices.mainServices.map((item, i) => (
          <Slide
            isOpen={isOpen}
            setContent={setContent}
            img={item.photo}
            pageNumber={i! + 1}
            currentPageNumber={page}
            description={item.description}
            key={i}
            title={item.name}
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
      <MoreDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        content={content}
      />
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
  isOpen: boolean
  setContent: React.Dispatch<React.SetStateAction<string>>
  description: string
}

const Slide = ({
  pageNumber,
  currentPageNumber,
  img,
  title,
  setIsOpen,
  setContent,
  description,
  isOpen,
}: SlideProps) => {
  useEffect(() => {
    if (pageNumber === currentPageNumber && !isOpen)
      setContent(description)
  }, [currentPageNumber, isOpen])
  return (
    <div
      style={{ backgroundImage: `url("${img}")` }}
      className={`absolute w-full h-full z-40 bg-cover bg-center bg-no-repeat flex items-center justify-center
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
          <div className="flex items-center gap-7 justify-center">
            <Link to={"/service"}>
              <Button
                className={`font-arabic text-lg transition-all hover:text-primary hover:bg-carCabin hover:bg-cover hover:bg-center hover:bg-no-repeat hover:scale-125 relative group flex `}
              >
                <div className="inset-0 absolute bg-black/40 hidden group-hover:block" />
                <span className="z-50">أحجز الآن</span>
              </Button>
            </Link>
            <Button
              className="px-5 py-[7px] rounded-lg bg-orange-400 font-arabic text-lg transition-all hover:text-primary hover:bg-carCabin hover:bg-cover hover:bg-center hover:bg-no-repeat hover:scale-125 relative group flex "
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
