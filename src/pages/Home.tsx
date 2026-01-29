import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, Shirt, Scale, HandHeart, Newspaper } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { activities } from '../data/activities';
import { sponsors } from '../data/sponsors';
import { format } from 'date-fns';

export const Home = () => {
  const upcomingActivities = activities.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {siteConfig.description}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-100">
              Un espacio para encontrarnos, compartir y crecer juntos en Almería
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/actividades">
                  <Calendar className="mr-2 h-5 w-5" />
                  Ver Actividades
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/socios">
                  <Users className="mr-2 h-5 w-5" />
                  Hacerse Socio
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/donaciones">
                  <Heart className="mr-2 h-5 w-5" />
                  Donar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs rápidos */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/camiseta" className="group">
              <Card className="h-full hover:shadow-md transition-shadow text-center">
                <CardContent className="pt-6">
                  <Shirt className="h-8 w-8 mx-auto mb-2 text-primary-600 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">Camiseta</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/abogado" className="group">
              <Card className="h-full hover:shadow-md transition-shadow text-center">
                <CardContent className="pt-6">
                  <Scale className="h-8 w-8 mx-auto mb-2 text-primary-600 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">Abogado</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/voluntariado" className="group">
              <Card className="h-full hover:shadow-md transition-shadow text-center">
                <CardContent className="pt-6">
                  <HandHeart className="h-8 w-8 mx-auto mb-2 text-primary-600 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">Voluntariado</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/noticias" className="group">
              <Card className="h-full hover:shadow-md transition-shadow text-center">
                <CardContent className="pt-6">
                  <Newspaper className="h-8 w-8 mx-auto mb-2 text-primary-600 group-hover:scale-110 transition-transform" />
                  <p className="font-medium">Noticias</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Próximas actividades */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Próximas Actividades</h2>
            <Button asChild variant="outline">
              <Link to="/actividades">Ver todas</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <CardDescription>
                    {format(new Date(activity.date), "d MMMM")}
                    {activity.time && ` • ${activity.time}`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{activity.excerpt}</p>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link to={`/actividades/${activity.slug}`}>Ver detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Los Gauchos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Los Gauchos</h2>
              <p className="text-lg text-gray-600 mb-6">
                El equipo de fútbol de la comunidad. Competimos en la Liga ADAC y representamos a la comunidad argentina en Almería.
              </p>
              <Button asChild size="lg">
                <Link to="/los-gauchos">Conocer más</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/logo-comunidad/logo-clubargentino.png"
                alt="Los Gauchos"
                className="h-64 w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Nuestros Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/sponsors">Quiero ser sponsor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
            <p className="text-lg mb-6 text-primary-100">
              Recibí las últimas novedades y actividades en tu email
            </p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                // TODO: Integrar con servicio de newsletter (Mailchimp, SendGrid, etc.)
                alert('TODO: Integrar con servicio de newsletter');
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                required
              />
              <Button type="submit" variant="secondary">
                Suscribirse
              </Button>
            </form>
            <p className="text-sm text-primary-200 mt-4">
              TODO: Integrar con servicio de newsletter (Mailchimp, SendGrid, etc.)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
