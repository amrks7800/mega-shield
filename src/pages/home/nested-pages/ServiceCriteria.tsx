import { ServiceOptionCard } from "@/components"
import { SERVICES, SERVICES_OPTIONS } from "@/constants"
import { Case, For, Switch } from "@dev-amr/react-sugartax"
import { useParams } from "react-router-dom"

const ServiceCriteria = () => {
  const { service } = useParams()

  if (!service) return "service undefined 😯"

  return (
    <Switch on={service}>
      <Case that={SERVICES.film}>
        <div className="grid grid-columns-no-gap">
          <For
            each={SERVICES_OPTIONS[SERVICES.film].options}
          >
            {(item, i) => (
              <ServiceOptionCard
                img={`bg-img${i! + 1}-s`}
                title={item}
                serviceTitle={
                  SERVICES_OPTIONS[SERVICES.film].title
                }
                key={i}
                idx={i!}
              />
            )}
          </For>
        </div>
      </Case>
      <Case that={SERVICES.glass}>
        {SERVICES_OPTIONS[SERVICES.glass].options}
      </Case>
      <Case that={SERVICES.polish}>
        {SERVICES_OPTIONS[SERVICES.polish].options}
      </Case>
      <Case that={SERVICES.nano}>
        {SERVICES_OPTIONS[SERVICES.nano].options}
      </Case>
      <Case that={SERVICES.protect}>
        {SERVICES_OPTIONS[SERVICES.protect].options}
      </Case>
      <Case that={SERVICES.thermal}>
        {SERVICES_OPTIONS[SERVICES.thermal].options}
      </Case>
    </Switch>
  )
}
export default ServiceCriteria
