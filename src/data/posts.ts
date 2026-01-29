import type { Post } from '../types';

export const posts: Post[] = [
  {
    id: '1',
    title: 'Bienvenidos a la Asociación Argentinos en Almería',
    slug: 'bienvenidos-asociacion',
    date: '2024-01-15',
    excerpt: 'Te damos la bienvenida a nuestra comunidad. Conocé quiénes somos y qué hacemos.',
    content: `
      <p>Bienvenidos a la Asociación Argentinos en Almería. Somos una comunidad que busca promover la cultura argentina, el deporte y la integración en Almería.</p>
      <p>Nuestra misión es crear un espacio donde los argentinos en Almería puedan encontrarse, compartir experiencias y apoyarse mutuamente.</p>
      <p>Te invitamos a formar parte de nuestra comunidad.</p>
    `,
    author: 'Marcela Quiroga',
  },
  {
    id: '2',
    title: 'Los Gauchos: Nuevo partido en la Liga ADAC',
    slug: 'los-gauchos-nuevo-partido',
    date: '2024-02-10',
    excerpt: 'El equipo Los Gauchos continúa su participación en la Liga ADAC.',
    content: `
      <p>El equipo Los Gauchos sigue compitiendo en la Liga ADAC. Vení a alentarnos en nuestros próximos partidos.</p>
      <p>Más información sobre horarios y ubicación próximamente.</p>
    `,
  },
];
