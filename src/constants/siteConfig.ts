export const siteConfig = {
  name: 'Asociación Argentinos en Almería',
  clubName: 'Los Gauchos',
  description: 'Comunidad Argentina en Almería que promueve la cultura, el deporte y la integración',
  president: 'Marcela Quiroga',
  contact: {
    whatsapp: '+34611060421',
    email: 'comunidadargentinaalmeria@gmail.com',
    whatsappUrl: 'https://wa.me/34611060421',
    emailUrl: 'mailto:comunidadargentinaalmeria@gmail.com',
  },
  social: {
    instagram: {
      comunidad: 'comunidad_argentia_en_almeria',
      club: 'clubargentinoalmeria',
      comunidadUrl: 'https://instagram.com/comunidad_argentia_en_almeria',
      clubUrl: 'https://instagram.com/clubargentinoalmeria',
    },
    tiktok: {
      handle: 'comunidad_argentina',
      url: 'https://tiktok.com/@comunidad_argentina',
    },
  },
  membership: {
    annualFee: 15,
    currency: 'EUR',
  },
  donation: {
    amounts: [5, 10, 20, 50],
  },
  bizum: {
    phone: '+34611060421',
  },
} as const;
