import { Trophy, Calendar, Camera, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../constants/siteConfig';
import { matches } from '../data/matches';
import { format } from 'date-fns';

export const LosGauchos = () => {
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

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <img
            src="/images/logo-comunidad/logo-clubargentino.png"
            alt="Los Gauchos"
            className="h-32 w-auto mx-auto mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">Los Gauchos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            El equipo de fútbol de la Asociación Argentinos en Almería. Competimos en la Liga ADAC.
          </p>
        </div>

        {/* Info del equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Trophy className="h-10 w-10 text-primary-600 mb-4" />
              <CardTitle>Liga ADAC</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Participamos en la Liga ADAC (Asociación Deportiva de Almería Capital) en la categoría de fútbol adultos.
              </p>
              <p className="text-sm text-gray-500">
                TODO: Agregar información sobre temporada actual, posición en tabla, próximos partidos.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Calendar className="h-10 w-10 text-primary-600 mb-4" />
              <CardTitle>Próximos Partidos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Seguí nuestras redes sociales para conocer los próximos partidos y horarios.
              </p>
              <Button
                asChild
                variant="outline"
                onClick={() => window.open(siteConfig.social.instagram.clubUrl, '_blank')}
              >
                <a href={siteConfig.social.instagram.clubUrl} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-4 w-4" />
                  Seguir en Instagram
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Resultados */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Resultados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matches.map((match) => (
              <Card key={match.id}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        {format(new Date(match.date), "d MMM yyyy")}
                      </p>
                      <p className="font-semibold">
                        {match.home ? 'Los Gauchos' : match.opponent} vs {match.home ? match.opponent : 'Los Gauchos'}
                      </p>
                      {match.home && (
                        <Badge variant="primary" className="mt-2">Local</Badge>
                      )}
                    </div>
                    {match.score && (
                      <div className="text-right">
                        <p className="text-2xl font-bold">{match.score}</p>
                        {match.result && (
                          <Badge variant={getResultColor(match.result) as any} className="mt-2">
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
          <p className="text-sm text-gray-500 mt-4">
            TODO: Agregar más resultados y actualizar automáticamente.
          </p>
        </div>

        {/* Fotos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Fotos</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">
                  Las fotos de los partidos se publican en nuestras redes sociales.
                </p>
                <Button
                  asChild
                  variant="outline"
                  onClick={() => window.open(siteConfig.social.instagram.clubUrl, '_blank')}
                >
                  <a href={siteConfig.social.instagram.clubUrl} target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    Ver fotos en Instagram
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contacto */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Querés sumarte al equipo?</h2>
          <p className="text-gray-600 mb-6">
            Contactanos para más información sobre entrenamientos y requisitos.
          </p>
          <Button
            asChild
            size="lg"
            onClick={() => window.open(siteConfig.contact.whatsappUrl, '_blank')}
          >
            <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};
