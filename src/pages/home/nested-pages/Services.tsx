import { ReactNode, useState } from "react"
import { useParams } from "react-router-dom"
import bigCar from "/big.webp"
import mediumCar from "/medium.webp"
import smallCar from "/small.webp"
import ServicePackageCard from "@/components/ServicePackageCard"

const Services = () => {
  const { service } = useParams()
  const [active, setActive] = useState(0)

  return (
    <section className="text-center py-20">
      <div className="text-center min-h-screen bg-room bg-cover bg-no-repeat">
        <div className="text-center">
          <Heading content="الخطوة الاولي" />
          <span className="font-arabic text-lg">
            اختر حجم سيارتك
          </span>
          <div className="flex items-center gap-3 text-center justify-center my-5">
            <Select
              setActive={setActive}
              id={0}
              active={active === 0}
            >
              صغير
            </Select>
            <Select
              setActive={setActive}
              id={1}
              active={active === 1}
            >
              وسط
            </Select>
            <Select
              setActive={setActive}
              id={2}
              active={active === 2}
            >
              كبير
            </Select>
          </div>
        </div>
        <div className="w-[90vw] aspect-auto mx-auto">
          <img
            src={
              active === 0
                ? smallCar
                : active === 1
                ? mediumCar
                : bigCar
            }
            alt={`car-size-${active}`}
          />
        </div>
      </div>
      <div className="text-center min-h-screen">
        <Heading content="الخطوة الثانية" />
        <span className="font-arabic text-lg">
          اختر حجم سيارتك
        </span>

        <div className="grid grid-columns p-8">
          <ServicePackageCard
            title="حماية الزجاج"
            features={<h1>4</h1>}
          />
          <ServicePackageCard
            title="حماية الزجاج"
            features={<h1>4</h1>}
          />
          <ServicePackageCard
            title="حماية الزجاج"
            features={<h1>4</h1>}
          />
          <ServicePackageCard
            title="حماية الزجاج"
            features={<h1>4</h1>}
          />
          <ServicePackageCard
            title="حماية الزجاج"
            features={<h1>4</h1>}
          />
          <ServicePackageCard
            title="حماية الزجاج"
            features={<h1>4</h1>}
          />
        </div>
      </div>
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

type SelectProps = {
  children: ReactNode
  active?: boolean
  id: number
  setActive: React.Dispatch<React.SetStateAction<number>>
}

const Select = ({
  children,
  active = false,
  setActive,
  id,
}: SelectProps) => {
  return (
    <button
      type="button"
      className={`font-arabic text-white text-lg ${
        active ? "bg-black/70" : "bg-transparent"
      } hover:text-primary px-5 py-3 rounded-full transition-colors duration-200`}
      onClick={() => setActive(id)}
    >
      {children}
    </button>
  )
}
