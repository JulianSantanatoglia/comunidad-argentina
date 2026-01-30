export interface Player {
  id: string;
  name: string;
  role?: 'player' | 'coach' | 'delegate';
  photo?: string;
}

export const players: Player[] = [
  {
    id: 'coach',
    name: 'Jose Antonio Lopez Morales',
    role: 'coach',
  },
  {
    id: 'delegate',
    name: 'Marcela Noemi Quiroga Allende',
    role: 'delegate',
  },
  {
    id: '1',
    name: 'Agustín Gabriel Mancenido',
    role: 'player',
  },
  {
    id: '2',
    name: 'Nicolas Exequiel Hazim Pagani',
    role: 'player',
  },
  {
    id: '3',
    name: 'Cesar Damian Olmedo',
    role: 'player',
  },
  {
    id: '4',
    name: 'Brian Ariel Quintero',
    role: 'player',
  },
  {
    id: '5',
    name: 'Celin Sebastian Gomez',
    role: 'player',
  },
  {
    id: '6',
    name: 'Facundo Gabriel Griffa Tramann',
    role: 'player',
  },
  {
    id: '7',
    name: 'Facundo Agustin Reinoso',
    role: 'player',
  },
  {
    id: '8',
    name: 'George Daniel Garcia Pozo',
    role: 'player',
  },
  {
    id: '9',
    name: 'Julian Agustin Santanatoglia',
    role: 'player',
  },
  {
    id: '10',
    name: 'Lucas Andres Mañaz Marquez',
    role: 'player',
  },
  {
    id: '11',
    name: 'Lucas Ariel Poblete Quiroga',
    role: 'player',
  },
  {
    id: '12',
    name: 'Nicola Cocciaretti',
    role: 'player',
  },
  {
    id: '13',
    name: 'Pablo Javier Elgorriaga',
    role: 'player',
  },
  {
    id: '14',
    name: 'Ruben Parra Delgado',
    role: 'player',
  },
  {
    id: '15',
    name: 'Valentin Lizaraso',
    role: 'player',
  },
];
