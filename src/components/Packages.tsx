import React, { useState } from "react"
import { ServicesSlider } from "."
import ServicePackageCard from "./ServicePackageCard"
import { useGetSubServicePackagesQuery } from "@/app/api/ServicesApiSlice"

type PackagesProps = {
  packages: { title: string; price: number }[]
  setPackages: React.Dispatch<
    React.SetStateAction<{ title: string; price: number }[]>
  >
}

const Packages = ({
  setPackages,
  packages,
}: PackagesProps) => {
  const [subServiceID, setSubServiceID] = useState("")

  const { data: subServicePackages } =
    useGetSubServicePackagesQuery({
      id: subServiceID,
    })
  return (
    <div className="text-center lg:min-h-screen">
      <div className=" justify-center">
        <ServicesSlider
          setSubServiceID={setSubServiceID}
          subServiceID={subServiceID}
        />

        <div className="grid grid-columns px-2 py-8">
          {subServicePackages &&
            subServicePackages.count > 0 &&
            subServicePackages.packages.map(
              (packagely, i) => (
                <ServicePackageCard
                  packages={packages}
                  setPackages={setPackages}
                  key={i}
                  title={packagely.name}
                  features={packagely.description}
                  price={packagely.price}
                />
              )
            )}
        </div>
      </div>
    </div>
  )
}
export default Packages
