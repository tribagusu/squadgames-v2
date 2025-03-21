import { NavMenuItem, ProductNavMenuItem } from "@/types/nav.types";

export const navMenuConfigData: NavMenuItem[] = [
  {
    title: "Home",
    href: "/",
    blank: false,
    arrow: false,
    products: [],
  },
  {
    title: "Product",
    href: "/product",
    blank: false,
    arrow: true,
    products: [
      {
        title: "Softskill Training",
        href: "/softskills-training-with-experiential-learning-approach",
      },
      {
        title: "In-Venue Team Building",
        href: "/in-venue-team-building-event",
      },
      {
        title: "Outing Specials",
        href: "/outing-specials",
      },
      {
        title: "Corporate Event",
        href: "/corporate-event",
      },
      {
        title: "Family Gathering",
        href: "/family-gathering",
      },
      {
        title: "Retirement Preparation",
        href: "/retirement-preparation-program",
      },
    ],
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    blank: false,
    arrow: false,
    products: [],
  },
  {
    title: "Gallery",
    href: "/gallery",
    blank: false,
    arrow: false,
    products: [],
  },
  {
    title: "Contact",
    href: "/contact",
    blank: false,
    arrow: false,
    products: [],
  },
];

export const productNavMenuConfigData: ProductNavMenuItem = {
  "Softskill Training": {
    title: "Softskills Training",
    desc: "Kami tidak hanya materi in-class, kami memberikan Anda untuk belajar melalui pengalaman nyata. Kami yakin, pengalaman langsung adalah cara terbaik untuk memperkuat keterampilan softskills.",
    href: "/softskills-training-with-experiential-learning-approach",
  },
  "In-Venue Team Building": {
    title: "In-Venue Team Building Event",
    desc: "Kami menyelenggarakan acara di berbagai lokasi menarik di dengen venue yang menarik. Kami akan membantu Anda mengatur acara yang memukau dan berkesan.",
    href: "/in-venue-team-building-event",
  },
  "Outing Specials": {
    title: "Outing Specials",
    desc: "Anda ingin mengadakan acara tim di kota tertentu? Tidak masalah! Kami akan membawa pengalaman pembelajaran ke kota yang Anda inginkan.",
    href: "/outing-specials",
  },
  "Corporate Event": {
    title: "Corporate Event",
    desc: "Untuk perusahaan yang ingin menyelenggarakan event perusahaan,seperti Corporate Gathering, Perayaan Ulang Tahun, Yearly Meeting. Dengan sentuhan kreatif kami, acara akan sejalan dengan tujuan perusahaan Anda.",
    href: "/corporate-event",
  },
  "Family Gathering": {
    title: "Family Gathering",
    desc: "Buatlah pertemuan keluarga Anda menjadi momen istimewa dengan aktivitas yang menghibur dan memperkuat hubungan keluarga.",
    href: "/family-gathering",
  },
  "Retirement Preparation": {
    title: "Retirement Preparation",
    desc: "Kami mengerti betapa pentingnya persiapan pensiun. Kami akan membantu Anda mempersiapkan pensiun karyawan perusahaan Anda untuk memasuki masa pensiun dengan percaya diri dan kebahagiaan.",
    href: "/retirement-preparation-program",
  },
};
