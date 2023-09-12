import { ReactNode, useState } from "react"
import bigCar from "/big.webp"
import mediumCar from "/medium.webp"
import smallCar from "/small.webp"
import ServicePackageCard from "@/components/ServicePackageCard"

const Services = () => {
  const [active, setActive] = useState(0)

  return (
    <section className="text-center py-20">
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
            >
              صغير
            </SelectCard>
            <SelectCard
              img={mediumCar}
              setActive={setActive}
              id={1}
              active={active === 1}
            >
              وسط
            </SelectCard>
            <SelectCard
              img={bigCar}
              setActive={setActive}
              id={2}
              active={active === 2}
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
          />
        </div>
      </div>
      <div className="text-center min-h-screen">
        <Heading content="الخطوة الثانية" />
        <span className="font-arabic text-lg">
          اختر الخدمة و الباقة
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

type SelectCardProps = {
  children: ReactNode
  active?: boolean
  id: number
  setActive: React.Dispatch<React.SetStateAction<number>>
  img: string
}

const SelectCard = ({
  children,
  active = false,
  setActive,
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
      onClick={() => setActive(id)}
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
