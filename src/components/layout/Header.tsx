import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '../../constants/siteConfig';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

const navItems = [
  { path: '/', label: 'Inicio' },
  { path: '/asociacion', label: 'Asociación' },
  { path: '/los-gauchos', label: 'Los Gauchos' },
  { path: '/actividades', label: 'Actividades' },
];

const serviciosItems = [
  { path: '/abogado', label: 'Abogado' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-200/20 backdrop-blur-md bg-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-end">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <img
                src="/images/logo-comunidad/logo-asociacion.png"
                alt={siteConfig.name}
                className="h-16 w-auto"
              />
            </Link>

            <nav className="hidden md:flex md:items-center md:space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300 group inline-block',
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  )}
                >
                  <span className="relative inline-block pb-3">
                    {item.label}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 origin-left',
                        location.pathname === item.path
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      )}
                    ></span>
                  </span>
                </Link>
              ))}
              {/* Servicios dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServiciosOpen(true)}
                onMouseLeave={() => setServiciosOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-300 group inline-flex items-center gap-1.5',
                    location.pathname.startsWith('/abogado')
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  )}
                >
                  <span className="relative inline-block pb-3">
                    Servicios
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 origin-left',
                        location.pathname.startsWith('/abogado')
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      )}
                    ></span>
                  </span>
                  <ChevronDown className={cn('h-4 w-4 transition-transform duration-300 self-center', serviciosOpen && 'rotate-180')} />
                </button>
                {serviciosOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    {serviciosItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          'block px-4 py-2 text-sm transition-colors duration-300',
                          location.pathname === item.path
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              {/* Contacto */}
              <Link
                to="/contacto"
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-colors duration-300 group inline-block',
                  location.pathname === '/contacto'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                )}
              >
                <span className="relative inline-block pb-3">
                  Contacto
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 origin-left',
                      location.pathname === '/contacto'
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    )}
                  ></span>
                </span>
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                asChild
                size="sm"
                variant="primary"
                className="hidden sm:inline-flex bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Link to="/socios">¡Quiero hacerme socio!</Link>
              </Button>
              <button
                className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
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
                  'block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300',
                  location.pathname === item.path
                    ? 'text-blue-600 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <p className="text-base font-medium text-gray-700 mb-1">Servicios</p>
              <div className="pl-4 space-y-1">
                {serviciosItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-3 py-2 text-sm rounded-lg transition-all duration-300',
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'block px-3 py-2 text-base font-medium rounded-lg transition-all duration-300',
                location.pathname === '/contacto'
                  ? 'text-blue-600 border-l-4 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              )}
            >
              Contacto
            </Link>
            <Button asChild size="sm" className="mt-2 w-full">
              <Link to="/socios" onClick={() => setMobileMenuOpen(false)}>
                ¡Quiero hacerme socio!
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
