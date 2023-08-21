import { Categories, ProductCard } from "@/components"
import { CATEGORIES } from "@/constants"

const Shopping = () => {
  return (
    <div>
      <Categories />
      <div className="grid grid-columns p-4">
        <ProductCard
          name="بطارية"
          category={CATEGORIES.batteries}
          img="/battery.png"
        />
        <ProductCard
          name="زيت"
          category={CATEGORIES.oil}
          img="/oil.png"
        />
        <ProductCard
          name="إطار"
          category={CATEGORIES.wheels}
          img="/wheel.png"
        />
      </div>
    </div>
  )
}
export default Shopping
