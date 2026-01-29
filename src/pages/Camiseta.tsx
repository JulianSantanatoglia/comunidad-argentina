import { ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../constants/siteConfig';

export const Camiseta = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola! Me interesa comprar la camiseta del club Los Gauchos. ¿Podrían darme más información?');
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Camiseta Los Gauchos</h1>
          <p className="text-xl text-gray-600">
            Llevá los colores del club con la camiseta oficial de Los Gauchos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Imagen */}
          <Card>
            <CardContent className="pt-6">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400 text-center p-8">
                  Imagen de la camiseta pendiente
                  <br />
                  <span className="text-sm">Se mostrará aquí cuando esté disponible</span>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Info y compra */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Camiseta Oficial</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Descripción</h3>
                  <p className="text-gray-700">
                    Camiseta oficial del club Los Gauchos con los colores y el escudo del equipo.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Precio</h3>
                  <p className="text-gray-700">
                    A definir por la asociación
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Talles disponibles</h3>
                  <p className="text-gray-700">
                    A definir por la asociación
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Forma de compra</h3>
                  <p className="text-gray-700 mb-4">
                    Por ahora, las compras se realizan contactando directamente por WhatsApp. 
                    Próximamente habrá una tienda virtual.
                  </p>
                </div>

                <Button onClick={handleWhatsApp} size="lg" className="w-full">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Comprar por WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Al contactar por WhatsApp, indicá tu talle preferido y te informaremos 
                  sobre disponibilidad y formas de pago.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
