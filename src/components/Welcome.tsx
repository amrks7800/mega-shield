import { motion } from "framer-motion"
import { MainTitle } from "."

const Welcome = () => {
  return (
    <section
      id="welcome"
      className="min-h-screen  flex justify-center relative overflow-hidden"
    >
      <motion.div
        initial={{ scaleX: 3 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          bounce: 0.7,
          delay: 0.5,
          duration: 0.7,
        }}
        className="bg-main bg-cover bg-no-repeat bg-center flex-1 relative sm:block hidden origin-right"
      />
      <div className="z-10 text-center flex-1 flex justify-center flex-col max-sm:bg-main bg-cover bg-center bg-no-repeat">
        <div className="max-w-[600px] sm:ps-7">
          <MainTitle>مرحبا فى ميجا شيلد</MainTitle>
        </div>
        <motion.p
          initial={{ translateX: 25, opacity: 0 }}
          whileInView={{
            translateX: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.9 },
          }}
          viewport={{ amount: 0.25 }}
          className="font-arabic font-semibold text-md text-slate-300 max-w-[600px]
          sm:text-right text-center sm:px-0 px-3 mx-auto my-5"
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
            transition: { duration: 0.3, delay: 1.5 },
          }}
          viewport={{ amount: 0.25 }}
          className="font-arabic font-semibold text-md text-slate-300 max-w-[600px]
          sm:text-right text-center sm:px-0 px-3 mx-auto my-5"
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
            transition: { duration: 0.3, delay: 1.8 },
          }}
          viewport={{ amount: 0.25 }}
          className="font-arabic font-semibold text-md text-slate-300 max-w-[600px]
          sm:text-right text-center sm:px-0 px-3 mx-auto my-5"
        >
          انضم الينا اليوم واستمتع بفوائد الحماية المتقدمة و
          المظهر الجمالي لنوافذ سيارتك و المباني الخاصة بك.
        </motion.p>
      </div>
    </section>
  )
}
export default Welcome
