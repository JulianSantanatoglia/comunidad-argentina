import { Users, Heart, Target, Handshake, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Asociacion = () => {
  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Patrón de fondo sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        {/* Hero */}
        <div className="mb-20 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900">Asociación Argentina en Almería</span>{' '}
            <span className="text-blue-600">"Somos Familia"</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-6"></div>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Somos una comunidad formada por argentinos y argentinas que viven en Almería, nacida en octubre de 2023 con el objetivo de crear un espacio de encuentro, contención y pertenencia.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Organizamos actividades culturales, sociales, deportivas y solidarias que fortalecen los lazos entre compatriotas y fomentan la integración con la sociedad local.
          </p>
        </div>

        {/* Misión, Valores y Qué Hacemos en grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Nuestra Misión */}
          <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4 group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Nuestra Misión
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Crear un espacio de encuentro, contención y pertenencia para la comunidad argentina en Almería, promoviendo la integración social, cultural y deportiva.
              </p>
            </CardContent>
          </Card>

          {/* Nuestros Valores */}
          <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Nuestros Valores
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Heart className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm">Familia y apoyo mutuo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Handshake className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm">Respeto e inclusión</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm">Trabajo en equipo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Target className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm">Solidaridad</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Qué Hacemos */}
          <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4 group-hover:scale-110 transition-transform">
                <Handshake className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Qué Hacemos
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Promovemos la cultura argentina</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Fomentamos la integración</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Generamos espacios de encuentro</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Impulsamos actividades deportivas y culturales</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Valores detallados */}
        <section className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Nuestros</span>{' '}
              <span className="text-blue-600">Valores</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-8"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="group hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center">
                    <Heart className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Familia</h3>
                    <p className="text-gray-600">
                      Creemos en la familia como valor fundamental y en el apoyo mutuo entre todos los miembros de la comunidad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center">
                    <Handshake className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Respeto</h3>
                    <p className="text-gray-600">
                      Valoramos el respeto hacia todos, promoviendo un ambiente inclusivo y acogedor para todos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center">
                    <Users className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Trabajo en Equipo</h3>
                    <p className="text-gray-600">
                      Fomentamos la colaboración y el trabajo conjunto para alcanzar objetivos comunes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center">
                    <Target className="h-7 w-7 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Solidaridad</h3>
                    <p className="text-gray-600">
                      Promovemos la ayuda mutua y el apoyo solidario entre los miembros de la comunidad.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-12 px-6 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Querés formar parte?
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Hacete socio y participá activamente en nuestra comunidad
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-white/90 shadow-xl"
            >
              <Link to="/socios">Hacerse Socio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
