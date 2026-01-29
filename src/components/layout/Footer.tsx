import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Music } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import { Button } from '../ui/Button';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram Comunidad"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
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
              <li>
                <Link to="/noticias" className="hover:text-white transition-colors">
                  Noticias
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
              <li className="pt-2">
                <p className="text-xs text-gray-500">
                  Presidente: {siteConfig.president}
                </p>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Participá</h3>
            <div className="space-y-3">
              <Button asChild size="sm" className="w-full">
                <Link to="/socios">Hacerse Socio</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                <Link to="/donaciones">Donar</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                <Link to="/voluntariado">Voluntariado</Link>
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
