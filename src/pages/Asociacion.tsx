import { Users, Heart, Target, Handshake, Camera, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Asociacion = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Array de ejemplo para la galería - reemplazar con imágenes reales
  const galleryImages: string[] = [
    // Placeholder para futuras imágenes
    // '/images/gallery/img1.jpg',
    // '/images/gallery/img2.jpg',
    // etc.
  ];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Hero con imagen */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-gray-900">Asociación Argentina en Almería</span>{' '}
                  <span className="text-blue-600">"Somos Familia"</span>
                </h1>
                <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-6"></div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  {siteConfig.description}
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <ImageIcon className="h-20 w-20 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-sm">
                        Espacio para imagen principal
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        Sube una imagen representativa de la asociación
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Valores */}
      <section className="py-16 md:py-20 relative z-10 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gray-900">Nuestra</span>{' '}
                  <span className="text-blue-600">Misión</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-blue-600 mb-6"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Promover la integración, la cultura argentina y el deporte en Almería, creando un espacio de encuentro y apoyo mutuo para la comunidad argentina.
                </p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="text-gray-900">Nuestros</span>{' '}
                  <span className="text-blue-600">Valores</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-blue-600 mb-6"></div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg text-gray-700">Solidaridad y apoyo mutuo</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg text-gray-700">Respeto y diversidad</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg text-gray-700">Participación activa</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2 group-hover:scale-150 transition-transform"></div>
                    <span className="text-lg text-gray-700">Transparencia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Sobre</span>{' '}
                <span className="text-blue-600">Nosotros</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Somos una comunidad formada por argentinos y argentinas que viven en Almería, nacida en octubre de 2023 con el objetivo de crear un espacio de encuentro, contención y pertenencia.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Organizamos actividades culturales, sociales, deportivas y solidarias que fortalecen los lazos entre compatriotas y fomentan la integración con la sociedad local. Creemos en el trabajo en equipo, el respeto y la familia como valores fundamentales.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
                    <div className="text-center p-8">
                      <ImageIcon className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-sm">
                        Espacio para imagen adicional
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-16 md:py-20 relative z-10 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Objetivos de la</span>{' '}
                <span className="text-blue-600">Asociación</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-8"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4 group-hover:scale-110 transition-transform">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Promover la cultura y las tradiciones argentinas</strong> en Almería.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4 group-hover:scale-110 transition-transform">
                    <Handshake className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Fomentar la integración</strong> social, cultural y deportiva de la comunidad argentina.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4 group-hover:scale-110 transition-transform">
                    <Heart className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Generar espacios de encuentro, apoyo y solidaridad</strong> entre socios y voluntarios.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Impulsar actividades deportivas y culturales</strong> abiertas a la comunidad.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Qué Hacemos */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Qué</span>{' '}
                <span className="text-blue-600">Hacemos</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Actividades</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Organizamos actividades culturales, deportivas, de integración y solidarias para toda la comunidad.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4">
                  <Handshake className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Servicios</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ofrecemos asesoramiento legal, apoyo en trámites y otros servicios para facilitar la vida en España.
                </p>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4">
                  <Heart className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Apoyo</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Brindamos apoyo y acompañamiento a quienes lo necesiten, creando una red de solidaridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Fotos */}
      <section className="py-16 md:py-20 relative z-10 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Galería de</span>{' '}
                <span className="text-blue-600">Fotos</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
              <p className="text-lg text-gray-600">
                Momentos compartidos de nuestra comunidad
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
                    <p className="text-gray-500 text-sm">
                      Las fotos se mostrarán aquí cuando estén disponibles
                    </p>
                    <p className="text-gray-400 text-xs mt-4">
                      Sube imágenes a la carpeta /public/images/gallery/
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
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

      {/* CTA */}
      <section className="py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center pt-12 border-t border-gray-200">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-900">¿Querés formar</span>{' '}
                <span className="text-blue-600">parte?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Hacete socio y participá activamente en nuestra comunidad
              </p>
              <Button asChild size="lg" variant="primary" className="bg-gradient-to-r from-sky-400 to-blue-500">
                <Link to="/socios">Hacerse Socio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
