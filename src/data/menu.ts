import type { ImageMetadata } from "astro";
import baoImage from "../assets/images/bao.jpg";
import saladImage from "../assets/images/ensalada.jpg";
import flamenquinImage from "../assets/images/flamenquin.jpg";
import tostaImage from "../assets/images/tosta.jpg";

export type Locale = "es" | "en";

type TranslatedText = Record<Locale, string>;

export type MenuPrice = {
  label?: TranslatedText;
  amount: string;
};

export type MenuItem = {
  id: string;
  category: "para-empezar" | "principales" | "postres";
  name: TranslatedText;
  description: TranslatedText;
  prices: MenuPrice[];
  image?: ImageMetadata;
  imageAlt?: TranslatedText;
  source: "social" | "review" | "editorial-sample";
  sourceUrl: string;
  provisional: true;
};

export const categories = [
  { id: "para-empezar", label: { es: "Para empezar", en: "To begin" } },
  { id: "principales", label: { es: "Principales", en: "Main courses" } },
  { id: "postres", label: { es: "El final dulce", en: "A sweet finish" } },
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "croquetas-jamon",
    category: "para-empezar",
    name: { es: "Croquetas de jamón", en: "Iberian ham croquettes" },
    description: {
      es: "Cremosas por dentro, crujientes por fuera.",
      en: "Creamy inside with a delicate, crisp crust.",
    },
    prices: [{ amount: "10,50 €" }],
    source: "review",
    sourceUrl: "https://www.tripadvisor.es/Restaurant_Review-g315916-d15576765-Reviews-Casa_Amate-Jaen_Province_of_Jaen_Andalucia.html",
    provisional: true,
  },
  {
    id: "ensalada-ahumada",
    category: "para-empezar",
    name: { es: "Ensalada ahumada", en: "Smoked house salad" },
    description: {
      es: "Hojas tiernas, matices tostados y aliño de la casa.",
      en: "Tender leaves, toasted notes and our house dressing.",
    },
    prices: [{ amount: "13,50 €" }],
    image: saladImage,
    imageAlt: {
      es: "Ensalada preparada en Casa Amate",
      en: "Salad prepared at Casa Amate",
    },
    source: "social",
    sourceUrl: "https://www.instagram.com/restaurantecasamate/",
    provisional: true,
  },
  {
    id: "tosta-sardina",
    category: "para-empezar",
    name: { es: "Tosta de sardina ahumada", en: "Smoked sardine toast" },
    description: {
      es: "Sardina, base crujiente y un contrapunto fresco.",
      en: "Smoked sardine, crisp toast and a bright finish.",
    },
    prices: [{ amount: "5,50 €" }],
    image: tostaImage,
    imageAlt: {
      es: "Bocado sobre tosta preparado en Casa Amate",
      en: "A toast bite prepared at Casa Amate",
    },
    source: "social",
    sourceUrl: "https://www.instagram.com/restaurantecasamate/",
    provisional: true,
  },
  {
    id: "bao-panceta",
    category: "para-empezar",
    name: { es: "Bao de panceta", en: "Pork belly bao" },
    description: {
      es: "Pan al vapor, panceta melosa y contraste encurtido.",
      en: "Steamed bun, tender pork belly and pickled accents.",
    },
    prices: [{ amount: "6,50 €" }],
    image: baoImage,
    imageAlt: {
      es: "Bao relleno preparado en Casa Amate",
      en: "Filled bao prepared at Casa Amate",
    },
    source: "social",
    sourceUrl: "https://www.instagram.com/restaurantecasamate/",
    provisional: true,
  },
  {
    id: "tortilla-reconstruida",
    category: "para-empezar",
    name: { es: "Tortilla reconstruida", en: "Reimagined Spanish omelette" },
    description: {
      es: "La tortilla de siempre contada a nuestra manera.",
      en: "A Casa Amate interpretation of the Spanish classic.",
    },
    prices: [{ amount: "12,50 €" }],
    source: "review",
    sourceUrl: "https://www.tripadvisor.es/Restaurant_Review-g315916-d15576765-Reviews-Casa_Amate-Jaen_Province_of_Jaen_Andalucia.html",
    provisional: true,
  },
  {
    id: "flamenquin-presa",
    category: "principales",
    name: { es: "Flamenquín de presa", en: "Iberian pork flamenquín" },
    description: {
      es: "Presa ibérica, corazón fundente y acabado crujiente.",
      en: "Iberian pork, a melting centre and a crisp finish.",
    },
    prices: [
      { label: { es: "Media", en: "Half" }, amount: "12,00 €" },
      { label: { es: "Ración", en: "Full" }, amount: "18,50 €" },
    ],
    image: flamenquinImage,
    imageAlt: {
      es: "Flamenquín presentado en Casa Amate",
      en: "Flamenquín served at Casa Amate",
    },
    source: "social",
    sourceUrl: "https://www.instagram.com/restaurantecasamate/",
    provisional: true,
  },
  {
    id: "bacalao-atascaburras",
    category: "principales",
    name: { es: "Bacalao frito con atascaburras", en: "Fried cod with atascaburras" },
    description: {
      es: "Bacalao crujiente y crema manchega de patata y ajo.",
      en: "Crisp cod with a Manchego-style potato and garlic cream.",
    },
    prices: [{ amount: "19,50 €" }],
    source: "review",
    sourceUrl: "https://www.google.com/maps/place/Restaurante+Casa+Amate/",
    provisional: true,
  },
  {
    id: "pluma-mojo",
    category: "principales",
    name: { es: "Pluma ibérica con mojo picón", en: "Iberian pork pluma with mojo picón" },
    description: {
      es: "Carne ibérica a la brasa y salsa canaria especiada.",
      en: "Chargrilled Iberian pork with a spiced Canarian sauce.",
    },
    prices: [{ amount: "21,00 €" }],
    source: "review",
    sourceUrl: "https://www.tripadvisor.es/Restaurant_Review-g315916-d15576765-Reviews-Casa_Amate-Jaen_Province_of_Jaen_Andalucia.html",
    provisional: true,
  },
  {
    id: "arroz-berberechos",
    category: "principales",
    name: { es: "Arroz meloso con berberechos", en: "Creamy rice with cockles" },
    description: {
      es: "Arroz de fondo marinero y cocción al punto.",
      en: "Silky rice with a deep seafood stock.",
    },
    prices: [
      { label: { es: "Por persona", en: "Per person" }, amount: "18,00 €" },
    ],
    source: "review",
    sourceUrl: "https://www.tripadvisor.es/Restaurant_Review-g315916-d15576765-Reviews-Casa_Amate-Jaen_Province_of_Jaen_Andalucia.html",
    provisional: true,
  },
  {
    id: "tarta-queso",
    category: "postres",
    name: { es: "Tarta de queso Casa Amate", en: "Casa Amate cheesecake" },
    description: {
      es: "Cremosa, tostada y hecha para compartir… o no.",
      en: "Creamy, toasted and made to share… if you want to.",
    },
    prices: [{ amount: "7,00 €" }],
    source: "review",
    sourceUrl: "https://www.google.com/maps/place/Restaurante+Casa+Amate/",
    provisional: true,
  },
  {
    id: "torrija",
    category: "postres",
    name: { es: "Torrija caramelizada", en: "Caramelised Spanish brioche" },
    description: {
      es: "Interior jugoso, exterior caramelizado y crema ligera.",
      en: "Soft-centred brioche with a caramelised crust and light cream.",
    },
    prices: [{ amount: "6,50 €" }],
    source: "review",
    sourceUrl: "https://www.google.com/maps/place/Restaurante+Casa+Amate/",
    provisional: true,
  },
  {
    id: "chocolate-aceite",
    category: "postres",
    name: { es: "Chocolate, aceite y sal", en: "Chocolate, olive oil and salt" },
    description: {
      es: "Chocolate intenso, aceite de oliva virgen extra y sal en escamas.",
      en: "Dark chocolate, extra virgin olive oil and sea salt flakes.",
    },
    prices: [{ amount: "6,50 €" }],
    source: "editorial-sample",
    sourceUrl: "README.md#fuentes-del-borrador",
    provisional: true,
  },
];
