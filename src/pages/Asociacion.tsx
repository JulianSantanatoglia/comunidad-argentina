import { Users, Heart, Target, Handshake, CheckCircle, Gift, BookOpen, Scale, Headphones, Briefcase } from 'lucide-react';
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

        {/* ¿Quieres ser socio? */}
        <section className="mb-20 py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50 to-white">
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  ¿Querés ser socio de nuestra comunidad?
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mb-6"></div>
                <p className="text-lg md:text-xl mb-4 text-gray-700">
                  Mirá las ventajas de formar parte de nuestra familia
                </p>
                <p className="text-xl md:text-2xl font-semibold text-blue-600 italic">
                  ¡Somos Familia!
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-lg mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
                  Ser socio tiene sus ventajas:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Acceso prioritario a eventos de la asociación</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gift className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Descuentos exclusivos en comercios adheridos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Sorteos y regalos especiales</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Cursos y talleres de interés</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Respaldo legal y jurídico gratuito</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Apoyo psicológico y contención</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Handshake className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Ayudas y donaciones solidarias</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-base md:text-lg">Orientación laboral y oportunidades</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  variant="primary"
                  className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-lg px-8 py-6 text-lg font-semibold"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <Link to="/socios">¡Quiero hacerme socio!</Link>
                </Button>
                <p className="text-gray-600 mt-6 text-lg">
                  ¡Te esperamos para seguir creciendo y sentirnos en casa!
                </p>
              </div>
            </div>
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Link to="/socios">Hacerse Socio</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
