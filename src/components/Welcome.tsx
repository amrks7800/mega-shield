import { motion } from "framer-motion"

const Welcome = () => {
  return (
    <section
      id="welcome"
      className="min-h-screen bg-welcome bg-cover bg-center bg-no-repeat flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="z-10 text-center">
        <span
          className="text-primary text-xl font-arabic font-semibold relative before:content-[''] before:absolute
        before:h-full before:w-3 before:skew-y-[25deg] before:bg-primary before:-right-[20px] block w-fit mx-auto mb-4"
        >
          نبذة عن موقع ميجا شيلد
        </span>
        <h1 className="text-white sm:text-5xl text-3xl font-semibold font-arabic mx-auto w-fit text-center">
          مرحبا بكم فى موقع ميجا شيلد
        </h1>
        <motion.p
          initial={{ translateX: 25, opacity: 0 }}
          whileInView={{
            translateX: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.3 },
          }}
          viewport={{ once: true, amount: 0.25 }}
          className="font-arabic font-semibold text-md text-slate-300 max-w-[600px]
      text-center mx-auto my-5"
        >
          نحن فريق من المحترفين المتخصصين في تقديم أفضل
          أفلام تظليل النوافذ للسيارات والشركات والمنازل في
          المملكة. نحن نقدم حلولًا مبتكرة وجودة عالية
          لعملائنا في قطاع الأعمال والفردية.
        </motion.p>
        <motion.p
          initial={{ translateX: -25, opacity: 0 }}
          whileInView={{
            translateX: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.6 },
          }}
          viewport={{ once: true, amount: 0.25 }}
          className="font-arabic font-semibold text-md text-slate-300 max-w-[600px]
      text-center mx-auto my-5"
        >
          لقد اصبحنا شريكا موثوقا به للعديد من العملاء و
          الشركات ف المملكة. نحن نفتخر بتقدسم منتجات ذات
          جودة عالية و خدمة عملاء نحن نهدف الي بناء علاقات
          مستدامة و موثوقة لعملائنا و تلبية احتياجاتهم
          المحددة
        </motion.p>
        <motion.p
          initial={{ translateX: 25, opacity: 0 }}
          whileInView={{
            translateX: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.9 },
          }}
          viewport={{ once: true, amount: 0.25 }}
          className="font-arabic font-semibold text-md text-slate-300 max-w-[600px]
      text-center mx-auto my-5"
        >
          انضم الينا اليوم واستمتع بفوائد الحماية المتقدمة و
          المظهر الجمالي لنوافذ سيارتك و المباني الخاصة بك.
        </motion.p>
      </div>
    </section>
  )
}
export default Welcome
