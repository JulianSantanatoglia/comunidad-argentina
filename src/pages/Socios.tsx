import { useState } from 'react';
import { Check, CreditCard, Smartphone, Heart, Users, Star, Gift, Shield, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { siteConfig } from '../constants/siteConfig';
import { Link } from 'react-router-dom';

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

  const benefits = [
    {
      icon: Gift,
      title: 'Descuentos en actividades',
      description: 'Ahorrá en eventos y actividades organizadas por la asociación',
    },
    {
      icon: Star,
      title: 'Acceso prioritario',
      description: 'Reservá tu lugar antes que el público general en eventos',
    },
    {
      icon: Users,
      title: 'Carnet digital de socio',
      description: 'Tu identificación como miembro de la comunidad',
    },
    {
      icon: Shield,
      title: 'Participación activa',
      description: 'Formá parte de las decisiones y el crecimiento de la asociación',
    },
  ];

  return (
    <div className="py-12 bg-white relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Hacerse</span>{' '}
              <span className="text-blue-600">Socio</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Formá parte de nuestra comunidad y apoyá nuestras actividades. Juntos construimos un espacio de encuentro, contención y pertenencia.
            </p>
          </div>

          {/* Beneficios */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-900">Beneficios de ser</span>{' '}
                <span className="text-blue-600">socio</span>
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mb-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2 text-lg">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Cuota */}
          <div className="mb-12">
            <Card className="bg-gradient-to-br from-blue-50 via-sky-50 to-white border-l-4 border-l-blue-500 shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-1">Cuota Anual</CardTitle>
                    <CardDescription className="text-base">
                      Acceso a todos los beneficios durante un año completo
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-bold text-blue-600">
                    {siteConfig.membership.annualFee}
                  </span>
                  <span className="text-xl text-gray-600">EUR</span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  La cuota se paga una vez al año y te da acceso a todos los beneficios de ser socio. 
                  Podés pagar por Bizum o en efectivo en nuestros eventos.
                </p>
              </div>
            </Card>
          </div>

          {/* Formulario */}
          {!submitted ? (
            <Card className="shadow-xl border-l-4 border-l-blue-500 overflow-hidden mb-8">
              <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-white p-6 border-b border-gray-200">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Formulario de Alta</h2>
                <p className="text-gray-600">Completá tus datos para asociarte a nuestra comunidad</p>
              </div>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="nombre" className="text-gray-700 font-medium">
                        Nombre completo *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="documento" className="text-gray-700 font-medium">
                        Documento (DNI/Pasaporte) *
                      </Label>
                      <Input
                        id="documento"
                        name="documento"
                        value={formData.documento}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="Número de documento"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="direccion" className="text-gray-700 font-medium">
                      Dirección en Almería *
                    </Label>
                    <Input
                      id="direccion"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                      placeholder="Tu dirección completa"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="telefono" className="text-gray-700 font-medium">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="+34 000 000 000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nacimiento" className="text-gray-700 font-medium">
                      Fecha de nacimiento *
                    </Label>
                    <Input
                      id="nacimiento"
                      name="nacimiento"
                      type="date"
                      value={formData.nacimiento}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Enviar solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-l-green-500 shadow-xl mb-8">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-6">
                    <Check className="h-10 w-10 text-green-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">¡Solicitud enviada!</h2>
                  <p className="text-gray-700 mb-8 text-lg">
                    Tu solicitud ha sido recibida. Te contactaremos pronto para completar el proceso.
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
                    <h3 className="font-semibold mb-6 text-lg text-gray-900">Pasos siguientes:</h3>
                    <ol className="text-left space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-blue-600 text-xl flex-shrink-0">1.</span>
                        <span className="pt-0.5">Realizá el pago de la cuota anual de <strong className="text-blue-600">{siteConfig.membership.annualFee} EUR</strong></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-blue-600 text-xl flex-shrink-0">2.</span>
                        <span className="pt-0.5">Podés pagar por Bizum o en efectivo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="font-bold text-blue-600 text-xl flex-shrink-0">3.</span>
                        <span className="pt-0.5">Una vez confirmado el pago, recibirás tu número de socio y carnet digital</span>
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-3">
                    <Button onClick={openBizum} size="lg" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md">
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
            <Card className="shadow-lg border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="text-2xl">Formas de pago</CardTitle>
                <CardDescription>
                  Elegí la opción que más te convenga
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <Smartphone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-gray-900">Bizum</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Enviá el pago al número: <strong className="text-gray-900">{siteConfig.bizum.phone}</strong>
                    </p>
                    <p className="text-xs text-gray-500">
                      Indicá en el concepto: "Cuota anual socio - [Tu nombre]"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2 text-gray-900">Efectivo</h3>
                    <p className="text-sm text-gray-600">
                      Contactanos por WhatsApp para coordinar el pago en efectivo en nuestras actividades o eventos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* CTA Final con Donar */}
          <div className="mt-12 text-center py-10 px-6 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-white border border-blue-100 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-gray-600 mb-4 text-sm">
                ¿Querés apoyar de otra forma?
              </p>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
              >
                <Link to="/donaciones">
                  <Heart className="h-4 w-4 mr-2 fill-red-500" />
                  Donar ♥
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
