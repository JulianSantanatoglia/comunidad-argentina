import { useState } from 'react';
import { Scale, Video, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Textarea } from '../components/ui/Textarea';
import { siteConfig } from '../constants/siteConfig';
import type { LawyerCategory } from '../types';

const categories: { value: LawyerCategory; label: string; description: string }[] = [
  {
    value: 'extranjeria',
    label: 'Extranjería',
    description: 'Trámites de residencia, nacionalidad, visados',
  },
  {
    value: 'tramites',
    label: 'Trámites',
    description: 'Documentación, certificados, legalizaciones',
  },
  {
    value: 'laboral',
    label: 'Laboral',
    description: 'Contratos, despidos, derechos laborales',
  },
  {
    value: 'familiar',
    label: 'Familiar',
    description: 'Divorcios, custodia, herencias',
  },
];

export const Abogado = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    category: '' as LawyerCategory | '',
    modality: 'online' as 'online' | 'presencial',
    urgency: 'medium' as 'low' | 'medium' | 'high',
    notas: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con backend o enviar por email
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola! Necesito una consulta legal.\n\n` +
      `Categoría: ${categories.find(c => c.value === formData.category)?.label || 'No especificada'}\n` +
      `Modalidad: ${formData.modality === 'online' ? 'Online' : 'Presencial'}\n` +
      `Urgencia: ${formData.urgency === 'high' ? 'Alta' : formData.urgency === 'medium' ? 'Media' : 'Baja'}\n` +
      (formData.notas ? `\nNotas: ${formData.notas}` : '')
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <Scale className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Asesoramiento Legal</h1>
          <p className="text-xl text-gray-600">
            Consultas legales especializadas para la comunidad argentina en Almería
          </p>
        </div>

        {/* Categorías */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Áreas de consulta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <Card key={category.value}>
                <CardHeader>
                  <CardTitle className="text-lg">{category.label}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Información */}
        <Card className="mb-12 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle>Información importante</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-gray-700">
            <p>
              <strong>Modalidad:</strong> Online o presencial (a definir según disponibilidad)
            </p>
            <p>
              <strong>Duración:</strong> A definir por la asociación
            </p>
            <p>
              <strong>Costo:</strong> A definir por la asociación
            </p>
            <p>
              <strong>Disponibilidad:</strong> A definir por la asociación
            </p>
          </CardContent>
        </Card>

        {/* Formulario */}
        {!submitted ? (
          <Card>
            <CardHeader>
              <CardTitle>Solicitar cita</CardTitle>
              <CardDescription>
                Completá el formulario y te contactaremos para coordinar la consulta
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
                  <Label htmlFor="category">Categoría de consulta *</Label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    <option value="">Seleccionar...</option>
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="modality">Modalidad preferida *</Label>
                  <div className="flex gap-4 mt-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="modality"
                        value="online"
                        checked={formData.modality === 'online'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary-600"
                      />
                      <Video className="h-4 w-4" />
                      <span>Online</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="modality"
                        value="presencial"
                        checked={formData.modality === 'presencial'}
                        onChange={handleChange}
                        className="h-4 w-4 text-primary-600"
                      />
                      <MapPin className="h-4 w-4" />
                      <span>Presencial</span>
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="urgency">Urgencia *</Label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                  >
                    <option value="low">Baja</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="notas">Notas adicionales</Label>
                  <Textarea
                    id="notas"
                    name="notas"
                    value={formData.notas}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describí brevemente tu consulta..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    Enviar solicitud
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleWhatsApp}
                    className="flex-1"
                  >
                    Contactar por WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-green-50 border-green-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">¡Solicitud enviada!</h2>
                <p className="text-gray-700 mb-6">
                  Tu solicitud de consulta ha sido recibida. Te contactaremos pronto para coordinar la cita.
                </p>
                <Button asChild variant="outline">
                  <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
