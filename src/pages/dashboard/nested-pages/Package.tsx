import { useGetSubServicePackagesQuery } from "@/app/api/ServicesApiSlice"
import AddPackageModal from "@/components/AddPackageModal"
import ContentTable from "@/components/Table"
import { useParams } from "react-router-dom"

const Package = () => {
  const { id } = useParams()

  const { data: packages } = useGetSubServicePackagesQuery({
    id: id!,
  })

  console.log(id, packages)
  return (
    <div>
      <AddPackageModal mode="add" withButton id={id} />

      <div className=" overflow-x-scroll max-md:w-[90vw] mx-auto no-scroll">
        {packages && (
          <ContentTable
            mode="packages"
            headers={[
              "اسم الباقة",
              "الوصف",
              "السعر",
              "الاصدار",
            ]}
            items={packages.packages}
          />
        )}
      </div>
    </div>
  )
}
export default Package
