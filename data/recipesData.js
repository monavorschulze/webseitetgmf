
import portfolio01 from "@/images/portfolio/Bild-landingpage-food-yoghurt.jpg";
import portfolio02 from "@/images/portfolio/Bild-landingpage-food-spiegelei.jpg";
import portfolio03 from "@/images/portfolio/Bild-landingpage-food-suppe.jpg";
import portfolio04 from "@/images/portfolio/Bild-landingpage-food-antipasti.jpg";
import portfolio05 from "@/images/portfolio/Bild-landingpage-food-pfannkuchen.jpg";
import portfolio06 from "@/images/portfolio/Bild-landingpage-food-salat-2.jpg";

export const Recipes = [
  {
    id: "yoghurt",

    // 🔹 UI (Portfolio)
    portfolio: {
      title: "Yoghurt",
      image: portfolio01,
      categories: ["fruehstueck"],
      url: "/portfolio-details"
    },

    // 🔹 Health-Logik
    nutrientIds: ["tryptophan"],
    hormoneIds: ["melatonin"],
    symptomIds: ["sleep"],
    mealTypes: ["fruehstueck"]
  },

  {
    id: "spiegelei",
    portfolio: {
      title: "Spiegelei",
      image: portfolio02,
      categories: ["fruehstueck"],
      url: "/portfolio-details"
    },
    nutrientIds: ["tyrosin"],
    hormoneIds: ["dopamin"],
    symptomIds: ["energy"],
    mealTypes: ["fruehstueck"]
  },

  {
    id: "suppe",
    portfolio: {
      title: "Suppe",
      image: portfolio03,
      categories: ["mittag"],
      url: "/portfolio-details"
    },
    nutrientIds: ["magnesium"],
    hormoneIds: ["melatonin"],
    symptomIds: ["sleep"],
    mealTypes: ["mittag"]
  },

  {
    id: "pfannkuchen",
    portfolio: {
      title: "Pfannkuchen",
      image: portfolio05,
      categories: ["fruehstueck"],
      url: "/portfolio-details"
    },
    nutrientIds: ["tryptophan", "magnesium"],
    hormoneIds: ["melatonin"],
    symptomIds: ["sleep"],
    mealTypes: ["fruehstueck"]
  }
];