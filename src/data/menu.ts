import type { MenuCategory } from '../types';

export const MENU: MenuCategory[] = [
  {
    id: 'para-abrir-boca',
    name: { es: 'Para abrir boca', en: 'To begin' },
    items: [
      { id: 'bao-secreto', name: { es: 'Pan bao de secreto de cerdo, mahonesa de guindillas, ricota y huevo de codorniz', en: 'Pork secreto bao with chilli mayonnaise, ricotta and quail egg' }, price: '4,50' },
      { id: 'sam-pato', name: { es: 'Sam de pato con alioli de chili dulce, setas y sriracha', en: 'Duck sam with sweet chilli aioli, mushrooms and sriracha' }, price: '5,00' },
      { id: 'tosta-papada', name: { es: 'Tosta de papada de cerdo con anguila ahumada y salsa teriyaki', en: 'Pork jowl toast with smoked eel and teriyaki sauce' }, price: '5,00' },
      { id: 'gazpacho', name: { es: 'Vaso de gazpacho con granizado de manzana, pepino y albahaca', en: 'Gazpacho with apple granita, cucumber and basil' }, price: '2,80' },
      { id: 'ostra-citrica', name: { es: 'Ostra con salsa cítrica de la casa', en: 'Oyster with Casa Amate citrus sauce' }, price: '4,60' },
    ],
  },
  {
    id: 'entrantes',
    name: { es: 'Entrantes fríos y calientes', en: 'Cold and hot starters' },
    items: [
      { id: 'ensalada-ahumada', name: { es: 'Ensalada ahumada de foie, manzana, kikos, tomates cherry y vinagreta trufada', en: 'Smoked foie salad with apple, toasted corn, cherry tomatoes and truffle vinaigrette' }, price: '13,00' },
      { id: 'ensalada-noruega', name: { es: 'Ensalada noruega con salmón y bacalao ahumado, gulas al ajillo, vinagreta de frambuesa, cebolla morada encurtida y cebolla crujiente', en: 'Norwegian salad with smoked salmon and cod, garlic baby eels, raspberry vinaigrette, pickled red onion and crispy onion' }, price: '15,00' },
      { id: 'croquetas-cecina', name: { es: 'Croquetas caseras de cecina y parmesano', en: 'Homemade cured beef and Parmesan croquettes' }, price: '12,00' },
      { id: 'croquetas-jamon', name: { es: 'Croquetas caseras de jamón', en: 'Homemade ham croquettes' }, price: '9,00' },
      { id: 'flamenquin', name: { es: 'Flamenquín de presa con jamón, kikos, alioli de mostaza y queso', en: 'Iberian pork flamenquín with ham, toasted corn, mustard aioli and cheese' }, price: '12,00' },
      { id: 'patatas-kimchee', name: { es: 'Patatas naturales con espuma de kimchee y queso', en: 'Hand-cut potatoes with kimchi and cheese foam' }, price: '10,00' },
      { id: 'pata-pulpo', name: { es: 'Pata de pulpo gigante de 350 g con papa arrugada, pimentón y AOVE', en: '350 g giant octopus leg with wrinkled potato, paprika and extra virgin olive oil' }, price: '28,00' },
      { id: 'tortilla-deconstruida', name: { es: 'Tortilla deconstruida con queso de cabra y cebolla caramelizada', en: 'Deconstructed Spanish omelette with goat cheese and caramelised onion' }, price: '10,00' },
      { id: 'udon', name: { es: 'Udon con wok de verduras salteadas y gambas', en: 'Udon with wok-fried vegetables and prawns' }, price: '10,00' },
      { id: 'raviolis-rabo', name: { es: 'Raviolis de rabo de toro con crema de patata', en: 'Oxtail ravioli with potato cream' }, price: '12,00' },
      { id: 'taco-salchichon', name: { es: 'Taco de salchichón ibérico de bellota Arturo Sánchez', en: 'Arturo Sánchez acorn-fed Iberian salchichón taco' }, price: '9,00' },
      { id: 'queso-manchego', name: { es: 'Queso manchego curado Montescusa', en: 'Mature Montescusa Manchego cheese' }, price: '12,00' },
    ],
  },
  {
    id: 'del-mar',
    name: { es: 'Del mar', en: 'From the sea' },
    items: [
      { id: 'calamares', name: { es: 'Calamares fritos con lechuga, cherry, limón y alioli', en: 'Fried squid with lettuce, cherry tomato, lemon and aioli' }, price: '12,00' },
      { id: 'cazuelita-gambas', name: { es: 'Cazuelita de gambas frescas al pilpil con huevos', en: 'Fresh prawns pil-pil style with eggs' }, price: '14,00' },
      { id: 'rosada-frita', name: { es: 'Rosada frita con cebolletas en tempura y alioli de ajo asado', en: 'Fried kingklip with tempura spring onion and roasted garlic aioli' }, price: '13,00' },
      { id: 'tartar-atun', name: { es: 'Tartar de atún con patata arrugada, aceite de trufa y huevo frito', en: 'Tuna tartare with wrinkled potato, truffle oil and fried egg' }, price: '18,00' },
    ],
  },
  {
    id: 'carne',
    name: { es: 'Algo de carne', en: 'From the grill' },
    items: [
      { id: 'chuleton', name: { es: 'Chuletón de vaca rubia gallega premium (1 kg)', en: 'Premium Galician blond beef rib steak (1 kg)' }, price: '50,00' },
      { id: 'entrecot', name: { es: 'Entrecot de vaca rubia gallega premium (400 g)', en: 'Premium Galician blond beef entrecôte (400 g)' }, price: '29,00' },
      { id: 'pluma', name: { es: 'Pluma ibérica de bellota con mojo picón y papas arrugadas (250 g)', en: 'Acorn-fed Iberian pluma with mojo picón and wrinkled potatoes (250 g)' }, price: '20,00' },
      { id: 'presa', name: { es: 'Presa ibérica de bellota con patatas y pimiento del padrón (250 g)', en: 'Acorn-fed Iberian presa with potatoes and Padrón pepper (250 g)' }, price: '20,00' },
      { id: 'costillas', name: { es: 'Costillas de cerdo a baja temperatura con demi-glace y patatas (500 g)', en: 'Slow-cooked pork ribs with demi-glace and potatoes (500 g)' }, price: '14,00' },
    ],
  },
  {
    id: 'postres',
    name: { es: 'Para los golosos', en: 'For a sweet finish' },
    items: [
      { id: 'tarta-queso', name: { es: 'Nuestra tarta de queso con helado de galleta y cookie', en: 'Our cheesecake with biscuit ice cream and cookie' }, price: '5,00' },
      { id: 'coulant', name: { es: 'Coulant de chocolate negro con helado de vainilla', en: 'Dark chocolate coulant with vanilla ice cream' }, price: '5,00' },
      { id: 'torrija', name: { es: 'Torrija de pan brioche frita con salsa de chocolate blanco y helado de vainilla', en: 'Fried brioche French toast with white chocolate sauce and vanilla ice cream' }, price: '5,00' },
      { id: 'sorbete-limon', name: { es: 'Sorbete de limón', en: 'Lemon sorbet' }, price: '4,00' },
    ],
  },
];
