import type { MatchResult } from '../types';

export const matches: MatchResult[] = [
  // Próximo partido
  {
    id: '1',
    date: '2026-02-05',
    opponent: 'FRENTE ELEVEN FC',
    home: true,
    time: '22:30',
    venue: 'Los Molinos',
  },
  // Resultado más reciente
  {
    id: '2',
    date: '2026-01-29',
    opponent: 'PUMAS CF',
    home: true,
    score: '6-1',
    result: 'win',
    time: '22:30',
    venue: 'Los Molinos',
  },
  // Resultado anterior
  {
    id: '3',
    date: '2026-01-22',
    opponent: 'BUONGIORNO SC',
    home: false,
    score: '4-4',
    result: 'draw',
    time: '22:30',
    venue: 'El Alquian',
  },
];
