import { Reveal } from "@/components/animators/Reveal"
import spots from "/car-spots.png"

export enum SERVICES {
  thermal = "thermal",
  film = "protect-film",
  nano = "nano",
  protect = "complete-protect",
  polish = "polish",
  glass = "glass",
}

export const PRODUCTS = {
  thermoProtect: {
    title: "عازل حراري",
    description:
      "بمنع تأثير التأكل الحراري و يطيل عمر اجزاء السيارة",
  },
  nanoTheramic: {
    title: "النانوسيراميك",
    description:
      "بمنع تأثير التأكل الحراري و يطيل عمر اجزاء السيارة",
  },
  glassProtection: {
    title: "أفلام حماية الزجاج",
    description: "حماية جميع مرايا السيارة من التشققات",
  },
  paintProtection: {
    title: "أفلام حماية الطلاء",
    description:
      "يحافظ على الوضوح ، ويضمن عدم التشقق مع التعرض للأشعة فوق البنفسجية أو رذاذ الملح",
  },
}

export const SERVICES_OPTIONS = {
  [SERVICES.thermal]: {
    options: [
      "فوج صن سيراميك",
      "سيراميك بلي",
      "ميجا سيراميك",
    ],
    title: "حجز خدمة العازل الحراري",
  },
  [SERVICES.film]: {
    options: ["افلام حماية ملونة", "افلام حماية شفافة"],
    title: "حجز افلام الحماية",
  },
  [SERVICES.nano]: {
    options: [
      "نانوسيراميك 3 طبقات",
      "نانوسيراميك 6 طبقات",
      "نانوسيراميك للجنوط",
    ],
    title: "حجز النانوسيراميك",
  },
  [SERVICES.protect]: {
    options: [
      "الحماية الداخلية للمقاعد جلد",
      "الحماية الداخلية للمقاعد مخمل",
    ],
    title: "حجز الحماية الداخلية",
  },
  [SERVICES.polish]: {
    options: [
      "تلميع داخلي",
      "تلميع خارجي",
      "الارضيات الجلد",
    ],
    title: "حجز التلميع",
  },
  [SERVICES.glass]: {
    options: ["حماية الزجاج الامامي ضد الكسر (بدون ضمان)"],
    title: "حجز حماية الزجاج",
  },
}

export const SERVICES_LINKS = [
  {
    name: SERVICES_OPTIONS[SERVICES.film].title,
    href: `/service/${SERVICES.film}`,
  },
  {
    name: SERVICES_OPTIONS[SERVICES.nano].title,
    href: `/service/${SERVICES.nano}`,
  },
  {
    name: SERVICES_OPTIONS[SERVICES.thermal].title,
    href: `/service/${SERVICES.thermal}`,
  },
  {
    name: SERVICES_OPTIONS[SERVICES.glass].title,
    href: `/service/${SERVICES.glass}`,
  },
  {
    name: SERVICES_OPTIONS[SERVICES.polish].title,
    href: `/service/${SERVICES.polish}`,
  },
  {
    name: SERVICES_OPTIONS[SERVICES.protect].title,
    href: `/service/${SERVICES.protect}`,
  },
]

export enum CATEGORIES {
  batteries = "batteries",
  oil = "oil",
  wheels = "wheels",
}

export const products = [
  {
    category: CATEGORIES.batteries,
    img: "/battery.png",
    name: "battery",
  },
  {
    category: CATEGORIES.oil,
    img: "/oil.png",
    name: "oil",
  },
  {
    category: CATEGORIES.wheels,
    img: "/wheel.png",
    name: "wheel",
  },
]

export const SERVICES_DESCRIPTION = {
  [SERVICES.film]: [
    <>
      <p>
        تم تصميم فيلم حماية الطلاء (PPF) خصيصًا لحماية سطح
        السيارة و الاسطح الجيل و الأسطح الأخرى ذات المتطلبات
        الجمالية. حيث يساعد الفيلم على الحماية من رقائق
        الحجر والخدوش وتلف الحشرات وبقع قطران الطريق وبقع
        السوائل ، بالإضافة إلى مقاومة ثار التجوية الخارجية.
      </p>
      <ul className="list-[circle] p-5">
        <li>
          يعتبر فيلم حماية السطح عالي الأداء مثاليًا
          للاستخدام على المواد المطلية أو غير المطلية أو
          طبقة الجل أو الألياف الزجاجية أو الأسطح الملساء
          الأخرى.
        </li>
        <li>يقطع ويثبت بسهولة.</li>
        <li>
          يحافظ على الوضوح ، ويضمن عدم التشقق مع التعرض
          للأشعة فوق البنفسجية أو رذاذ الملح.
        </li>
        <li>
          يتفوق في الظروف البيئية شديدة الحرارة والرطوبة.
        </li>
        <li>
          المنتج الموجود في المخزون متاح للتسليم الفوري
        </li>
      </ul>
    </>,
    <>
      <img src={spots} alt="car" />
      <p>
        يمكن تطبيق افلام حماية الطلاء من MEGA SHIELD على
        مناطق من جسم سيارتك حيث قد يتعرض الطلاء للخدش أو
        الجرح. *هبعتلك صوره عربيه زي دي و عليها ارقام و لما
        تقفي علي اي رقم يطلع منه الكلام مثلا او شوفي انسب
        طريقه ممكن تحقق شكل حلو و مختلف في نفس الوقت*
      </p>
      <ol>
        <li>
          1- غلاف لكامل الجسم: حماية كاملة تحافظ على قيمة
          السيارة ومظهرها اللامع والجديد.
        </li>
        <li>
          2- غطاء محرك السيارة: أحد الأسطح المطلية الأقل
          دهانًا في السيارة يحتاج إلى حماية.
        </li>
        <li>
          3- الصدام الأمامي : يحمي الدهان وبقع الحشرات.
        </li>
        <li>
          4- الرفرف : تساعد على الحماية من شظايا الحجر.
        </li>
        <li>
          5- حواف ومقابض الأبواب : تعتبر حواف ومقابض الأبواب
          مناطق معرضة للخدش.
        </li>
        <li>6- جوانب السياره : معرضة لحطام الطريق.</li>
        <li>7- المرايا الجانبية.</li>
      </ol>
    </>,
  ],
}

