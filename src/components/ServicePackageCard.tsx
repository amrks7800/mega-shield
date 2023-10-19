import { For } from "@dev-amr/react-sugartax"
import { Check, ClipboardCheck } from "lucide-react"
import { Button } from "./ui/button"

type ServicePackageCardProps = {
  title: string
  features: string[]
  price: number | string
  packages: { title: string; price: number }[]
  setPackages: React.Dispatch<
    React.SetStateAction<{ title: string; price: number }[]>
  >
}

const ServicePackageCard = ({
  title,
  features,
  price,
  packages,
  setPackages,
}: ServicePackageCardProps) => {
  return (
    <div className="overflow-hidden relative flex flex-col rounded-lg w-[300px] h-[420px]">
      <div
        className="absolute h-[50px] w-52 border-y-2 border-solid border-slate-400 flex items-center justify-center
      -rotate-45 top-5 -left-12 z-[100] bg-slate-400/20 backdrop-blur-lg text-white text-md
      tracking-widest"
      >
        MEGA PRICE
      </div>
      <div className="absolute inset-0 bg-black/40 z-20 " />
      <div className="z-40 p-5 peer h-full">
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
        <Button
          className={` font-arabic text-xl w-full flex items-center mt-auto justify-center ${
            packages.filter(p => p.title === title).length >
            0
              ? "bg-green-600 hover:bg-green-600"
              : ""
          }`}
          onClick={() => {
            if (
              !packages.find(item => item.title === title)
            ) {
              console.log("done")
              setPackages(prev => [
                ...prev,
                { title: title, price: +price },
              ])
            } else {
              const filteredPackages = packages.filter(
                item => item.title !== title
              )

              setPackages(filteredPackages)
            }
          }}
        >
          {packages.filter(p => p.title === title).length >
          0 ? (
            <ClipboardCheck className="text-primary" />
          ) : (
            "أحجز الأن"
          )}
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
