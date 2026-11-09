import logoLight from "@/images/Logo-tgmf-web-weiss.png";
import logoDark from "@/images/logo2.png";
import logoSmall from "@/images/Logo-tgmf-web-weiss.png";

export const LogoImage = {
  light: logoLight,
  dark: logoDark,
  small: logoSmall,
};

export const NavLinks = [
  
  {
    name: "Hormon-Rechner",
    url: "/service",
   
  },

  {
    name: "About us",
    url: "/about"
  },
 
  {
    name:"Rezepte",
    url: "/portfolio",
    subItems: [
    
      {
        name: "Portfolio Details",
        url: "/portfolio-details"
      }
    ]
  },
  /*
  {
  name: "Kurse",
  url: "/kurse",
  subItems: [
  
    {
      name: "Grafik Design",
      url: "/service-details"
    },

    {
      name: "Web Design",
      url: "/service-details"
    },

    {
      name: "Fotografie",
      url: "/service-details"
    }

  ]
},
{
  name: "Events",
  url: "/events",
  
},*/

  {
    name: "Blog",
    url: "/blog",
    subItems: [
    
      {
        name: "Blog Details",
        url: "/blog-single"
      }
    ]
  },

  
  {
    name: "Contact",
    url: "/contact"
  }
];

import sliderOne01 from "@/images/slider/Bild-landingpage-welcom.jpg";
import sliderOne02 from "@/images/slider/Bild-landingpage-fuer-alle.jpg";
import sliderOne03 from "@/images/slider/Bild-landingpage-gesunde-Gastronomie-Header-Bild_1920x1080.jpg";
import sliderOne04 from "@/images/slider/Bild-landingpage-freunde.jpg";
import sliderOne05 from "@/images/slider/Bild-landingpage-work-life-Header-Bild_1920x1080.jpg";
import sliderOne06 from "@/images/slider/Bild-landingpage-foodlovers.jpg";
import sliderOne07 from "@/images/slider/Bild-landingpage-fitti.jpg";
import sliderOne08 from "@/images/slider/Bild-landingpage-healty.jpg";
import sliderOne09 from "@/images/slider/Bild-landingpage-neurodivi.jpg";
import sliderOne10 from "@/images/slider/Bild-landingpage-kurse-Header-Bild_1920x1080.jpg";


export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "WELCOME TO THE",
    title: "GOOD \n MIND FOOD.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne02,
    subTitle: "Für",
    title: "Alle",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne03,
    subTitle: "Für",
    title: "Genießer.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne04,
    subTitle: "Für",
    title: "Freunde.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne05,
    subTitle: "Für",
    title: "Familien.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne06,
    subTitle: "Für",
    title: "Foodlovers.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne07,
    subTitle: "Für",
    title: "Fittis.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne08,
    subTitle: "Für",
    title: "Healthis.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },

  {
    image: sliderOne09,
    subTitle: "Für",
    title: "Neurodivis.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  },


  {
    image: sliderOne10,
    subTitle: "Für",
    title: " Euch.",
    button: {
      label: "ANMELDUNG",
      url: "/about"
    }
  }
  
];

import sliderTwo01 from "@/images/slider/Bild-landingpage-emotion-gemeinsam-Header-Bild_1920x1080.jpg";
import sliderTwo02 from "@/images/slider/Bild-landingpage-gesunde-Gastronomie-Header-Bild_1920x1080.jpg";
import sliderTwo03 from "@/images/slider/Bild-landingpage-kurse-Header-Bild_1920x1080.jpg";

