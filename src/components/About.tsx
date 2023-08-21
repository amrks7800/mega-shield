import { CarCard } from "."

const About = () => {
  return (
    <section id="about" className="min-h-screen p-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-[1000px] mx-auto">
        <CarCard
          index={1}
          img={"bg-img1-s"}
          text="العازل الحراري للسيارات"
        />
        <CarCard
          index={2}
          img={"bg-img2-s"}
          text="أفلام حماية السيارات"
        />
        <CarCard
          index={3}
          img={"bg-img3-s"}
          text="النانوسيراميك"
        />
        <CarCard
          index={4}
          img={"bg-img4-s"}
          text="الحماية"
        />
        <CarCard
          index={5}
          img={"bg-img5-s"}
          text="التلميع"
        />
        <CarCard
          index={6}
          img={"bg-img6-s"}
          text="حماية الزجاج"
        />
      </div>
    </section>
  )
}
export default About
