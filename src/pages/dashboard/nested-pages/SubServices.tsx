import { useGetSubServicesQuery } from "@/app/api/ServicesApiSlice"
import { AddSubServiceModal } from "@/components"
import ContentTable from "@/components/Table"
import { useParams } from "react-router-dom"

const SubServices = () => {
  const { id } = useParams()

  const { data: subServices } = useGetSubServicesQuery({
    id: id!,
  })

  console.log(id, subServices)
  return (
    <div>
      <AddSubServiceModal id={id} withButton mode="add" />
      <div className=" overflow-x-scroll max-md:w-[90vw] mx-auto">
        {subServices && (
          <ContentTable
            mode="services"
            headers={[
              "اسم الخدمة",
              "الوصف",
              "الصورة",
              "الاصدار",
            ]}
            items={subServices.services}
          />
        )}
      </div>
    </div>
  )
}

export default SubServices