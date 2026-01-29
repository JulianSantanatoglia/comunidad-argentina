import { Users, Heart, Target, Handshake } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Asociacion = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Asociación Argentinos en Almería</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {siteConfig.description}
          </p>
        </div>

        {/* Misión y valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Target className="h-10 w-10 text-primary-600 mb-4" />
              <CardTitle>Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Promover la integración, la cultura argentina y el deporte en Almería, creando un espacio de encuentro y apoyo mutuo para la comunidad argentina.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Heart className="h-10 w-10 text-primary-600 mb-4" />
              <CardTitle>Nuestros Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Solidaridad y apoyo mutuo</li>
                <li>• Respeto y diversidad</li>
                <li>• Participación activa</li>
                <li>• Transparencia</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quiénes somos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Quiénes Somos</h2>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Somos una asociación sin ánimo de lucro formada por argentinos y argentinas que viven en Almería. 
                  Nuestro objetivo es crear un espacio donde podamos encontrarnos, compartir experiencias, mantener 
                  viva nuestra cultura y apoyarnos mutuamente en nuestra integración en España.
                </p>
                <p className="text-gray-700 mb-4">
                  Organizamos actividades culturales, deportivas y de integración, y ofrecemos servicios como 
                  asesoramiento legal y apoyo a la comunidad.
                </p>
                <p className="text-gray-700">
                  <strong>Presidente:</strong> {siteConfig.president}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Qué hacemos */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Qué Hacemos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary-600 mb-4" />
                <CardTitle>Actividades</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Organizamos actividades culturales, deportivas, de integración y solidarias para toda la comunidad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Handshake className="h-10 w-10 text-primary-600 mb-4" />
                <CardTitle>Servicios</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Ofrecemos asesoramiento legal, apoyo en trámites y otros servicios para facilitar la vida en España.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary-600 mb-4" />
                <CardTitle>Apoyo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">
                  Brindamos apoyo y acompañamiento a quienes lo necesiten, creando una red de solidaridad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¿Querés formar parte?</h2>
          <p className="text-gray-600 mb-6">
            Hacete socio y participá activamente en nuestra comunidad
          </p>
          <Button asChild size="lg">
            <Link to="/socios">Hacerse Socio</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
