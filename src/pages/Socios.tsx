import { useState } from 'react';
import { Check, CreditCard, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { siteConfig } from '../constants/siteConfig';

export const Socios = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    documento: '',
    direccion: '',
    telefono: '',
    email: '',
    nacimiento: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con backend o enviar por email
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openBizum = () => {
    const message = encodeURIComponent(`Pago cuota anual socio - ${formData.nombre || 'Nuevo socio'}`);
    window.open(`https://wa.me/${siteConfig.bizum.phone.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hacerse Socio</h1>
          <p className="text-xl text-gray-600">
            Formá parte de nuestra comunidad y apoyá nuestras actividades
          </p>
        </div>

        {/* Beneficios */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Beneficios de ser socio</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-gray-700 mb-4">
                A definir por la asociación. Los beneficios incluirán descuentos en actividades, 
                acceso prioritario a eventos, y más.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Descuentos en actividades (A definir)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Acceso prioritario a eventos (A definir)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Carnet digital de socio</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Participación en decisiones de la asociación</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Cuota */}
        <div className="mb-12">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle>Cuota Anual</CardTitle>
              <CardDescription>
                La cuota anual es de <strong className="text-blue-600">{siteConfig.membership.annualFee} EUR</strong>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                La cuota se paga una vez al año y te da acceso a todos los beneficios de ser socio.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Formulario */}
        {!submitted ? (
          <Card>
            <CardHeader>
              <CardTitle>Formulario de Alta</CardTitle>
              <CardDescription>
                Completá tus datos para asociarte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="documento">Documento (DNI/Pasaporte) *</Label>
                  <Input
                    id="documento"
                    name="documento"
                    value={formData.documento}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="direccion">Dirección en Almería *</Label>
                  <Input
                    id="direccion"
                    name="direccion"
                    value={formData.direccion}
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
                  <Label htmlFor="nacimiento">Fecha de nacimiento *</Label>
                  <Input
                    id="nacimiento"
                    name="nacimiento"
                    type="date"
                    value={formData.nacimiento}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <Check className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">¡Solicitud enviada!</h2>
                <p className="text-gray-700 mb-6">
                  Tu solicitud ha sido recibida. Te contactaremos pronto para completar el proceso.
                </p>

                <div className="bg-white rounded-lg p-6 mb-6">
                  <h3 className="font-semibold mb-4">Pasos siguientes:</h3>
                  <ol className="text-left space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">1.</span>
                      <span>Realizá el pago de la cuota anual de {siteConfig.membership.annualFee} EUR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">2.</span>
                      <span>Podés pagar por Bizum o en efectivo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-blue-600">3.</span>
                      <span>Una vez confirmado el pago, recibirás tu número de socio y carnet digital</span>
                    </li>
                  </ol>
                </div>

                <div className="space-y-3">
                  <Button onClick={openBizum} size="lg" className="w-full">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Pagar por Bizum
                  </Button>
                  <p className="text-sm text-gray-600">
                    O contactanos por WhatsApp para coordinar pago en efectivo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Información de pago */}
        {!submitted && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Formas de pago</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-blue-600" />
                  Bizum
                </h3>
                <p className="text-sm text-gray-600">
                  Enviá el pago al número: <strong>{siteConfig.bizum.phone}</strong>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Indicá en el concepto: "Cuota anual socio - [Tu nombre]"
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-blue-600" />
                  Efectivo
                </h3>
                <p className="text-sm text-gray-600">
                  Contactanos por WhatsApp para coordinar el pago en efectivo en nuestras actividades o eventos.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
