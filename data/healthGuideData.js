import portfolio01 from "@/images/icons/ICON-tgmf-schlaflos.png";
import portfolio02 from "@/images/icons/ICON-tgmf-energielos.png";
import portfolio03 from "@/images/icons/ICON-tgmf-traurig.png";
import portfolio04 from "@/images/icons/ICON-tgmf-traurig.png";
import portfolio05 from "@/images/icons/ICON-tgmf-traurig.png";
import portfolio06 from "@/images/icons/ICON-tgmf-traurig.png";
import portfolio07 from "@/images/icons/ICON-tgmf-traurig.png";
import portfolio08 from "@/images/icons/ICON-tgmf-traurig.png";

export const Symptoms = [
  {
    id: "schlaflos",

    // 🔹 UI (Portfolio)
    //portfolio: {
     // title: "Melatonin",
     // image: portfolio01,
      //categories: ["fruehstueck"],
      //url: "/portfolio-details"
    //},


    image: portfolio01,
    label: "Ich kann nicht schlafen",
    hormoneId: "melatonin"
  },
  {
    id: "energielos",
    image: portfolio02,
    label: "Ich fühl mich energielos",
    hormoneId: "dopamin"
    
  },

  {
    id: "traurig",
    image: portfolio03,
    label: "Ich fühl mich mental schlecht",
    hormoneId: "serotonien"
    
  },

  {
    id: "konzentration",
    image: portfolio04,
    label: "Ich möchte meine Konzentartion verbessern",
    hormoneId: "serotonien"
    
  },

  {
    id: "neurodivi",
    image: portfolio05,
    label: "ch bin ein Divi",
    hormoneId: "dopamin"
    
  },

  {
    id: "gutelaune",
    image: portfolio06,
    label: "Ich hätte gerne gute Laune",
    hormoneId: "serotonin"
    
  },

  {
    id: "wochenbett",
    image: portfolio07,
    label: "Ich fühl mich mental schlecht",
    hormoneId: "serotonin"
    
  },

  {
    id: "gutelaune",
    image: portfolio08,
    label: "Ich hätte gerne gute Laune",
    hormoneId: "serotonin"
    
  },

];

export const Hormones = [
  
  {
    id: "dopamin",
    name: "Dopamin",
    nutrientIds: ["tyrosin"]
  },

  {
    id: "serotonin",
    name: "Serotonin",
    nutrientIds: ["tyrosin"]
  },

  {
    id: "noradrenalin",
    name: "Noradrenalin",
    nutrientIds: ["tyrosin"]
  },

  {
    id: "melatonin",
    name: "Melatonin",
    nutrientIds: ["tryptophan", "magnesium"]
  },

  {
    id: "Acetylcholin",
    name: "Melatonin",
    nutrientIds: ["tryptophan", "magnesium"]
  }

];

