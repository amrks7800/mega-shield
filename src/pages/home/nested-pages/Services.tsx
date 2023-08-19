import { useParams } from "react-router-dom"
import { SERVICES, SERVICES_OPTIONS } from "@/constants"
import { Switch, Case } from "@dev-amr/react-sugartax"
import { CarSizeSlider, CustomSelect } from "@/components"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Services = () => {
  const { service } = useParams()

  return (
    <form className="text-center flex  items-center justify-center flex-col gap-5">
      <Switch on={service ? service : ""}>
        <Case that={SERVICES.thermal}>
          <Heading
            content={
              SERVICES_OPTIONS[SERVICES.thermal].title
            }
          />
          <CustomSelect
            placeholder="اختر نوع الخدمة"
            options={
              SERVICES_OPTIONS[SERVICES.thermal].options
            }
          />
        </Case>
        <Case that={SERVICES.film}>
          <Heading
            content={SERVICES_OPTIONS[SERVICES.film].title}
          />
          <CustomSelect
            placeholder="اختر نوع الخدمة"
            options={
              SERVICES_OPTIONS[SERVICES.film].options
            }
          />
        </Case>
        <Case that={SERVICES.glass}>
          <Heading
            content={SERVICES_OPTIONS[SERVICES.glass].title}
          />
          <CustomSelect
            placeholder="اختر نوع الخدمة"
            options={
              SERVICES_OPTIONS[SERVICES.glass].options
            }
          />
        </Case>
        <Case that={SERVICES.nano}>
          <Heading
            content={SERVICES_OPTIONS[SERVICES.nano].title}
          />
          <CustomSelect
            placeholder="اختر نوع الخدمة"
            options={
              SERVICES_OPTIONS[SERVICES.nano].options
            }
          />
        </Case>
        <Case that={SERVICES.protect}>
          <Heading
            content={
              SERVICES_OPTIONS[SERVICES.protect].title
            }
          />
          <CustomSelect
            placeholder="اختر نوع الخدمة"
            options={
              SERVICES_OPTIONS[SERVICES.protect].options
            }
          />
        </Case>
        <Case that={SERVICES.polish}>
          <Heading
            content={
              SERVICES_OPTIONS[SERVICES.polish].title
            }
          />
          <CustomSelect
            placeholder="اختر نوع الخدمة"
            options={
              SERVICES_OPTIONS[SERVICES.polish].options
            }
          />
        </Case>
      </Switch>
      <Input
        placeholder="الاسم الاول"
        className="max-w-md font-arabic h-10 text-md mx-4"
      />
      <Input
        placeholder="الاسم الثاني"
        className="max-w-md font-arabic h-10 text-md mx-4"
      />
      <Input
        placeholder="المدينة"
        className="max-w-md font-arabic h-10 text-md mx-4"
      />
      <Input
        placeholder="رقم الهاتف"
        type="tel"
        className="max-w-md font-arabic h-10 text-md mx-4"
      />
      <CarSizeSlider />
      <Button className="font-arabic text-xl font-bold px-6 py-4">
        أحجز الان
      </Button>
    </form>
  )
}
export default Services

const Heading = ({ content }: { content: string }) => {
  return (
    <h1 className="text-2xl font-semibold font-arabic text-primary w-fit mx-auto my-5">
      {content}
    </h1>
  )
}
