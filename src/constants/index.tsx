import spots from "/car-spots.png"

export enum SERVICES {
  thermal = "thermal",
  film = "protect-film",
  nano = "nano",
  protect = "complete-protect",
  polish = "polish",
  glass = "glass",
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
