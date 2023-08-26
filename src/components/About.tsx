import { SERVICES } from "@/constants"
import { CarCard } from "."

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen p-10 bg-carbon bg-center"
    >
      <h1 className="my-5 w-fit mx-auto text-3xl text-primary font-arabic font-bold">
        خدماتنا
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-[1000px] mx-auto">
        <CarCard
          index={1}
          img={"bg-img1-s"}
          text="العازل الحراري للسيارات"
          path={SERVICES.thermal}
        />
        <CarCard
          index={2}
          img={"bg-img2-s"}
          text="أفلام حماية السيارات"
          path={SERVICES.film}
        />
        <CarCard
          index={3}
          img={"bg-img3-s"}
          text="النانوسيراميك"
          path={SERVICES.nano}
        />
        <CarCard
          index={4}
          img={"bg-img4-s"}
          text="الحماية"
          path={SERVICES.protect}
        />
        <CarCard
          index={5}
          img={"bg-img5-s"}
          text="التلميع"
          path={SERVICES.polish}
        />
        <CarCard
          index={6}
          img={"bg-img6-s"}
          text="حماية الزجاج"
          path={SERVICES.glass}
        />
      </div>
    </section>
  )
}
export default About
