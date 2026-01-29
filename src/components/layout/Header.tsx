import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../constants/siteConfig';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/actividades', label: 'Actividades' },
  { path: '/asociacion', label: 'Asociación' },
  { path: '/los-gauchos', label: 'Los Gauchos' },
  { path: '/socios', label: 'Socios' },
  { path: '/noticias', label: 'Noticias' },
  { path: '/contacto', label: 'Contacto' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logo-comunidad/logo-asociacion.png"
              alt={siteConfig.name}
              className="h-10 w-auto"
            />
            <span className="hidden font-display text-xl font-bold text-gray-900 sm:inline">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex"
            >
              <Link to="/socios">Hacerse Socio</Link>
            </Button>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-2 text-base font-medium rounded-md',
                  location.pathname === item.path
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="mt-2 w-full">
              <Link to="/socios" onClick={() => setMobileMenuOpen(false)}>
                Hacerse Socio
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
