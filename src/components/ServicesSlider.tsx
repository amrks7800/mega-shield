import useCarousel from "@/hooks/useCarousel"
import { For } from "@dev-amr/react-sugartax"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"
import { useEffect, useRef } from "react"
import {
  useGetAllMainServicesQuery,
  useGetSubServicesQuery,
} from "@/app/api/ServicesApiSlice"
import { MainService } from "@/types"

type ServicesProps = {
  setSubServiceID: React.Dispatch<
    React.SetStateAction<string>
  >
  subServiceID: string
}

const ServicesSlider = ({
  setSubServiceID,
  subServiceID,
}: ServicesProps) => {
  const { data: mainServices } =
    useGetAllMainServicesQuery("")

  const { next, page, prev } = useCarousel({
    time: 3000,
    pages: mainServices?.count!,
    autoPlay: false,
  })

  return (
    <div className="flex-1 relative">
      <div className="h-screen flex overflow-x-scroll no-scroll">
        {mainServices && (
          <For each={mainServices?.mainServices}>
            {(item, i) => (
              <Slide
                setSubServiceID={setSubServiceID}
                subServiceID={subServiceID}
                key={i}
                service={item}
                active={page}
                idx={i! + 1}
              />
            )}
          </For>
        )}
        <button
          onClick={next}
          className="absolute z-[150] top-1/2 -translate-y-1/2 left-1"
        >
          <ArrowBigLeft size={40} color="#E22D48" />
        </button>
        <button
          onClick={prev}
          className="absolute z-[150] top-1/2 -translate-y-1/2 right-1"
        >
          <ArrowBigRight size={40} color="#E22D48" />
        </button>
      </div>
    </div>
  )
}
export default ServicesSlider

type SlideProps = {
  service: MainService
  idx: number
  active: number
  setSubServiceID: React.Dispatch<
    React.SetStateAction<string>
  >
  subServiceID: string
}

const Slide = ({
  service,
  idx,
  active,
  setSubServiceID,
  subServiceID,
}: SlideProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const { data: subServices } = useGetSubServicesQuery({
    id: service._id,
  })

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
      flex-1 basis-[100%] shrink-0 bg-center bg-no-repeat bg-cover`}
      style={{
        background: `url("${service.photo}")`,
      }}
      ref={ref}
    >
      <h1 className="w-fit mx-auto text-2xl font-arabic font-bold">
        {service.name}
      </h1>
      <div className="my-5 flex flex-wrap gap-2 p-5">
        {subServices && (
          <For each={subServices?.services}>
            {(item, i) => (
              <div
                className={
                  "font-arabic text-lg px-4 py-3 border border-solid border-primary rounded-lg relative overflow-hidden cursor-pointer group z-[250]"
                }
                key={i}
                onClick={() => setSubServiceID(item._id)}
              >
                <div
                  className={`absolute w-full h-full -z-10 bg-primary inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ${
                    item._id === subServiceID
                      ? "translate-x-0"
                      : "-translate-x-full"
                  }`}
                />
                {item.name}
              </div>
            )}
          </For>
        )}
      </div>
    </div>
  )
}
