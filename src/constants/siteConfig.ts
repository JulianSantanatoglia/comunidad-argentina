export const siteConfig = {
  name: 'Asociación Argentina en Almería "Somos Familia"',
  clubName: 'Los Gauchos',
  description: 'Comunidad argentina en Almería que promueve la cultura, el deporte, la solidaridad y la integración',
  president: 'Marcela Quiroga (Presidenta)',
  contact: {
    whatsapp: '+34 611 060 421',
    email: 'comunidadargentinaalmeria@gmail.com',
    whatsappUrl: 'https://wa.me/34611060421',
    emailUrl: 'mailto:comunidadargentinaalmeria@gmail.com',
  },
  social: {
    instagram: {
      comunidad: 'comunidad_argentina_en_almeria',
      club: 'clubargentinoalmeria',
      comunidadUrl: 'https://instagram.com/comunidad_argentina_en_almeria',
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
