import { useState } from 'react';
import { Mail, Phone, Instagram, Music } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
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
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-gray-600">
            Estamos acá para ayudarte. Contactanos por cualquier consulta o sugerencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* WhatsApp */}
          <Card>
            <CardHeader>
              <Phone className="h-10 w-10 text-green-600 mb-4" />
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{siteConfig.contact.whatsapp}</p>
              <Button
                asChild
                onClick={() => window.open(siteConfig.contact.whatsappUrl, '_blank')}
              >
                <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Abrir WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Email */}
          <Card>
            <CardHeader>
              <Mail className="h-10 w-10 text-primary-600 mb-4" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{siteConfig.contact.email}</p>
              <Button
                asChild
                variant="outline"
                onClick={() => window.location.href = siteConfig.contact.emailUrl}
              >
                <a href={siteConfig.contact.emailUrl}>
                  Enviar email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Redes sociales */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Seguinos en redes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Instagram className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Instagram Comunidad</h3>
                  <p className="text-sm text-gray-600 mb-4">@comunidad_argentia_en_almeria</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(siteConfig.social.instagram.comunidadUrl, '_blank')}
                  >
                    <a href={siteConfig.social.instagram.comunidadUrl} target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Instagram className="h-10 w-10 text-pink-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Instagram Club</h3>
                  <p className="text-sm text-gray-600 mb-4">@clubargentinoalmeria</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(siteConfig.social.instagram.clubUrl, '_blank')}
                  >
                    <a href={siteConfig.social.instagram.clubUrl} target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Music className="h-10 w-10 text-black mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">TikTok</h3>
                  <p className="text-sm text-gray-600 mb-4">@comunidad_argentina</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(siteConfig.social.tiktok.url, '_blank')}
                  >
                    <a href={siteConfig.social.tiktok.url} target="_blank" rel="noopener noreferrer">
                      Seguir
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Formulario de contacto */}
        <Card>
          <CardHeader>
            <CardTitle>Formulario de contacto</CardTitle>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
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
                  <Label htmlFor="mensaje">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={6}
                    required
                    placeholder="Escribí tu mensaje aquí..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar mensaje
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  TODO: Integrar con backend. Por ahora se abre el cliente de email.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-700">
                  Tu mensaje se ha abierto en tu cliente de email. Si no se abrió, podés contactarnos directamente.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
