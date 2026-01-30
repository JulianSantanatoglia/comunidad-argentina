import { Trophy, Calendar, Camera, Instagram, Users } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../constants/siteConfig';
import { matches } from '../data/matches';
import { players } from '../data/players';
import { format } from 'date-fns';
import { useState } from 'react';

export const LosGauchos = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const getResultColor = (result?: string) => {
    if (result === 'win') return 'success';
    if (result === 'loss') return 'default';
    return 'warning';
  };

  const getResultLabel = (result?: string) => {
    if (result === 'win') return 'Victoria';
    if (result === 'loss') return 'Derrota';
    return 'Empate';
  };

  // Separar próximos partidos de resultados
  const upcomingMatches = matches.filter(match => new Date(match.date) > new Date());
  const pastMatches = matches.filter(match => new Date(match.date) <= new Date()).reverse();

  // Separar entrenador, delegado y jugadores
  const coach = players.find(p => p.role === 'coach');
  const delegate = players.find(p => p.role === 'delegate');
  const teamPlayers = players.filter(p => p.role === 'player');

  // Galería de fotos
  const galleryImages: string[] = [
    '/images/fotos-futbol/futbol1.jpg',
    '/images/fotos-futbol/futbol2.jpg',
    '/images/fotos-futbol/futbol3.jpg',
    '/images/fotos-futbol/futbol4.jpg',
    '/images/fotos-futbol/futbol5.jpg',
    '/images/fotos-futbol/futbol6.jpg',
    '/images/fotos-futbol/futbol7.jpg',
    '/images/fotos-futbol/futbol8.jpg',
    '/images/fotos-futbol/futbol9.jpg',
    '/images/fotos-futbol/futbol10.jpg',
    '/images/fotos-futbol/futbol11.jpg',
    '/images/fotos-futbol/futbol12.jpg',
    '/images/fotos-futbol/futbol13.jpg',
    '/images/fotos-futbol/futbol14.jpg',
    '/images/fotos-futbol/futbol15.jpg',
  ];

  // Extraer ID del video de YouTube
  const youtubeVideoId = '_mlhIYjxca0';

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Hero con imagen del equipo e Historia */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/images/futbol/equipo-futbol.jpeg"
                  alt="Equipo Club Argentinos en Almería"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Club Argentinos en</span>{' '}
                <span className="text-blue-600">Almería</span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-6"></div>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Los Gauchos nació como el equipo de fútbol representativo de la Asociación Argentina en Almería "Somos Familia", con el objetivo de unir a la comunidad argentina a través del deporte y representar nuestros colores en la Liga ADAC.
                </p>
                <p>
                  Desde nuestros inicios, nos caracterizamos por jugar con garra, pasión y el espíritu argentino que nos identifica. Cada partido es una oportunidad de demostrar que, más allá de la distancia, mantenemos viva nuestra identidad y nuestros valores.
                </p>
                <p>
                  El equipo está formado por argentinos y argentinas que viven en Almería, unidos por el amor al fútbol y el deseo de crear un espacio de pertenencia y camaradería. Competimos con honor, respeto y siempre dando lo mejor de nosotros en cada encuentro.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Plantel */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Plantel</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
            <p className="text-lg text-gray-600">
              Conocé a nuestro equipo técnico y jugadores
            </p>
          </div>

          {/* Entrenador y Delegado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {coach && (
              <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center overflow-hidden">
                        {coach.photo ? (
                          <img src={coach.photo} alt={coach.name} className="w-full h-full object-cover" />
                        ) : (
                          <Users className="h-10 w-10 text-blue-600" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2 bg-blue-100 text-blue-700">Entrenador</Badge>
                      <h3 className="text-lg font-bold text-gray-900">{coach.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
            {delegate && (
              <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center overflow-hidden">
                        {delegate.photo ? (
                          <img src={delegate.photo} alt={delegate.name} className="w-full h-full object-cover" />
                        ) : (
                          <Users className="h-10 w-10 text-blue-600" />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-2 bg-blue-100 text-blue-700">Delegado</Badge>
                      <h3 className="text-lg font-bold text-gray-900">{delegate.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Jugadores */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Jugadores</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {teamPlayers.map((player) => (
                <Card key={player.id} className="group hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden">
                  <CardContent className="pt-6 pb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center mx-auto mb-3 overflow-hidden border-2 border-blue-200">
                      {player.photo ? (
                        <img src={player.photo} alt={player.name} className="w-full h-full object-cover" />
                      ) : (
                        <Users className="h-10 w-10 text-blue-600" />
                      )}
                    </div>
                    <p className="text-sm font-medium text-gray-900 leading-tight">{player.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Próximos Partidos */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Próximos</span>{' '}
              <span className="text-blue-600">Partidos</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
          </div>
          {upcomingMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <p className="text-sm font-medium text-blue-600">
                        {format(new Date(match.date), "d MMM yyyy")}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-900 mb-3 text-lg">
                      {match.home ? 'Los Gauchos' : match.opponent} vs {match.home ? match.opponent : 'Los Gauchos'}
                    </p>
                    {match.home && (
                      <Badge className="bg-blue-100 text-blue-700">Local</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-600">No hay partidos programados próximamente</p>
                <p className="text-sm text-gray-500 mt-2">Seguí nuestras redes para estar al día</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Resultados */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Resultados</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
            <p className="text-lg text-gray-600">Historial de partidos y resultados</p>
          </div>
          {pastMatches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastMatches.map((match) => (
                <Card key={match.id} className="group hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-300/0 via-blue-500/0 to-blue-500/0 group-hover:from-sky-300/5 group-hover:via-blue-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                  <CardContent className="pt-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-1">
                        <p className="text-sm text-blue-600 font-medium mb-2">
                          {format(new Date(match.date), "d MMM yyyy")}
                        </p>
                        <p className="font-semibold text-gray-800 mb-3">
                          {match.home ? 'Los Gauchos' : match.opponent} vs {match.home ? match.opponent : 'Los Gauchos'}
                        </p>
                        {match.home && (
                          <Badge variant="primary" className="bg-gradient-to-r from-blue-100 to-sky-200 text-blue-600 border border-blue-300/50">
                            Local
                          </Badge>
                        )}
                      </div>
                      {match.score && (
                        <div className="text-right ml-4">
                          <p className="text-3xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">
                            {match.score}
                          </p>
                          {match.result && (
                            <Badge 
                              variant={getResultColor(match.result) as any} 
                              className={`mt-2 ${
                                match.result === 'win' 
                                  ? 'bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-300/50' 
                                  : match.result === 'loss'
                                  ? 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 border border-blue-300/50'
                                  : 'bg-gradient-to-r from-blue-100 to-sky-200 text-blue-700 border border-blue-300/50'
                              }`}
                            >
                              {getResultLabel(match.result)}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="pt-12 pb-12 text-center">
                <Trophy className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-600">Aún no hay resultados registrados</p>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Video del último partido */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Último</span>{' '}
              <span className="text-blue-600">Partido</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
            <p className="text-lg text-gray-600 mb-6">
              Reviví el último partido transmitido por EL CLAN SL
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="overflow-hidden max-w-4xl w-full">
              <CardContent className="p-0">
                <div className="aspect-video w-full">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                    title="Último partido - Los Gauchos"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Galería de Fotos */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Galería de</span>{' '}
              <span className="text-blue-600">Fotos</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
            <p className="text-lg text-gray-600">
              Momentos destacados de nuestros partidos
            </p>
          </div>
          
          {galleryImages.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 shadow-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Galería ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <Card className="overflow-hidden">
              <CardContent className="pt-12 pb-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-100 to-sky-200 mb-6">
                    <Camera className="h-10 w-10 text-blue-600" />
                  </div>
                  <p className="text-gray-700 mb-2 text-lg font-medium">
                    Galería de fotos
                  </p>
                  <p className="text-gray-500 text-sm mb-4">
                    Las fotos se mostrarán aquí cuando estén disponibles
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100"
                    onClick={() => window.open(siteConfig.social.instagram.clubUrl, '_blank')}
                  >
                    <a href={siteConfig.social.instagram.clubUrl} target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" />
                      Ver fotos en Instagram
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Modal para imagen ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Imagen ampliada"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* Contacto */}
        <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Querés sumarte al equipo?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Contactanos para más información sobre entrenamientos y requisitos.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-gradient-to-r from-sky-400 to-blue-500 shadow-xl"
              onClick={() => window.open(siteConfig.contact.whatsappUrl, '_blank')}
            >
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
