import { Description } from "@/components"
import { whoAreWeContent } from "@/constants"

const Who = () => {
  return (
    <div>
      <Description
        title="من نحن"
        content={whoAreWeContent[0]}
      />
      <Description
        title="لماذا نحن"
        content={whoAreWeContent[1]}
      />
      <Description
        title="هدفنا"
        content={whoAreWeContent[2]}
      />
      <Description
        title="الرسالة"
        content={whoAreWeContent[3]}
      />
    </div>
  )
}
export default Who
