import { CarFront } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

type PersonalInfoProps = {
  carSize: 0 | 1 | 2
}

const PersonalInfo = ({ carSize }: PersonalInfoProps) => {
  return (
    <div
      id="personal-info"
      className="min-h-screen max-w-5xl mx-auto flex items-center max-lg:flex-col justify-center gap-5"
    >
      <form
        className="block min-w-[300px] rounded-lg shadow-2xl bg-slate-400/20 backdrop-blur-lg relative
        z-10 p-5 flex-1"
      >
        <div className="absolute inset-1/2 bg-primary/30 blur-[1rem] shadow-blur translate-x-1/2 -translate-y-1/2 scaler w-[200px] aspect-square rounded-full -z-[1]"></div>
        <h1 className="w-fit mx-auto text-primary text-2xl mb-6 font-arabic font-semibold">
          أدخل بياناتك لاكمال الحجز
        </h1>
        <Input
          className="my-4 font-arabic text-lg text-white"
          placeholder="الاسم الاول"
        />
        <Input
          className="my-4 font-arabic text-lg text-white"
          placeholder="الاسم الثاني"
        />
        <Input
          type="tel"
          className="my-4 font-arabic text-lg text-white ltr text-right"
          placeholder="رقم الهاتف"
        />
        <Input
          className="my-4"
          type="datetime-local"
          onChange={e =>
            console.log(
              new Date(e.target.value).toLocaleString()
            )
          }
        />
        <Button className="text-lg font-arabic w-full">
          إكمال الحجز
        </Button>
      </form>
      <div className="flex-1 grid grid-cols-2 gap-5 z-10">
        <div className="h-52 bg-slate-400/20 backdrop-blur-lg rounded-lg z-10 flex flex-col items-center min-w-[150px] p-5">
          <div className="absolute inset-1/2 bg-primary/30 blur-[1rem] shadow-blur translate-x-1/2 -translate-y-1/2 scaler w-[100px] aspect-square rounded-full -z-[1]"></div>
          <h1 className="w-fit mx-auto text-xl text-primary font-arabic">
            حجم السيارة
          </h1>
          <div className="my-5">
            <CarFront className="text-primary" size={50} />
          </div>
          <span className="font-arabic text-xl font-bold">
            {carSize === 0
              ? "صغير"
              : carSize === 1
              ? "وسط"
              : "كبير"}
          </span>
        </div>
        <div className="h-52 bg-slate-400/20 backdrop-blur-lg rounded-lg z-10 flex flex-col items-center min-w-[150px] p-5">
          <div className="absolute inset-1/2 bg-primary/30 blur-[1rem] shadow-blur translate-x-1/2 -translate-y-1/2 scaler w-[100px] aspect-square rounded-full -z-[1]"></div>
          <h1 className="w-fit mx-auto text-xl text-primary font-arabic">
            الخدمات
          </h1>
        </div>
        <div className="h-52 bg-slate-400/20 backdrop-blur-lg rounded-lg z-10 flex flex-col items-center min-w-[150px] p-5">
          <div className="absolute inset-1/2 bg-primary/30 blur-[1rem] shadow-blur translate-x-1/2 -translate-y-1/2 scaler w-[100px] aspect-square rounded-full -z-[1]"></div>
          <h1 className="w-fit mx-auto text-xl text-primary font-arabic">
            السعر الاجمالي
          </h1>
        </div>
        <div className="h-52 bg-slate-400/20 backdrop-blur-lg rounded-lg z-10 flex flex-col items-center min-w-[150px] p-5">
          <div className="absolute inset-1/2 bg-primary/30 blur-[1rem] shadow-blur translate-x-1/2 -translate-y-1/2 scaler w-[100px] aspect-square rounded-full -z-[1]"></div>
          <h1 className="w-fit mx-auto text-xl text-primary font-arabic">
            تاريخ و توقيت الحجز
          </h1>
        </div>
      </div>
    </div>
  )
}
export default PersonalInfo
