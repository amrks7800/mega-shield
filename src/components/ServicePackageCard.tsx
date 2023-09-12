import { ReactNode } from "react"

type ServicePackageCardProps = {
  title: string
  features: ReactNode
}

const ServicePackageCard = ({
  title,
  features,
}: ServicePackageCardProps) => {
  return (
    <div
      className="p-5 relative bg-package bg-cover bg-no-repeat min-h-[500px]
    rounded-lg overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-black/40" />
      <div className="absolute z-10 text-center">
        <h1 className="mx-auto w-fit text-3xl text-primary font-arabic my-5">
          {title}
        </h1>
        <div className="flex flex-col gap-2 items-start justify-center">
          {features}
        </div>
      </div>
    </div>
  )
}
export default ServicePackageCard
