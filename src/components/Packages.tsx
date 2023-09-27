import { ServicesSlider } from "."
import ServicePackageCard from "./ServicePackageCard"

const Packages = () => {
  return (
    <div className="text-center lg:min-h-screen">
      <h1 className="text-2xl font-semibold font-arabic text-primary w-fit mx-auto py-5">
        الخطوة الثانية
      </h1>
      <span className="font-arabic text-lg">
        اختر الخدمة و الباقة
      </span>

      <div className="flex lg:min-h-[80vh] justify-center py-4 px-6 lg:flex-row flex-col">
        <ServicesSlider />
        <div className="flex-1 overflow-y-scroll lg:h-[80vh] max-lg:h-[50vh] no-scroll">
          <div className="grid grid-columns">
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
      </div>
    </div>
  )
}
export default Packages
