export interface Hours {
  [day: string]: string;
}

export interface Profile {
  name: string;
  shortName?: string;
  tagline?: string;
  address?: {
    street?: string;
    postal?: string;
    city?: string;
    full?: string;
  };
  phone?: string;
  phoneHref?: string;
  email?: string;
  hours?: Hours;
  links?: {
    theFork?: string;
    instagram?: string;
    facebook?: string;
  };
  images?: {
    logo?: string;
    heroFallback?: string;
  };
  heroVideo?: string;
}

const profile: Profile = {
  name: "Le Café Rostand",
  shortName: "Le Café Rostand",
  tagline: "Bistronomie créative, cocktails & tapas, jardin privatif",
  address: {
    street: "152 Avenue Pasteur",
    postal: "33185",
    city: "Le Haillan",
    full: "152 Avenue Pasteur, 33185 Le Haillan"
  },
  phone: "05 64 37 29 04",
  phoneHref: "+33564372904",
  email: "lecaferostand@gmail.com",
  hours: {
    Lundi: "09:00 - 23:00",
    Mardi: "09:00 - 00:00",
    Mercredi: "09:00 - 00:00",
    Jeudi: "09:00 - 00:00",
    Vendredi: "09:00 - 00:00",
    Samedi: "10:00 - 00:00",
    Dimanche: "10:00 - 16:00"
  } as Hours,
  links: {
  theFork: "https://widget.thefork.com/fr/df2cc556-bf27-4e24-90ec-89250aaa4e39",
    instagram: "https://instagram.com/lecaferostand",
    facebook: "https://facebook.com/lecaferostand"
  }
};

export default profile;
