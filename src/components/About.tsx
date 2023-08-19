import { CarCard } from "."
import car1 from "/car1.jpg"
import car2 from "/car2.jpg"
import car3 from "/car3.jpg"
import car4 from "/car4.jpg"
import car5 from "/car5.jpg"
import car6 from "/car6.jpg"

const About = () => {
  return (
    <section id="about" className="min-h-screen p-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-[1000px] mx-auto">
        <CarCard
          index={1}
          img={car1}
          text="العازل الحراري للسيارات"
        />
        <CarCard
          index={2}
          img={car2}
          text="أفلام حماية السيارات"
        />
        <CarCard
          index={3}
          img={car3}
          text="النانوسيراميك"
        />
        <CarCard index={4} img={car4} text="الحماية" />
        <CarCard index={5} img={car5} text="التلميع" />
        <CarCard index={6} img={car6} text="حماية الزجاج" />
      </div>
    </section>
  )
}
export default About
