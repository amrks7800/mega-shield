import { MAIN_SERVICES } from "@/constants"
import useCarousel from "@/hooks/useCarousel"
import { For } from "@dev-amr/react-sugartax"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import car from "/car-spots.png"
import { useEffect, useRef } from "react"

const pages = Object.entries(MAIN_SERVICES).length

const ServicesSlider = () => {
  const { next, page, prev } = useCarousel({
    time: 3000,
    pages,
    autoPlay: false,
  })
  console.log(page)
  return (
    <div className="flex-1 relative">
      <div className="lg:h-[80vh] lg:me-2 flex overflow-x-scroll no-scroll">
        <For each={Object.entries(MAIN_SERVICES)}>
          {(item, i) => (
            <Slide
              key={i}
              service={item[1]}
              active={page}
              idx={i! + 1}
            />
          )}
        </For>
        <button
          onClick={next}
          className="absolute z-[150] top-1/2 -translate-y-1/2 left-1"
        >
          <ArrowBigLeft size={40} />
        </button>
        <button
          onClick={prev}
          className="absolute z-[150] top-1/2 -translate-y-1/2 right-1"
        >
          <ArrowBigRight size={40} />
        </button>
      </div>
    </div>
  )
}
export default ServicesSlider

type SlideProps = {
  service: {
    name: string
    services: {
      name: string
      packages: {
        name: string
      }[]
    }[]
  }
  idx: number
  active: number
}

const Slide = ({ service, idx, active }: SlideProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (active === idx && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })
    }
  }, [active, idx, ref.current])
  return (
    <div
      className={`transition-opacity duration-500 rounded-s-lg p-5 flex flex-col items-center justify-center h-full
      flex-1 basis-[100%] shrink-0`}
      ref={ref}
    >
      <h1 className="w-fit mx-auto text-2xl font-arabic font-bold">
        {service.name}
      </h1>
      <img
        src={car}
        alt="car-spots"
        className="w-[400px] min-h-[200px]"
      />
      <div className="my-5 flex flex-wrap gap-2 p-5">
        <For each={service.services}>
          {(item, i) => (
            <button
              className="font-arabic text-lg px-4 py-3 border border-solid border-primary
              rounded-lg relative overflow-hidden group"
              key={i}
              onClick={() => console.log(item.name)}
            >
              <div className="absolute w-full h-full -z-10 bg-primary inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              {item.name}
            </button>
          )}
        </For>
      </div>
    </div>
  )
}
