export const translations = {
  en: {
    home: "Home",
    about: "About",
    admissions: "Admissions",
    programs: "Programs",
    campusLife: "Campus Life",
    gallery: "Gallery",
    contact: "Contact",
    applyNow: "Apply Now",
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    admissions: "Admissions",
    programs: "Programmes",
    campusLife: "Vie du campus",
    gallery: "Galerie",
    contact: "Contact",
    applyNow: "Postuler maintenant",
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    admissions: "Admisiones",
    programs: "Programas",
    campusLife: "Vida del campus",
    gallery: "Galería",
    contact: "Contacto",
    applyNow: "Aplicar ahora",
  },
  pt: {
    home: "Início",
    about: "Sobre",
    admissions: "Admissões",
    programs: "Programas",
    campusLife: "Vida no campus",
    gallery: "Galeria",
    contact: "Contato",
    applyNow: "Candidate-se agora",
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["en"];