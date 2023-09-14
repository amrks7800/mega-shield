import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Link } from "react-router-dom"

type DialogProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MoreDialog = ({ isOpen, setIsOpen }: DialogProps) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent
        className="bg-slate-400/20 backdrop-blur-lg border-none shadow-xl"
        dir="rtl"
      >
        <DialogHeader>
          <DialogDescription
            className="text-white text-base text-right font-arabic"
            dir="rtl"
          >
            <p dir="rtl" className="leading-8">
              <span className="text-primary text-lg">
                التمليع الداخلي:{" "}
              </span>
              تلميع للمراتب سريع حيث تركز على التنظيف العميق
              ببخار الماء والتجديد والإصلاح الداخلي للأجزاء
              الداخلية للسيارة وتتم العملية بواسطة مواد
              حصرية{" "}
              <span>
                بديتاليواوتو
                <span className="text-primary text-lg">
                  .
                </span>
              </span>
              <br />
              <span className="text-primary text-lg">
                التلميع الخارجي:{" "}
              </span>
              ثلاث مراحل تشمل بوليش خشن وناعم ومائي ويشتمل
              جميع أجزاء السيارة الخارجية حتى الأنوار
              الأمامية والكشافات (ازالة الخدوش على سطح
              الطلاء الترميل القابل للازالة - آثار الحكات
              السطحية - آثار اللاصق - آثارالإسفلت) وبفضله
              يتم ازالة جميع الشوائب والمواد المؤكسدة من على
              جسم السيارة وترجع بذلك اللمعة الاصلية للسيارة
              .
            </p>
          </DialogDescription>
          <div className="flex items-center gap-3 mb-5 mt-10 justify-center">
            <Button
              onClick={() => setIsOpen(false)}
              className="font-arabic min-w-[100px]"
            >
              تم
            </Button>
            <Button asChild>
              <Link
                to={"/service"}
                className="font-arabic min-w-[100px]"
              >
                احجز الآن
              </Link>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default MoreDialog
