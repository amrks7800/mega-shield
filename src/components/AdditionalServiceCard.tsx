import {
  useGetSubServicePackagesQuery,
  useGetSubServicesQuery,
} from "@/app/api/ServicesApiSlice"
import { MainService } from "@/types"
import AdditionalServicePackageCard from "./AdditionalServicePackageCard"
import { For } from "@dev-amr/react-sugartax"
import { useEffect } from "react"

const AdditionalServiceCard = ({
  mainService,
  packages,
  setPackages,
}: {
  mainService: MainService
  packages: { title: string; price: number }[]
  setPackages: React.Dispatch<
    React.SetStateAction<{ title: string; price: number }[]>
  >
}) => {
  const { data: subservices } = useGetSubServicesQuery({
    id: mainService._id,
  })

  console.log(mainService)

  const { data: servicePackages } =
    useGetSubServicePackagesQuery({
      id: subservices?.services[0]._id!,
    })

  useEffect(() => {
    console.log(packages)
    console.log(subservices)
  }, [packages, subservices])

  return (
    <div
      className="flex-1 bg-cover bg-center bg-no-repeat p-5 hover:border-primary border border-solid border-transparent"
      style={{
        background: `url("${mainService.photo}")`,
      }}
    >
      <h1 className="mx-auto w-fit text-3xl font-arabic text-primary">
        {mainService.name}
      </h1>

      <div className="overflow-y-scroll no-scroll">
        <div className="grid grid-columns p-5">
          {servicePackages?.packages && (
            <For each={servicePackages?.packages}>
              {(item, i) => (
                <AdditionalServicePackageCard
                  servicePackage={item}
                  key={i}
                  packages={packages}
                  setPackages={setPackages}
                />
              )}
            </For>
          )}
        </div>
      </div>
    </div>
  )
}
export default AdditionalServiceCard
