import type { ImageMetadata } from "astro";
import hero from "../assets/images/hero-bocado.jpg";
import bao from "../assets/images/bao.jpg";
import salad from "../assets/images/ensalada-detalle.jpg";
import flamenquin from "../assets/images/flamenquin.jpg";
import tosta from "../assets/images/tosta.jpg";
import pluma from "../assets/images/pluma.jpg";
import cellar from "../assets/images/bodega.jpg";

export type GalleryImage = {
  src: ImageMetadata;
  alt: string;
  position?: string;
  sourceUrl: string;
};

export const heroImage = hero;

export const galleryImages: GalleryImage[] = [
  { src: bao, alt: "Bao recién preparado en Casa Amate", sourceUrl: "https://www.instagram.com/restaurantecasamate/" },
  { src: salad, alt: "Ensalada de Casa Amate sobre vajilla artesanal", sourceUrl: "https://www.instagram.com/restaurantecasamate/" },
  { src: flamenquin, alt: "Plato crujiente terminado con queso y hierbas", sourceUrl: "https://www.instagram.com/restaurantecasamate/" },
  { src: tosta, alt: "Tosta con verduras y acabado cremoso", sourceUrl: "https://www.instagram.com/restaurantecasamate/" },
  { src: pluma, alt: "Plato de carne con setas y salsa", sourceUrl: "https://www.instagram.com/restaurantecasamate/" },
  { src: cellar, alt: "Selección de bebidas de Casa Amate", sourceUrl: "https://www.instagram.com/restaurantecasamate/" },
];