export const SliderTwoData = [
  {
    image: sliderTwo01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderTwo02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderTwo03,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "DIGITAL\nMARKETING\nAGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

import sliderThree01 from "@/images/slider/Bild-landingpage-emotion-gemeinsam-Header-Bild_1920x1080.jpg";
import sliderThree02 from "@/images/slider/Bild-landingpage-gesunde-Gastronomie-Header-Bild_1920x1080.jpg";

export const SliderThreeData = [
  {
    image: sliderThree01,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  },
  {
    image: sliderThree02,
    subTitle: "WELCOME TO MEIPALY AGENCY",
    title: "SMART WEB\n DESIGN AGENCY.",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }
  }
];

export const ContactInfosBlock = {
  subTitle: "Finde weitere Places",
  title: "Unsere Places",
  description:
    "Wir möchten nicht nur in Deutschland ein Angebot schaffen \n sondern überall wo es schön ist in Europa."
};

export const ContactInfosList = [
  {
    title: "austin",
    infos: [
      {
        name: "22 Texas West Hills"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  },
  {
    title: "boston",
    infos: [
      {
        name: "5 Federal Street Boston"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  },
  {
    title: "new york",
    infos: [
      {
        name: "8th Broklyn New York"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  },
  {
    title: "baltimore",
    infos: [
      {
        name: "3 Lombabr 50 baltimore"
      },
      {
        name: "needhelp@meipaly.com"
      },
      {
        name: "666 888 000"
      }
    ]
  }
];

export const ContactFormTitle = {
  subTitle: "Du hast eine Frage oder ein Anliegen",
  title: "Schreib uns gerne",
  description:
    "Kontaktier uns gerne per Mail oder auch \n per Telefon "
};

import blogImage1 from "@/images/blog/Bild-landingpage-Blog-Post-370x305-V-1.jpg";
import blogImage2 from "@/images/blog/Bild-landingpage-Blog-Post-370x305-V-2.jpg";
import blogImage3 from "@/images/blog/Bild-landingpage-Blog-Post-370x305-V-3.jpg";
import blogImage4 from "@/images/blog/4.jpg";
import blogImage5 from "@/images/blog/5.jpg";
import blogImage6 from "@/images/blog/6.jpg";

export const BlogData = [
  {
    title: "Wo kommen unsere Blumen her? Lernt Laura kennen.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1
  },
  {
    title: "Interview mit CEO Lennart",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Marie, dass Cafe Girl hinter der Theke",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

export const EventData = [
  {
    title: "Konzert",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage1
  },
  {
    title: "Konzert",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Marie, dass Cafe Girl hinter der Theke",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];


import blogImageTwo1 from "@/images/blog/14.jpg";
import blogImageTwo2 from "@/images/blog/15.jpg";

export const BlogTwoData = [
  {
    title:
      "Dynamically procrastinate unique vortals with global best practices.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo1
  },
  {
    title: "Become the best sale marketer",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage2
  },
  {
    title: "Introducing latest mopaly features",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage3
  },
  {
    title: "a deep understanding of our audience",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage4
  },
  {
    title: "We build and activate brands insight",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage5
  },
  {
    title:
      "Holisticly conceptualize backend scenarios via accurate technologies.",
    date: "20 nov",
    url: "/blog-single",
    image: blogImageTwo2
  },
  {
    title: "experiences that connect with people",
    date: "20 nov",
    url: "/blog-single",
    image: blogImage6
  }
];

export const BlogHomeSection = {
  subTitle: " Cool Leute & Storys",
  title: "Unsere Blog posts",
  text:
    "Hier erfahrt ihr mehr über die Personen mit denen wir zusammenarbeiten. Spannende Interviews, Veranstaltungen und coole Leute. Ihr möchtet mehr über die Community erfahren? Dann viel Spaß bei unseren Blog-Artikeln"
};

import blogS1 from "@/images/blog/Bild-landingpage-Blog-Post-370x305-V-1.jpg";
import blogS2 from "@/images/blog/Bild-landingpage-Blog-Post-370x305-V-2.jpg";
import blogS3 from "@/images/blog/Bild-landingpage-Blog-Post-370x305-V-3.jpg";

export const BlogSidebarPost = [
  {
    title: "Wo kommen die Blumen her? Lernt Anastasia kennen",
    image: blogS1,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS2,
    url: "/blog-single"
  },
  {
    title: "basic rules of running web agency",
    image: blogS3,
    url: "/blog-single"
  }
];



export const EventsSidebarPost = [
  {
    title: "Konzert",
    image: blogS1,
    url: "/blog-single"
  },
  {
    title: "Slam",
    image: blogS2,
    url: "/blog-single"
  },
  {
    title: "Leseung",
    image: blogS3,
    url: "/blog-single"
  }
];




import commentImage1 from "@/images/blog/9.jpg";
import commentImage2 from "@/images/blog/10.jpg";

export const BlogComments = [
  {
    image: commentImage1,
    name: "David Martin",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  },
  {
    image: commentImage2,
    name: "Jessica Brown",
    data: "20 Nov, 2018 - 4:00 pm",
    content:
      "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et not the aliquet."
  }
];

import portfolio01 from "@/images/portfolio/Bild-landingpage-food-yoghurt.jpg";
import portfolio02 from "@/images/portfolio/Bild-landingpage-food-spiegelei.jpg";
import portfolio03 from "@/images/portfolio/Bild-landingpage-food-suppe.jpg";
import portfolio04 from "@/images/portfolio/Bild-landingpage-food-antipasti.jpg";
import portfolio05 from "@/images/portfolio/Bild-landingpage-food-pfannkuchen.jpg";
import portfolio06 from "@/images/portfolio/Bild-landingpage-food-salat-2.jpg";


export const PortfolioData = [
  {
    id: 1,
    title: "Yoghurt",
    categories: ["all", "fruehstueck"],
    image: portfolio01,
    url: "/portfolio-details"
  },
  {
    id:2,
    title: "Spiegelei",
    categories: ["all", "fruehstueck"],
    image: portfolio02,
    url: "/portfolio-details"
  },
  {
    id: 3,
    title: "Suppe",
    categories: ["all", "mittag"],
    image: portfolio03,
    url: "/portfolio-details"
  },
  {
    id: 4,
    title: "Antipasti",
    categories: ["all", "mittag"],
    image: portfolio04,
    url: "/portfolio-details"
  },
  {
    id: 5,
    title: "Pfannkuchen",
    categories: ["all", "mittag"],
    image: portfolio05,
    url: "/portfolio-details"
  },
  {
    id: 6,
    title: "Salat",
    categories: ["all", "graphic"],
    image: portfolio06,
    url: "/portfolio-details"
  }
];

export const PortfolioFilters = [
  { name: "all" },
  { name: "graphic" },
  { name: "branding" },
  { name: "marketing" },
  { name: "logos" },
  { name: "fruehstueck" },
  { name: "mittag" }
];

import portfolioD01 from "@/images/essen/Bild-essen-yoghurt-770x532.jpg";
import portfolioD02 from "@/images/essen/Bild-essen-produzent-770x532.jpg";

export const PortfolioDetailsData = {
  gallery: [{ image: portfolioD01 }, { image: portfolioD02 }],
  title: "Yoghurt - Was steckt drin",
  text:
    "Zutaten 1 Liter frische Vollmilch  2 Esslöffel Naturjoghurt zum Impfen  1 Topf 1 Thermometer für Flüssigkeiten, z.B. Tee-Thermometer Gefäße zum Abfüllen des Joghurts (z.B. Einmachgläser) Zubereitung Milch erhitzen (nicht kochen) und auf genau 45 Grad abkühlen lassen (Thermometer benutzen!) Joghurt in die Milch geben und verrühren Milch in saubere Gefäße füllen In den Backofen stellen und diesen möglichst exakt auf 42-45 Grad einstellen (Thermometer zu Hilfe nehmen) und für sechs Stunden bei dieser Temperatur ruhen lassen Der Joghurt ist nun gebrauchsfertig (er ist u0022stichfestu0022) – kalt stellen und innerhalb von einer Woche verbrauchen",
  client: "Hellweg Molkerei",
  categories: [
    {
      name: "Obst",
      url: "#"
    },
    {
      name: "Vegetarisch",
      url: "#"
    }
  ],

  socials: [
    {
      name: "Facebook",
      url: "#"
    },
    {
      name: "Twitter",
      url: "#"
    },
    {
      name: "Linkedin",
      url: "#"
    }
  ]
};

export const ServicePostData = [
  {
    title:"Tagestarif",
    text:
      "- 24h Stunden \n - eigener Schreibtisch (höhenverstellbar) \n - ergonmoischer Stuhl \n- eigener Desktop - Glasfaserleitung - Zugang zum Cafe - Nutzung des Meeting-Raumes",
    iconName: "icon-tagestarif",
    price: "9,00",
    url: "/service-details",
    button: {
      label: "DISCOVER MORE",
      url: "/about"
    }

  },
  {
    title:"Wochentarif",
    text:
      "1 Woche - eigener Schreibtisch (höhen verstellbar) - ergonmoischer Stuhl - eigener Desktop Glasfaserleitung - Zugang zum Cafe - Nutzung des Meeting-Raumes 1 gratis Kaffee",
    iconName: "icon-wochentarif",
    price:"50,00€",
    url: "/service-details"
  },
  {
    title: "Monatstarif",
    text:
      "- 1 Monat - eigener Schreibtisch (höhen verstellbar) - ergonmoischer Stuhl - eigener Desktop Glasfaserleitung - Zugang zum Cafe - Nutzung des Meeting-Raumes Kaffeeflat (Cafe) * - 1 gratis Essen (Cafe)",
    iconName: "icon-monatstarif",
    price:"200,00€",
    url: "/service-details"
  }
];

export const ServicePostDataKurse = [
  {
    title:"Grafik Design",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,",
    iconName: "icon-kurs-grafik",
    price: "9,00",
    url: "/service-details",

  },
  {
    title:"Webdesign",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ",
    iconName: "icon-kurs-coding",
    price:"50,00€",
    url: "/service-details"
  },
  {
    title: "Fotografie",
    text:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, ",
    iconName: "icon-kurs-fotografie",
    price:"200,00€",
    url: "/service-details"
  }
];

export const ServiceHomeTwoData = {
  subTitle: "welcome to smart meipaly web agency",
  title: "We design digital products that \n help grow businesses.",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServiceHomeThreeData = {
  subTitle: "Services we are offering",
  title: "Our Services",
  text:
    "We are committed to providing our customers with exceptional service while\n offering our employees the best training."
};

export const ServicePostTwoData = {
  sectionContent: {
    title: "Bring Hormone ins\n Gleichgewicht mit Ernährung,\n die dir guttut.",
    subTitle: "Deinen Körper besser verstehen :",
    text:
      "Wir wollen dir eine Basis für mehr Stabilität in deinem Körper geben, \n damit du deine Bedürfnisse besser analysieren kannst\n und deine Hormone durch Ernährung ins Gleichgewicht bringst."
  },
  posts: [
    {
      title: "Book place",
      iconName: "icon-book",
      url: "/service-details"
    },
    {
      title: "Events",
      iconName: "icon-events",
      url: "/service-details"
    },
    {
      title: "Kurse",
      iconName: "icon-kurse",
      url: "/service-details"
    },
    {
      title: "Essen",
      iconName: "icon-gesundes-essen",
      url: "/service-details"
    },
  ]
};

import serviceOne01 from "@/images/book/Bild-Book-your-place-kurse-370x336.jpg";
import serviceOne02 from "@/images/book/Bild-Book-your-place-events-370x336.jpg";
import serviceOne03 from "@/images/book/Bild-Book-your-place-gastronomie-370x336.jpg";
import serviceOne04 from "@/images/book/Bild-Book-your-place-kinderbetreuung-370x336.jpg";

export const ServicePostThreeData = {
  sectionContent: {
    title: "Was bieten wir euch noch",
    subTitle: "Unsere Leistungen",
    text:
      "Wir verstehen uns nicht als reine Coworkingspace, denn wir bieten euch eine Gastro, Events, Kurse und Betreuung für eure Kinder"
  },
  posts: [

    {
      title: "Gastronomie",
      image: serviceOne03,
      url: "/service-details"
    },
    
    {
      title: "Events",
      image: serviceOne02,
      url: "/service-details"
    },

    {
      title: "Kurse",
      image: serviceOne01,
      url: "/service-details"
    },

    {
      title: "Kinderbetreuung",
      image: serviceOne04,
      url: "/service-details"
    }
  ]
};



export const FunfactData = [
  {
    title:"Gerichte",
    countNumber: 705
  },
  {
    title: "Kurse",
    countNumber: 480
  },
  {
    title: "Cups of Coffee",
    countNumber: 626
  },
  {
    title: "Happy People",
    countNumber: 774
  }
];

import trustClient01 from "@/images/home_1/Bild-landingpage-it-kurse.jpg";

export const TrustClientData = {
  image: trustClient01,
  title: "Gemeinsam Ziele erreichen",
  text:
    "Jeder möchte in seinem Leben vorankommen und die eigenen Ziele erreichen. Wie schaffen wir das?Ein Erfolgsfaktor ist sicherlich das lebenslange Lernen.Bei uns bekommt der Coworker den nötigen Input, der ihn weiterbringt. Das bezieht sich sowohl auf persönliche als auch berufliche Aspekte.Es finden Online- und Präsenzkurse statt.Wir bieten in unseren Räumlichkeiten diverse Weiterbildungs- möglichkeiten an.Unter unserem Motto Sharing is Caring",
  url: "/about"
};

import ClientCarousel01 from "@/images/client/Logo_Hackerschool.png";
import ClientCarousel02 from "@/images/client/2.png";
import ClientCarousel03 from "@/images/client/3.png";
import ClientCarousel04 from "@/images/client/4.png";
import ClientCarousel05 from "@/images/client/5.png";

export const ClientCarouselData = {
  sectionContent: {
    title: "Zusammenarbeit",
    subTitle: "Unsere Partner",
    text:
      "Wir glauben daran, dass ein respektvoller Umgang die Basis für eine gute Zusammenarbeit ist.\n "
  },
  items: [
    {
      url: "#",
      image: ClientCarousel01
    },
    {
      url: "#",
      image: ClientCarousel02
    },
    {
      url: "#",
      image: ClientCarousel03
    },
    {
      url: "#",
      image: ClientCarousel04
    },
    {
      url: "#",
      image: ClientCarousel05
    }
  ]
};

import aboutOne01 from "@/images/about/Bild-about-us-leitbild-vision-530x464.jpg";
import aboutOne02 from "@/images/about/2.jpg";

export const AboutOneData = {
  sectionContent: {
    title: "Unser Leitbild unser Vision",
    subTitle: "Das sind wir",
    text: " • Wir wollen etwas Gutes schaffen. \n • Wir wollen einen Platz schaffen, an dem sich Menschen wohlfühlen.\n • Es wird ein Ort bzw. eine Community entstehen, wo offene, kreative und innovative Menschen zusammenkommen, miteinander arbeiten und sich austauschen können.\n • „The good Places“ steht für das neue Arbeiten; für Möglichkeiten und Chancen, die sich aus einem innovativen Kollektiv ergeben.\n • Wir wollen gewährleisten, dass die Gerichte in unserer Gastronomie aus regionalen, Bio-zertifizierten Produkten hergestellt werden.\n • Wir wollen für Mütter und Väter einen Ort schaffen, an dem sich die Arbeit mit der Kinderbetreuung vereinen lässt.\n • Wir glauben daran, dass stetes Lernen die Menschen in ihrer persönlichen und beruf- lichen Entwicklung nach vorne bringt.\n • Wir glauben daran, dass Wissen zu teilen der Schlüssel ist, um andere und sich selbst weiterzuentwickeln.\n • Wir glauben daran, dass ein respektvoller Umgang die Basis für eine gute Zusammen- arbeit ist.\n • Wir glauben daran, dass wir zusammen mehr erreichen können.\n • Aber am allerwichtigsten ist uns, dass es den Menschen gut geht."
  },
  
  
  
  gallery: [aboutOne01, aboutOne02],
  counter: {
    title: "Wir starten",
    number: 2023
  }
};

import team01 from "@/images/team/1.jpg";
import team02 from "@/images/team/2.jpg";
import team03 from "@/images/team/3.jpg";
import team04 from "@/images/team/4.jpg";
import team05 from "@/images/team/5.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "Das sind Wir",
    subTitle: "meet the team",
    text:
      "Wir freuen uns auf euch und unterstützen euch gerne."
  },
  posts: [
    {
      image: team01,
      name: "Herman Fisher",
      designation: "General Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team02,
      name: "Charlie Kennedy",
      designation: "Brand Designer",
      url: "",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team03,
      name: "Helena Adkins",
      designation: "Seinor Designer",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team04,
      name: "Virginia Farmer",
      designation: "Marketing Manager",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    },
    {
      image: team05,
      name: "Philip Hansen",
      designation: "Co Founder",
      url: "#",
      socials: [
        {
          name: "Facebook",
          url: "#"
        },
        {
          name: "Twitter",
          url: "#"
        },
        {
          name: "Linkedin",
          url: "#"
        }
      ]
    }
  ]
};

import video01 from "@/images/about/3.jpg";

export const VideoOneData = {
  sectionContent: {
    title: "Schau mal rein",
    subTitle: "Das sind wir",
    text:
      "Du möchtest einen kleinen Blick hinter die Kulissen werfen. Schau dir das Video an"
  },
  video: {
    image: video01,
    ID: "y2Eqx6ys1hQ",
    title: "Watch Video"
  }
};

export const SubscribeFormData = {
  sectionContent: {
    title: "Updates zu unseren Events",
    subTitle: "Infos",
    text: 
      "Du möchtest Infos über unsere Events erhalten, dann melde dich gerne an",
  },
};

import testimonial01 from "@/images/home_1/t1.jpg";
import testimonial02 from "@/images/home_1/t2.jpg";
import testimonial03 from "@/images/home_1/t3.jpg";

export const TestimonialsOneData = {
  sectionContent: {
    subTitle: "Empfehlungen",
    title: "happy customers"
  },
  posts: [
    {
      name: "Cecilia Colon",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Chase Hanson",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Mittie Flores",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Carrie Sims",
      designation: "Director",
      image: testimonial01,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Anne Stone",
      designation: "CO Founder",
      image: testimonial02,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    },
    {
      name: "Hunter Brewer",
      designation: "Manager",
      image: testimonial03,
      content:
        "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch. There are many variations of passages of available, but the majority have suffered alteration in some form by injected hum",
      date: "25 nov, 2018"
    }
  ]
};

import featureTab01 from "@/images/about/Bild-about-us-Dienstleistung-coworking-470x364.jpg";
import featureTab02 from "@/images/about/Bild-about-us-Dienstleistung-cafe-470x364.jpg";
import featureTab03 from "@/images/about/Bild-about-us-Dienstleistung-events-470x364.jpg";

export const FeatureTabData = {
  sectionContent: {
    title: "Das bieten wir euch",
    subTitle: "Für euch",
    text:
      "Nachfolgend findet ihr ein paar unserer Angebote"
  },
  posts: [
    {
      title: "Coworking",
      content:
        "Wir verbringen etwa ein Drittel unserer Lebenszeit auf der Arbeit. Die meisten „Arbeitnehmer“ werden dabei dieses Problem kennen: Der Arbeitsplatz ist oder war nicht immer auf die individuellen Bedürfnisse zugeschnitten.Wir möchten das jetzt besser machen. ",
      image: featureTab01,
      lists: [
        {
          item: "Gesunden Arbeitsplatz ergonomischen Stuhl und höhen verstellbaren Tisch"
        },
        {
          item: "Immer das bestes WLAN der Region"
        },
        {
          item: "Konferenzräume"
        },
        {
          item: "Weiterbildungsprogramm Kurse"
        },
        {
          item: "Küche"
        },
        {
          item: "Betreuungsangebot für berufstätige Eltern"
        }
      ]
    },
    {
      title: "Cafe & Restaurant",
      content:
        "Wir möchten gesundes Essen mit gesundem Arbeiten verei- nen. Aus diesem Grund haben wir bei unseren „Places“ immer eine nachhaltige und gesunde Gastronomie angeschlossen.",
      image: featureTab02,
      lists: [
        {
          item: "Ausschließlich Gerichte hergestellt aus Regionalen Produkten"
        },
        {
          item: "Bio zertifizierte Produkte"
        },
        {
          item: "Sassionale Karte, abgestimmt auf den Ertrag der Bauern"
        },
        {
          item: "Gesunde Rezepte ausgearbeitet mit einer Ernährungsexpertin"
        },
        {
          item: "Gut fürs Tierwohl"
        },
        {
          item: "Ort zum wohlfühlen"
        }
      ]
    },
    {
      title: "Kurse",
      content:
        "Jeder möchte in seinem Leben vorankommen und die eigenen Ziele erreichen. Wie schaffen wir das? Ein Erfolgsfaktor ist sicherlich das lebenslange Lernen. Bei uns bekommt der Coworker den nötigen Input, der ihn weiterbringt. Das bezieht sich sowohl auf persönliche als auch berufliche Aspekte.Es finden Online- und Präsenzkurse statt. Wir bieten in unseren Räumlichkeiten diverse Weiterbildungs- möglichkeiten an.",
      image: featureTab03,
      lists: [
        {
          item: "IT Kurse & Grafik Kurse"
        },
        {
          item: "Gestalte dein eigenes Kurs-Programm"
        },
        {
          item: "Deep Dive Lessons"
        },
        {
          item: "Gastvorträge von namenhaften Personen aus der Industrie"
        },
        {
          item: "Lesungen, Poetry Slams"
        },
       
      ]
    },

    {
      title: "Events",
      content:
        "Jeder möchte in seinem Leben vorankommen und die eigenen Ziele erreichen. Wie schaffen wir das? Ein Erfolgsfaktor ist sicherlich das lebenslange Lernen. Bei uns bekommt der Coworker den nötigen Input, der ihn weiterbringt. Das bezieht sich sowohl auf persönliche als auch berufliche Aspekte.Es finden Online- und Präsenzkurse statt. Wir bieten in unseren Räumlichkeiten diverse Weiterbildungs- möglichkeiten an.",
      image: featureTab03,
      lists: [
        {
          item: "IT Kurse & Grafik Kurse"
        },
        {
          item: "Gestalte dein eigenes Kurs-Programm"
        },
        {
          item: "Deep Dive Lessons"
        },
        {
          item: "Gastvorträge von namenhaften Personen aus der Industrie"
        },
        {
          item: "Lesungen, Poetry Slams"
        },
       
      ]
    },

    {
      title: "Kinderbetreung",
      content:
        "Jeder möchte in seinem Leben vorankommen und die eigenen Ziele erreichen. Wie schaffen wir das? Ein Erfolgsfaktor ist sicherlich das lebenslange Lernen. Bei uns bekommt der Coworker den nötigen Input, der ihn weiterbringt. Das bezieht sich sowohl auf persönliche als auch berufliche Aspekte.Es finden Online- und Präsenzkurse statt. Wir bieten in unseren Räumlichkeiten diverse Weiterbildungs- möglichkeiten an.",
      image: featureTab03,
      lists: [
        {
          item: "IT Kurse & Grafik Kurse"
        },
        {
          item: "Gestalte dein eigenes Kurs-Programm"
        },
        {
          item: "Deep Dive Lessons"
        },
        {
          item: "Gastvorträge von namenhaften Personen aus der Industrie"
        },
        {
          item: "Lesungen, Poetry Slams"
        },
       
      ]
    },

    {
      title: "Community",
      content:
        "Jeder möchte in seinem Leben vorankommen und die eigenen Ziele erreichen. Wie schaffen wir das? Ein Erfolgsfaktor ist sicherlich das lebenslange Lernen. Bei uns bekommt der Coworker den nötigen Input, der ihn weiterbringt. Das bezieht sich sowohl auf persönliche als auch berufliche Aspekte.Es finden Online- und Präsenzkurse statt. Wir bieten in unseren Räumlichkeiten diverse Weiterbildungs- möglichkeiten an.",
      image: featureTab03,
      lists: [
        {
          item: "IT Kurse & Grafik Kurse"
        },
        {
          item: "Gestalte dein eigenes Kurs-Programm"
        },
        {
          item: "Deep Dive Lessons"
        },
        {
          item: "Gastvorträge von namenhaften Personen aus der Industrie"
        },
        {
          item: "Lesungen, Poetry Slams"
        },
       
      ]
    }
  ]
};

export const ParallaxOneData = {
  
  title: "Dein zweites Zuhause",
  /*specialText: "They’re done by a team of people.",
  text:
    "We are committed to providing our customers with exceptional service while \n offering our employees the best training."
    */
   
  };

export const PortfolioHomeData = {
  sectionContent: {
    title:"Unsere Gerichte",
    subTitle: "Sneak a Peek",
    text:
      "Hier findest du eine kleine Auswahl unserer aktuellen Gerichte. Unsere Gerichte werden auf Basis der sesionallen regionalen Produkte zusammengestellt. Für eine nachhaltige und gesunde Gastro"
  }
};

import video02 from "@/images/home_1/3.jpg";

export const VideoTwoData = {
  sectionContent: {
    title: "Schau rein, \n wenn du Lust hast",
    subTitle: "Unser Place",
    text:
      "Hier Kannst du dir unseren Place genauer anschauen. Du möchtest dir im Vorfeld die Lokation anschauen, kein Problem > Klick auf unser 3D Video"
  },
  video: {
    title: "Watch Video",
    ID: "y2Eqx6ys1hQ",
    image: video02
  }
};

import aboutTwo01 from "@/images/home_1/Bild-landingpage-einleitung-community.jpg";



export const AboutTwoData = {
  sectionContent: {
    title: "Community\n  Cafe\n Arbeitsplatz\n Kinderbetreuung",
    subTitle: "Was bieten wir euch",
    text:
      "Zusammen arbeiten, zusammen Spaß haben, zusammen essen"
  },
  button: {
    label: "weiterlesen",
    url: "#"
  },
  image: aboutTwo01
};

import featureTwo01 from "@/images/home_1/5.jpg";

export const FeatureTwoData = {
  sectionContent: {
    title: "real experience",
    subTitle: "our core features",
    text:
      " We are committed to providing our customers with exceptional service while offering our employees the best training. "
  },
  posts: [
    {
      title: "No Coding Skills Require",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "Online Documentation",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    },
    {
      title: "SEO Optimized",
      text:
        "There are many variations of passages of lorem ipsum available, but the majority have suffered."
    }
  ],
  image: {
    text: "Total design freedom \n for everyone.",
    path: featureTwo01
  }
};

export const CallToActionTwoData = [
  {
    label: "View our Recent Work",
    url: "/portfolio"
  },
  {
    label: "Reqeust a free quote",
    url: "/contact"
  }
];
