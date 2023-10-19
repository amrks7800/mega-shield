import { Package } from "@/types"
import { For } from "@dev-amr/react-sugartax"
import { Check } from "lucide-react"
import { Button } from "./ui/button"

const AdditionalServicePackageCard = ({
  servicePackage,
  packages,
  setPackages,
}: {
  servicePackage: Package
  packages: { title: string; price: number }[]
  setPackages: React.Dispatch<
    React.SetStateAction<{ title: string; price: number }[]>
  >
}) => {
  return (
    <div className="w-[300px] h-[250px] bg-slate-950 rounded-md shadow-md relative overflow-hidden">
      <div className="absolute top-0 h-full w-[70px] z-0 bg-primary/70 left-8 -skew-x-12" />
      <div className="relative z-10">
        <h1 className="font-arabic text-white text-xl my-3">
          {servicePackage.name}
        </h1>
        <ul className="p-5 text-green-600 font-arabic font-bold text-lg">
          <For each={servicePackage.description}>
            {(item, i) => (
              <li
                key={i}
                className="flex items-center gap-2"
              >
                <Check />
                <span>{item}</span>
              </li>
            )}
          </For>
        </ul>

        <Button
          className="font-arabic"
          onClick={() => {
            if (
              !packages.find(
                item => item.title === servicePackage.name
              )
            ) {
              console.log("done")
              setPackages(prev => [
                ...prev,
                {
                  title: servicePackage.name,
                  price: +servicePackage.price,
                },
              ])
            } else {
              const filteredPackages = packages.filter(
                item => item.title !== servicePackage.name
              )

              setPackages(filteredPackages)
            }
          }}
        >
          {packages.find(
            item => item.title === servicePackage.name
          ) ? (
            <Check className="text-green-500" />
          ) : (
            "اضافة"
          )}
        </Button>
      </div>
    </div>
  )
}
export default AdditionalServicePackageCard