import { Description } from "@/components"
import { whoAreWeContent } from "@/constants"

const Who = () => {
  return (
    <div className="mt-[80px] bg-carbon">
      <Description
        title="من نحن"
        content={whoAreWeContent[0]}
      />
      <hr className="bg-primary my-8" />
      <Description
        title="لماذا نحن"
        content={whoAreWeContent[1]}
      />
      <hr className="bg-primary my-8" />
      <Description
        title="هدفنا"
        content={whoAreWeContent[2]}
      />
      <hr className="bg-primary my-8" />
      <Description
        title="الرسالة"
        content={whoAreWeContent[3]}
      />
    </div>
  )
}
export default Who
