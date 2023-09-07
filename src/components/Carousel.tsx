import { motion } from "framer-motion"
import arrow from "/arrow-car.png"
import { CarIcon } from "lucide-react"

const Carousel = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="relative h-screen bg-main bg-cover bg-no-repeat bg-center flex flex-col items-center font-arabic justify-center"
        initial={{ scale: 1.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-gray-800/40"></div>
        <CarIcon
          size={50}
          color="#E22D48"
          className="z-10"
        />
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 + 0.1 }}
          className="text-lg mb-2 text-primary z-10 font-semibold"
        >
          أفضل
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 + 0.3 }}
          className="z-10 text-3xl font-bold text-center mb-2"
        >
          محترفي خدمات <br /> السيارات في المملكة
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 + 0.5 }}
          className="w-[50px] h-1 bg-primary z-10 my-3"
        />

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 + 0.7 }}
          className="max-w-[220px] text-sm z-10 text-slate-300 text-center"
        >
          أمن شكل جديد و حماية فائقة لسيارتك مع باقة من أقوي
          الخدمات و المنتجات
        </motion.p>
        <motion.div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-14 cursor-pointer bounce"
          initial={{ y: "200%", translateX: "-50%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a href={"#welcome"}>
            <img
              src={arrow}
              alt="arrow-car"
              className="rotate-90"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Carousel
