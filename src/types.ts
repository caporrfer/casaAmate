export type Locale = 'es' | 'en';

export type LocalizedText = Record<Locale, string>;

export interface MenuItem {
  id: string;
  name: LocalizedText;
  price: string;
}

export interface MenuCategory {
  id: string;
  name: LocalizedText;
  items: MenuItem[];
}

export interface OpeningDay {
  day: LocalizedText;
  hours: string[];
}
