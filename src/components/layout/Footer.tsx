import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Music, Heart } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import { Button } from '../ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo-comunidad/logo-asociacion.png"
                alt={siteConfig.name}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm">{siteConfig.description}</p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.instagram.comunidadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-sky-300/20 hover:to-blue-500/20 transition-all duration-300"
                aria-label="Instagram Comunidad"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-sky-300/20 hover:to-blue-500/20 transition-all duration-300"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/actividades" className="hover:text-white transition-colors">
                  Actividades
                </Link>
              </li>
              <li>
                <Link to="/asociacion" className="hover:text-white transition-colors">
                  Asociación
                </Link>
              </li>
              <li>
                <Link to="/los-gauchos" className="hover:text-white transition-colors">
                  Los Gauchos
                </Link>
              </li>
              <li>
                <Link to="/socios" className="hover:text-white transition-colors">
                  Hacerse Socio
                </Link>
              </li>
              <li>
                <Link to="/donaciones" className="hover:text-white transition-colors">
                  Donaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.emailUrl}
                  className="flex items-center space-x-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Participá</h3>
            <div className="space-y-2">
              <Button 
                asChild 
                size="sm" 
                className="w-full text-xs py-1.5 h-8"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Link to="/socios">Hacerse Socio</Link>
              </Button>
              <Button 
                asChild 
                variant="secondary" 
                size="sm" 
                className="w-full bg-red-600 hover:bg-red-700 text-white border-0 shadow-md shadow-red-500/30 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300 text-xs py-1.5 h-8"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Link to="/donaciones">
                  <Heart className="h-3 w-3 mr-1 fill-white" />
                  Donar ♥
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-xs text-gray-500">
              <Link to="/contacto" className="hover:text-white transition-colors">
                Contacto
              </Link>
              <span>Aviso Legal (A definir)</span>
              <span>Política de Privacidad (A definir)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
