import { useState } from 'react';
import { HandHeart, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Textarea } from '../components/ui/Textarea';

const areas = [
  'Organización de eventos',
  'Comunicación y redes sociales',
  'Deportes (Los Gauchos)',
  'Actividades culturales',
  'Actividades solidarias',
  'Administración',
  'Diseño gráfico',
  'Fotografía',
  'Otro',
];

export const Voluntariado = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    areas: [] as string[],
    disponibilidad: '',
    habilidades: '',
    preferencia: '',
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

  const toggleArea = (area: string) => {
    setFormData({
      ...formData,
      areas: formData.areas.includes(area)
        ? formData.areas.filter(a => a !== area)
        : [...formData.areas, area],
    });
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <HandHeart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Voluntariado</h1>
          <p className="text-xl text-gray-600">
            Sumate como voluntario y ayudá a hacer crecer nuestra comunidad
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Formulario de voluntariado</CardTitle>
            <CardDescription>
              Completá el formulario y te contactaremos para coordinar tu participación
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Label>Áreas de interés *</Label>
                  <p className="text-sm text-gray-500 mb-3">Seleccioná una o más áreas</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {areas.map((area) => (
                      <label
                        key={area}
                        className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.areas.includes(area)}
                          onChange={() => toggleArea(area)}
                          className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-sm">{area}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="disponibilidad">Disponibilidad *</Label>
                  <select
                    id="disponibilidad"
                    name="disponibilidad"
                    value={formData.disponibilidad}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    <option value="">Seleccionar...</option>
                    <option value="fines-semana">Fines de semana</option>
                    <option value="entre-semana">Entre semana</option>
                    <option value="ambos">Ambos</option>
                    <option value="eventos">Solo eventos específicos</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="habilidades">Habilidades o experiencia</Label>
                  <Textarea
                    id="habilidades"
                    name="habilidades"
                    value={formData.habilidades}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Contanos sobre tus habilidades, experiencia o formación relevante..."
                  />
                </div>

                <div>
                  <Label htmlFor="preferencia">Preferencia de participación</Label>
                  <Textarea
                    id="preferencia"
                    name="preferencia"
                    value={formData.preferencia}
                    onChange={handleChange}
                    rows={3}
                    placeholder="¿Cómo te gustaría participar? ¿Qué te motiva a ser voluntario?"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Enviar solicitud
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <Check className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">¡Gracias por tu interés!</h2>
                <p className="text-gray-700 mb-6">
                  Tu solicitud de voluntariado ha sido recibida. Te contactaremos pronto para coordinar tu participación.
                </p>
                <p className="text-sm text-gray-500">
                  Mientras tanto, podés seguirnos en nuestras redes sociales para estar al tanto de las actividades.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