// const filmsOptions = [
//   "حماية الانوار الامامية",
//   "حاية مقدمة السيارة",
//   "حماية الثلث الامامي",
//   "حماية كامل السيارة لامع",
//   "حماية كامل السيارة مطفي",
// ]

export const whoAreWeContent = [
  <>
    <Reveal width="fit-content" delay={0.3}>
      <p>
        •• نحن نضع درع حماية بتقنية النانو سيراميك منذ عام
        2005 •• <br /> ميجا شيلد هي واحدة من أكبر شركات
        العناية بالسيارات في الولايات المتحدة الأمريكية ،
        لقد قمنا بتوزيع أفلام تظليل وعزل النوافذ بتقنية
        النانو سيراميك على الشركات في الأسواق المستهدفة منذ
        عام 2005.
      </p>
    </Reveal>
    <Reveal width="fit-content" delay={0.3}>
      <p>
        تلعب MEGA SHIELD دورًا مهمًا في صناعة الأفلام ، بشكل
        أساسي من خلال إنتاج فيلم حماية الطلاء ( PPF ) ،
        وأفلام تظليل و عزل النوافذ ، والأفلام الذكية ( Smart
        Films )
      </p>
    </Reveal>
  </>,
  <>
    <Reveal width="fit-content" delay={0.3}>
      <p>
        ••منذ تأسيسنا ، قمنا بتنمية قدراتنا التكنولوجية مع
        التركيز على تطوير منتجات متنوعة وأعمال تجارية جديدة.
        •• في السنوات الأخيرة ، واصلنا النمو تحت راية شركة
        موجهة نحو التكنولوجيا ، من خلال تعزيز البحث والتطوير
        المتقدم ودمج جهودنا في البحث والتصنيع والمبيعات
        لزيادة تحسين الاداء والجوده و التكلفة •• اما في
        صناعة أفلام تظليل النوافذ ، نحتفظ باستمرار بأكبر حصة
        في السوق محليًا ، ويتم تقييم منتجاتنا بدرجة عالية.
        •• ستوفر MEGA SHIELD دائمًا أعلى درجة من الراحة
        والأمان لحماية قيادتك وصحتك .
      </p>
    </Reveal>
  </>,
  <>
    <Reveal width="fit-content" delay={0.3}>
      <p>
        ان توفر MEGA SHIELD دائمًا أعلى درجة من الراحة
        والحماية والأمان على جميع الجبهات لحماية قيادتك
        وصحتك وما بعدها. الإرتقاء بمستوى العمل ضمن المعايير
        المحلية والدولية.
      </p>
    </Reveal>
    <Reveal width="fit-content" delay={0.3}>
      <ul className="list-[circle] my-3">
        <li>
          الالتزام بالمواعيد و تسليم السيارة أو المبنى
          بالوقت المحدد وبالجودة المطلوبة.
        </li>
        <li>
          تقديم بيئة عمل مثالية لرفع مستوى الإنتاجية للفرد.
        </li>
        <li>
          المحافظة على الخبرات والكفاءات المھنية والإدارية
          داخل الشركة. الرؤية
        </li>
      </ul>
    </Reveal>
    <Reveal width="fit-content" delay={0.3}>
      <p>
        نسعى دائماً للوصول لأعلى درجة حمايه بإستخدام تقنية
        النانو سيراميك و الوصول إلى أعلى درجات العزل الحراري
        و العناية بالسيارات والمباني في الشرق الاوسط
      </p>
    </Reveal>
  </>,
  <>
    <Reveal width="fit-content" delay={0.3}>
      <ul className="list-[circle] my-3">
        <li>
          توفير خدماتنا بأعلى جودة واقل سعر و الالتزام
          بالمواعيد
        </li>
        <li>
          تنوع خدماتنا و انتشارها مع توافر ضمان حقيقي علي
          مستوي الشرق الاوسط
        </li>
        <li>
          المصدقية و الاهتمام بالعملاء و تحقيق
          متطلباتهم بشكل احترافي
        </li>
      </ul>
    </Reveal>
  </>,
]
