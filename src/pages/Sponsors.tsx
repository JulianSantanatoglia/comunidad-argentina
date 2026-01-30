import { useState } from 'react';
import { Building2, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Textarea } from '../components/ui/Textarea';
import { sponsors } from '../data/sponsors';
import { siteConfig } from '../constants/siteConfig';

export const Sponsors = () => {
  const [formData, setFormData] = useState({
    empresa: '',
    contacto: '',
    telefono: '',
    email: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con backend o enviar por email
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Building2 className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Sponsors</h1>
          <p className="text-xl text-gray-600">
            Empresas y organizaciones que apoyan nuestra comunidad
          </p>
        </div>

        {/* Sponsors actuales */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="flex items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quiero ser sponsor */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Quiero ser sponsor</CardTitle>
              <CardDescription>
                Apoyá nuestra comunidad y llegá a un público comprometido
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="font-semibold mb-2">Beneficios de ser sponsor</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Visibilidad en nuestra web y redes sociales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Presencia en eventos y actividades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span>Apoyo a una causa comunitaria</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700">
                  <strong>Planes y precios:</strong> Trabajamos con propuestas a medida según 
                  las necesidades de cada empresa. Contactanos para conocer las opciones disponibles.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="empresa">Nombre de la empresa *</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contacto">Persona de contacto *</Label>
                    <Input
                      id="contacto"
                      name="contacto"
                      value={formData.contacto}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Contanos sobre tu empresa y cómo te gustaría colaborar..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar solicitud
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">¡Gracias por tu interés!</h3>
                  <p className="text-gray-700 mb-4">
                    Tu solicitud ha sido recibida. Te contactaremos pronto para coordinar.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    onClick={() => window.open(siteConfig.contact.whatsappUrl, '_blank')}
                  >
                    <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Contactar por WhatsApp
                    </a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
