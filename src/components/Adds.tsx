import { SearchCheck } from "lucide-react"
import mobileCar from "/mobile-car.png"
import { motion } from "framer-motion"

const Adds = () => {
  return (
    <section
      id="adds"
      className="min-h-screen md:flex-row flex-col flex overflow-x-hidden"
    >
      <motion.div
        initial={{ translateX: "100%" }}
        whileInView={{
          translateX: 0,
          transition: { delay: 1, duration: 2 },
        }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center bg-wheel bg-cover bg-no-repeat bg-blend-overlay
      relative"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="z-10 text-center">
          <h1 className="text-white sm:text-7xl text-4xl mb-4 font-bold font-arabic">
            تسوق الأن
          </h1>
          <ul
            className="flex flex-col justify-center items-start gap-4 list-none
          mb-6"
          >
            <li className="flex items-center gap-2">
              <SearchCheck color="red" />
              <span className="text-xl font-bold font-arabic">
                افضل العروض
              </span>
            </li>
            <li className="flex items-center gap-2">
              <SearchCheck color="red" />
              <span className="text-xl font-bold font-arabic">
                جودة عالية
              </span>
            </li>
            <li className="flex items-center gap-2">
              <SearchCheck color="red" />
              <span className="text-xl font-bold font-arabic">
                اسعار تنافسية
              </span>
            </li>
          </ul>
          <button
            className="flex items-center justify-center text-3xl font-bold font-arabic h-20 w-[220px] bg-primary mx-auto my-5
          border-4 border-solid border-transparent
          transition-colors hover:bg-transparent hover:border-primary"
          >
            التسوق
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: "-100%" }}
        whileInView={{
          translateX: 0,
          transition: { delay: 1, duration: 2 },
        }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center items-center bg-primary/70"
      >
        <div className="z-10 text-center">
          <h1 className="text-white sm:text-7xl text-4xl mb-4 font-bold font-arabic">
            أحجز معادك الان
          </h1>
          <img
            src={mobileCar}
            alt="car"
            className="mx-auto my-4 w-52"
          />
          <button
            className="flex items-center justify-center text-3xl font-bold font-arabic h-20 w-[220px] bg-black mx-auto my-5
          border-4 border-solid border-transparent
          transition-colors hover:bg-transparent hover:border-black"
          >
            إحجز الان
          </button>
        </div>
      </motion.div>
    </section>
  )
}
export default Adds
