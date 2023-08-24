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
    options: [
      "حماية الانوار الامامية",
      "حاية مقدمة السيارة",
      "حماية الثلث الامامي",
      "حماية كامل السيارة لامع",
      "حماية كامل السيارة مطفي",
    ],
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
