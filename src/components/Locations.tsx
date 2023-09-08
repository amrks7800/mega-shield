import { MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { Reveal } from "./animators/Reveal"
import { MainTitle } from "."

const Locations = () => {
  return (
    <section className="cut-viewport overflow-hidden flex items-center justify-center relative">
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.5, y: 45 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="block m-auto bg-planet bg-cover bg-center bg-no-repeat w-full cut-viewport relative"
      />
      <div className="absolute inset-0 bg-gray-800/20" />
      <div className="absolute top-5 w-[250px]">
        <MainTitle>موقعنا</MainTitle>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 2 }}
        viewport={{ once: true }}
        className="absolute z-50 overflow-hidden hover:scale-125 transition-transform duration-200"
      >
        <Reveal delay={2}>
          <a href="https://maps.google.com?q=%D9%85%D9%8A%D8%AC%D8%A7%D8%B4%D9%8A%D9%84%D8%AF%20Mega%20shield%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%B3%D9%84%D8%B7%D8%A7%D9%86%D8%A9%D8%8C%20%D8%A7%D9%84%D8%B1%D8%A7%D9%8A%D8%A9%D8%8C%20%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9%2042312&ftid=0x15bdbfa38f9e6d15:0xc7a62cd862b59af4&hl=ar-SA&gl=sa&entry=gps&lucs=,47083423,47071704&g_st=iw">
            <MapPin color="#E22D48" size={30} />
          </a>
        </Reveal>
      </motion.div>
    </section>
  )
}
export default Locations
