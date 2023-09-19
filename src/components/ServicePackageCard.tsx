import { For } from "@dev-amr/react-sugartax"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

type ServicePackageCardProps = {
  title: string
  features: string[]
  price: number | string
}

const ServicePackageCard = ({
  title,
  features,
  price,
}: ServicePackageCardProps) => {
  return (
    <div className="overflow-hidden relative flex flex-col rounded-lg">
      <div
        className="absolute h-[50px] w-52 border-y-2 border-solid border-slate-400 flex items-center justify-center
      -rotate-45 top-5 -left-12 z-[100] bg-slate-400/20 backdrop-blur-lg text-white text-md
      tracking-widest"
      >
        MEGA PRICE
      </div>
      <div className="absolute inset-0 bg-black/40 z-20 " />
      <div className="z-40 p-5 peer">
        <h1 className="text-right text-3xl text-primary font-arabic my-5">
          {title}
        </h1>
        <div className="flex my-5 w-fit gap-1 text-primary">
          <div className=" aspect-square flex items-start text-xl font-bold shadow-sm">
            $
          </div>
          <div className="flex-1 items-center justify-center text-slate-200 text-6xl">
            {price}
          </div>
          <div className=" aspect-square flex items-end text-xl font-bold shadow-sm font-arabic">
            ريال
          </div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center my-14">
          <For each={features}>
            {(item, i) => (
              <div
                className="flex items-center gap-2"
                key={i}
              >
                <Check size={25} color="#16FF00" />
                <span className="text-[#16FF00] font-arabic font-bold text-base">
                  {item}
                </span>
              </div>
            )}
          </For>
        </div>
        <Button className="block font-arabic text-xl w-full">
          أحجز الأن
        </Button>
      </div>
      <div
        className="p-5 bg-package bg-cover bg-no-repeat
              rounded-lg overflow-hidden absolute inset-0 z-10 transition-transform duration-500 peer-hover:scale-110"
      ></div>
    </div>
  )
}
export default ServicePackageCard
