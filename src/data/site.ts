export const site = {
  name: "Casa Amate",
  descriptor: "Restaurante · Jaén",
  phoneDisplay: "659 97 50 87",
  phoneHref: "tel:+34659975087",
  email: "restaurantecasamate@gmail.com",
  address: "Paseo de España, 10, 23008 Jaén",
  mapUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Restaurante+Casa+Amate%2C+Paseo+de+Espa%C3%B1a+10%2C+Ja%C3%A9n",
  instagram: "https://www.instagram.com/restaurantecasamate/",
  facebook: "https://www.facebook.com/restaurantecasamate",
  hours: [
    { days: "Lunes y martes", value: "Cerrado" },
    { days: "Miércoles y jueves", value: "13:00–16:00 · 20:00–23:30" },
    { days: "Viernes y sábado", value: "13:00–16:00 · 20:00–00:00" },
    { days: "Domingo", value: "13:00–16:00" },
  ],
  draftNotice: "Propuesta visual pendiente de validación por Casa Amate.",
} as const;
