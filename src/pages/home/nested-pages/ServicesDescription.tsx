import { Link, useParams } from "react-router-dom"
import { Switch, Case, Show } from "@dev-amr/react-sugartax"
import { SERVICES, SERVICES_DESCRIPTION } from "@/constants"
import { Description } from "@/components"

const ServicesDescription = () => {
  const { service } = useParams()

  return (
    <section
      id="desc"
      className="min-h-screen relative overflow-hidden"
    >
      <Show when={!!service} fallback={"404 ☠"}>
        <Switch on={service!}>
          <Case that={SERVICES.film}>
            <Description
              title="افلام حماية الطلاء (Mega Shield PPF)"
              content={
                SERVICES_DESCRIPTION[SERVICES.film][0]
              }
            />
            <Description
              title="اين يتم تطبيق افلام الحماية؟"
              content={
                SERVICES_DESCRIPTION[SERVICES.film][1]
              }
            />
            <Link
              to={`/service/${service}`}
              className="flex items-center justify-center text-3xl font-bold font-arabic h-20 w-[220px] bg-primary mx-auto my-5
          border-4 border-solid border-transparent
          transition-colors hover:bg-transparent hover:border-primary"
            >
              <button>احجز الان</button>
            </Link>
          </Case>
        </Switch>
      </Show>
    </section>
  )
}
export default ServicesDescription
