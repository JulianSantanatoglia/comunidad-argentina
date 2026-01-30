import { Link } from 'react-router-dom';
import { Calendar, Users, Heart, Target, Handshake, Shirt, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '../constants/siteConfig';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { activities } from '../data/activities';
import { sponsors } from '../data/sponsors';
import { format } from 'date-fns';
import { useState, useEffect } from 'react';

const useTypewriter = (text: string, speed: number = 50, startDelay: number = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    setDisplayedText('');
    setIsComplete(false);

    const animate = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        // Velocidad más constante y suave para animación más sutil
        const delay = speed + (Math.random() * 8 - 2); // Variación más pequeña entre -2 y +6ms
        timeoutId = setTimeout(animate, Math.max(30, delay));
      } else {
        setIsComplete(true);
      }
    };

    timeoutId = setTimeout(animate, startDelay + speed);
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};

export const Home = () => {
  const upcomingActivities = activities.slice(0, 3);
  const fullTitle = "Bienvenido al sitio oficial de la Asociación Argentina en Almería";
  const somosFamiliaText = "#SomosFamilia";
  const { displayedText: titleText, isComplete: titleComplete } = useTypewriter(fullTitle, 50);
  const [startSomosFamilia, setStartSomosFamilia] = useState(false);
  
  useEffect(() => {
    if (titleComplete) {
      const timer = setTimeout(() => {
        setStartSomosFamilia(true);
      }, 300); // Pequeña pausa después del título
      return () => clearTimeout(timer);
    }
  }, [titleComplete]);
  
  const { displayedText: somosFamiliaDisplay, isComplete: somosFamiliaComplete } = useTypewriter(
    somosFamiliaText, 
    50, 
    startSomosFamilia ? 0 : 999999
  );
  
  const camisetaImages = [
    '/images/camisetas/camiseta-1.jpg',
    '/images/camisetas/camiseta-2.jpg',
    '/images/camisetas/camiseta-3.jpg',
    '/images/camisetas/camiseta-4.jpg',
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % camisetaImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + camisetaImages.length) % camisetaImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const renderTitle = () => {
    const highlightText = "Asociación Argentina en Almería";
    const highlightIndex = fullTitle.indexOf(highlightText);
    
    if (highlightIndex === -1) {
      return <span>{titleText}</span>;
    }

    const beforeHighlight = fullTitle.substring(0, highlightIndex);
    const afterHighlight = fullTitle.substring(highlightIndex + highlightText.length);

    if (titleText.length <= highlightIndex) {
      // Aún no llegamos a la parte destacada
      return <span>{titleText}</span>;
    } else if (titleText.length <= highlightIndex + highlightText.length) {
      // Estamos escribiendo la parte destacada
      const before = beforeHighlight;
      const highlighted = titleText.substring(highlightIndex);
      return (
        <span>
          {before}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
            {highlighted}
          </span>
        </span>
      );
    } else {
      // Ya pasamos la parte destacada
      const highlighted = highlightText;
      return (
        <span>
          {beforeHighlight}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">
            {highlighted}
          </span>
          {afterHighlight}
        </span>
      );
    }
  };

  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative text-white min-h-[85vh] lg:min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/header/header-2.png"
            alt="Header"
            className="w-full h-full object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 min-h-[1.2em]" style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              {renderTitle()}
              {!titleComplete && <span className="animate-blink">|</span>}
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl mb-20 text-white/95 font-semibold min-h-[1.2em]" style={{ transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}>
              {titleComplete ? (
                <>
                  {somosFamiliaDisplay}
                  {!somosFamiliaComplete && <span className="animate-blink">|</span>}
                </>
              ) : (
                <span className="opacity-0">#SomosFamilia</span>
              )}
            </p>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToNextSection}
              className="inline-flex flex-col items-center gap-2 text-white/90 hover:text-white transition-all duration-300 animate-bounce-slow group"
              aria-label="Deslizar a la siguiente sección"
            >
              <span className="text-sm font-medium">Explorar</span>
              <ChevronDown className="h-8 w-8 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros y Objetivos */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            {/* Sobre Nosotros */}
            <div className="mb-16 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Sobre</span>{' '}
                <span className="text-blue-600">Nosotros</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Somos una comunidad formada por argentinos y argentinas que viven en Almería, nacida en octubre de 2023 con el objetivo de crear un espacio de encuentro, contención y pertenencia.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  Organizamos actividades culturales, sociales, deportivas y solidarias que fortalecen los lazos entre compatriotas y fomentan la integración con la sociedad local. Creemos en el trabajo en equipo, el respeto y la familia como valores fundamentales.
                </p>
              </div>
            </div>

            {/* Objetivos */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">Objetivos de la Asociación</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Próximas actividades */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-900">Próximas</span>{' '}
                <span className="text-blue-600">Actividades</span>
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
              <p className="text-gray-600">Descubrí lo que tenemos preparado para vos</p>
            </div>
            <Button asChild variant="outline" className="shadow-md">
              <Link to="/actividades">Ver todas</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingActivities.map((activity) => (
              <Card key={activity.id} className="group overflow-hidden hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/0 via-blue-500/0 to-blue-500/0 group-hover:from-sky-300/5 group-hover:via-blue-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
                <CardHeader className="relative z-10">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 mb-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {format(new Date(activity.date), "d MMMM")}
                    {activity.time && ` • ${activity.time}`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">{activity.excerpt}</p>
                  <Button asChild size="sm" variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-50 group-hover:to-blue-100 border-blue-400/50">
                    <Link to={`/actividades/${activity.slug}`}>Ver detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Los Gauchos */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-sky-200 text-blue-600 text-sm font-semibold w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Equipo de Fútbol
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="text-gray-900">Club Argentinos en</span>{' '}
                <span className="text-blue-600">Almería</span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">Los Gauchos</p>
              <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-4"></div>
              <p className="text-lg text-gray-700 leading-relaxed">
                El equipo de fútbol de la comunidad. Competimos en la Liga ADAC y representamos a la comunidad argentina en Almería con pasión y garra.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="shadow-lg bg-gradient-to-r from-sky-400 to-blue-500">
                  <Link to="/los-gauchos">Conocer más</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="shadow-md">
                  <Link to="/contacto">Contactar</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-300/20 to-blue-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-white to-blue-50/50 p-8 rounded-3xl shadow-2xl border border-blue-200/50">
                  <img
                    src="/images/logo-comunidad/logo-clubargentino.png"
                    alt="Club Argentinos en Almería"
                    className="h-72 w-auto drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 overflow-hidden bg-white relative">
        {/* Patrón de fondo sutil */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Nuestros</span>{' '}
              <span className="text-blue-600">Sponsors</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto"></div>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll gap-8 items-center">
              {/* Duplicamos los sponsors para crear un loop continuo */}
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={`${sponsor.id}-${index}`}
                  className="flex items-center justify-center p-6 flex-shrink-0 hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-24 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/sponsors">Quiero ser sponsor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Camiseta */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Patrón de fondo sutil */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-gray-900">Camiseta</span>{' '}
                  <span className="text-blue-600">Club Argentinos en Almería</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mb-6"></div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Llevá los colores del club con la camiseta oficial del Club Argentinos en Almería. Camiseta oficial con los colores y el escudo del equipo.
                </p>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-gray-900">Precio:</strong> A definir por la asociación</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1"><strong className="text-gray-900">Talles:</strong> A definir por la asociación</p>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    const message = encodeURIComponent('Hola! Me interesa comprar la camiseta del Club Argentinos en Almería. ¿Podrían darme más información?');
                    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
                  }}
                  size="lg"
                  variant="primary"
                  className="bg-gradient-to-r from-sky-400 to-blue-500 w-full md:w-auto"
                >
                  <Shirt className="mr-2 h-5 w-5" />
                  Comprar por WhatsApp
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-sm">
                  {/* Slider principal */}
                  <Card className="overflow-hidden mb-4">
                    <CardContent className="p-0 relative group">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-blue-50 to-sky-100 relative">
                        <img
                          src={camisetaImages[currentImageIndex]}
                          alt={`Camiseta Club Argentinos en Almería ${currentImageIndex + 1}`}
                          className="w-full h-full object-contain transition-opacity duration-300"
                        />
                        {/* Botones de navegación */}
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                          aria-label="Imagen anterior"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Miniaturas */}
                  <div className="grid grid-cols-4 gap-2">
                    {camisetaImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                          currentImageIndex === index
                            ? 'border-blue-500 scale-105 shadow-md'
                            : 'border-gray-200 hover:border-blue-300 hover:scale-105'
                        }`}
                        aria-label={`Ver imagen ${index + 1}`}
                      >
                        <img
                          src={image}
                          alt={`Miniatura camiseta ${index + 1}`}
                          className="w-full h-full object-cover bg-gradient-to-br from-blue-50 to-sky-100"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  <span>Newsletter</span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-white/60 to-white/80 mx-auto mb-6"></div>
                <p className="text-lg md:text-xl mb-8 text-white/90">
                  Recibí las últimas novedades y actividades en tu email
                </p>
              </div>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: Integrar con servicio de newsletter (Mailchimp, SendGrid, etc.)
                  alert('TODO: Integrar con servicio de newsletter');
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-6 py-4 rounded-xl text-gray-900 bg-white shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700 transition-all text-lg"
                  required
                />
                <Button type="submit" variant="secondary" size="lg" className="shadow-xl whitespace-nowrap">
                  Suscribirse
                </Button>
              </form>
              <p className="text-sm text-white/60 mt-6 text-center">
                TODO: Integrar con servicio de newsletter (Mailchimp, SendGrid, etc.)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
