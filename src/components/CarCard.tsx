import { motion } from "framer-motion"

type CarCardProps = {
  img: string
  text: string
  index: number
}

const CarCard = ({ img, text, index }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -25 }}
      whileInView={{
        opacity: 1,
        translateY: 0,
        transition: { duration: 1, delay: 0.5 * index },
      }}
      className="relative sm:h-[380px] h-[250px] overflow-hidden rounded-lg shadow-md group"
    >
      <img
        src={img}
        alt="car"
        className="absolute inset-0 w-full object-cover"
      />
      <div
        className="absolute w-full h-20 bg-red-500 -bottom-full transition-all duration-300 group-hover:bottom-0
      text-center font-arabic text-xl pt-5"
      >
        {text}
      </div>
    </motion.div>
  )
}
export default CarCard
