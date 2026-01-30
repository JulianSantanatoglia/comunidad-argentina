import { useState } from 'react';
import { Mail, Phone, Instagram, Music, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Textarea } from '../components/ui/Textarea';
import { siteConfig } from '../constants/siteConfig';

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con backend o enviar por email
    const subject = encodeURIComponent(`Contacto: ${formData.nombre}`);
    const body = encodeURIComponent(`Nombre: ${formData.nombre}\nEmail: ${formData.email}\n\nMensaje:\n${formData.mensaje}`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Contacto</span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos acá para ayudarte. Contactanos por cualquier consulta o sugerencia.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Información de contacto - Izquierda */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <Phone className="h-7 w-7 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                        <p className="text-gray-600 mb-3">{siteConfig.contact.whatsapp}</p>
                        <Button
                          asChild
                          size="sm"
                          className="bg-green-600 hover:bg-green-700 text-white"
                          onClick={() => window.open(siteConfig.contact.whatsappUrl, '_blank')}
                        >
                          <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                            Abrir WhatsApp
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-sky-200 flex items-center justify-center">
                        <Mail className="h-7 w-7 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600 mb-3 break-all">{siteConfig.contact.email}</p>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          onClick={() => window.location.href = siteConfig.contact.emailUrl}
                        >
                          <a href={siteConfig.contact.emailUrl}>
                            Enviar email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Redes sociales */}
              <Card className="border-l-4 border-l-blue-500 shadow-lg">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-6">Seguinos en redes</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={siteConfig.social.instagram.comunidadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 to-purple-200 hover:from-pink-200 hover:to-purple-300 transition-all duration-300 hover:scale-110 shadow-md"
                    >
                      <Instagram className="h-7 w-7 text-pink-600 group-hover:text-pink-700" />
                    </a>
                    <a
                      href={siteConfig.social.instagram.clubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-pink-100 to-purple-200 hover:from-pink-200 hover:to-purple-300 transition-all duration-300 hover:scale-110 shadow-md"
                    >
                      <Instagram className="h-7 w-7 text-pink-600 group-hover:text-pink-700" />
                    </a>
                    <a
                      href={siteConfig.social.tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300 hover:scale-110 shadow-md"
                    >
                      <Music className="h-7 w-7 text-gray-800 group-hover:text-gray-900" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulario - Derecha */}
            <div>
              <Card className="shadow-xl border-l-4 border-l-blue-500 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-white p-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Enviános un mensaje</h2>
                  <p className="text-gray-600 text-sm">Completá el formulario y te responderemos a la brevedad</p>
                </div>
                <CardContent className="pt-6">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="nombre" className="text-gray-700 font-medium">
                          Nombre *
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

                      <div className="space-y-2">
                        <Label htmlFor="mensaje" className="text-gray-700 font-medium">
                          Mensaje *
                        </Label>
                        <Textarea
                          id="mensaje"
                          name="mensaje"
                          value={formData.mensaje}
                          onChange={handleChange}
                          rows={6}
                          required
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-colors resize-none"
                          placeholder="Escribí tu mensaje aquí..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Enviar mensaje
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 mb-6">
                        <Mail className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">¡Mensaje enviado!</h3>
                      <p className="text-gray-600 mb-6">
                        Tu mensaje se ha abierto en tu cliente de email. Si no se abrió, podés contactarnos directamente.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ nombre: '', email: '', mensaje: '' });
                        }}
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
