import { ReactNode, useState } from "react"
import bigCar from "/big.webp"
import mediumCar from "/medium.webp"
import smallCar from "/small.webp"
import { Packages, PersonalInfo } from "@/components"

const Services = () => {
  const [active, setActive] = useState<0 | 1 | 2>(0)
  const [className, setClassName] = useState("opacity-1")

  return (
    <section className="text-center py-20 bg-slate-950">
      <div className="text-center bg-room bg-cover bg-center bg-no-repeat">
        <div className="text-center">
          <Heading content="الخطوة الاولي" />
          <span className="font-arabic text-lg">
            اختر حجم سيارتك
          </span>
          <div className="flex items-center gap-3 text-center justify-center my-5 mx-5">
            <SelectCard
              img={smallCar}
              setActive={setActive}
              id={0}
              active={active === 0}
              setClassName={setClassName}
            >
              صغير
            </SelectCard>
            <SelectCard
              img={mediumCar}
              setActive={setActive}
              id={1}
              active={active === 1}
              setClassName={setClassName}
            >
              وسط
            </SelectCard>
            <SelectCard
              img={bigCar}
              setActive={setActive}
              id={2}
              active={active === 2}
              setClassName={setClassName}
            >
              كبير
            </SelectCard>
          </div>
        </div>
        <div className="w-[50vw] aspect-auto mx-auto">
          <img
            src={
              active === 0
                ? smallCar
                : active === 1
                ? mediumCar
                : bigCar
            }
            alt={`car-size-${active}`}
            className={`${className} transition-all duration-300`}
          />
        </div>
      </div>
      <Packages />
      <PersonalInfo carSize={active} />
    </section>
  )
}
export default Services

const Heading = ({ content }: { content: string }) => {
  return (
    <h1 className="text-2xl font-semibold font-arabic text-primary w-fit mx-auto py-5">
      {content}
    </h1>
  )
}

type SelectCardProps = {
  children: ReactNode
  active?: boolean
  id: 0 | 1 | 2
  setActive: React.Dispatch<React.SetStateAction<0 | 1 | 2>>
  setClassName: React.Dispatch<React.SetStateAction<string>>
  img: string
}

const SelectCard = ({
  children,
  active = false,
  setActive,
  setClassName,
  id,
  img,
}: SelectCardProps) => {
  return (
    <button
      type="button"
      className={`font-arabic text-white text-lg border-solid border-[2px] ${
        active ? " border-green-600" : "border-transparent"
      } hover:text-primary px-5 py-3 rounded-md transition-colors duration-200
      bg-[#333]/70 backdrop-blur-sm`}
      onClick={() => {
        setClassName("opacity-0 translate-y-[15px]")
        setTimeout(() => {
          setClassName("opacity-1 translate-y-0")
          setActive(id)
        }, 600)
      }}
    >
      <h1 className="w-fit mx-auto text-xl text-primary">
        {children}
      </h1>
      <img
        src={img}
        alt="car-size"
        className="block my-5 w-[200px]"
      />
    </button>
  )
}
