import { useState } from "react"
import ServicePackageCard from "./ServicePackageCard"
import { SERVICES } from "@/constants"
import { For } from "@dev-amr/react-sugartax"

const Packages = () => {
  const [activeService, setActiveService] = useState(
    SERVICES.protect
  )

  return (
    <div className="text-center min-h-screen">
      <h1 className="text-2xl font-semibold font-arabic text-primary w-fit mx-auto py-5">
        الخطوة الثانية
      </h1>
      <span className="font-arabic text-lg">
        اختر الخدمة و الباقة
      </span>

      <div className="w-[95vw] overflow-x-auto no-scroll">
        <div className="flex m-5 min-w-[950px] items-center gap-4 justify-center">
          <For each={Object.entries(SERVICES)}>
            {(item, i) => (
              <div
                key={i}
                className={`flex shrink-0 items-center justify-center p-3 rounded-full font-arabic text-base font-bold
              hover:text-primary transition-colors cursor-pointer
               ${
                 item[1] === activeService
                   ? "bg-[#333] backdrop-blur-md text-primary"
                   : "bg-transparent"
               }`}
                onClick={() => setActiveService(item[1])}
              >
                {item[1]}
              </div>
            )}
          </For>
        </div>
      </div>

      <div className="grid grid-columns p-8">
        <ServicePackageCard
          title="حماية الزجاج"
          features={[
            "ازالة البقع",
            "تلميع الطلاء",
            "العناية الفائقة",
          ]}
          price={1762}
        />
        <ServicePackageCard
          title="حماية الزجاج"
          features={[
            "ازالة البقع",
            "تلميع الطلاء",
            "العناية الفائقة",
          ]}
          price={1762}
        />
        <ServicePackageCard
          title="حماية الزجاج"
          features={[
            "ازالة البقع",
            "تلميع الطلاء",
            "العناية الفائقة",
          ]}
          price={1762}
        />
        <ServicePackageCard
          title="حماية الزجاج"
          features={[
            "ازالة البقع",
            "تلميع الطلاء",
            "العناية الفائقة",
          ]}
          price={1762}
        />
        <ServicePackageCard
          title="حماية الزجاج"
          features={[
            "ازالة البقع",
            "تلميع الطلاء",
            "العناية الفائقة",
          ]}
          price={1762}
        />
        <ServicePackageCard
          title="حماية الزجاج"
          features={[
            "ازالة البقع",
            "تلميع الطلاء",
            "العناية الفائقة",
          ]}
          price={1762}
        />
      </div>
    </div>
  )
}
export default Packages
