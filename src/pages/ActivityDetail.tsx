import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Euro, ArrowLeft, Phone, Mail } from 'lucide-react';
import { activities } from '../data/activities';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { siteConfig } from '../constants/siteConfig';
import { format } from 'date-fns';

export const ActivityDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const activity = activities.find((a) => a.slug === slug);

  if (!activity) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Actividad no encontrada</h1>
        <Button asChild>
          <Link to="/actividades">Volver a actividades</Link>
        </Button>
      </div>
    );
  }

  const contactWhatsApp = () => {
    const message = encodeURIComponent(`Hola! Me interesa participar en: ${activity.title}`);
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const contactEmail = () => {
    const subject = encodeURIComponent(`Consulta: ${activity.title}`);
    const body = encodeURIComponent(`Hola,\n\nMe interesa participar en: ${activity.title}\n\nGracias!`);
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/actividades">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a actividades
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between mb-4">
              <CardTitle className="text-3xl">{activity.title}</CardTitle>
              <Badge variant="primary">{activity.category}</Badge>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {format(new Date(activity.date), "EEEE, d 'de' MMMM 'de' yyyy")}
                  {activity.time && ` a las ${activity.time}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{activity.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Euro className="h-5 w-5" />
                <span>
                  {activity.price === 'gratis' ? 'Gratis' : `${activity.price} EUR`}
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Descripción</h3>
              <p className="text-gray-700 whitespace-pre-line">{activity.description}</p>
            </div>

            {activity.requirements && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Requisitos</h3>
                <p className="text-gray-700">{activity.requirements}</p>
              </div>
            )}

            {activity.capacity && (
              <div>
                <p className="text-sm text-gray-600">
                  Cupos disponibles: {activity.capacity}
                </p>
              </div>
            )}

            <div className="pt-6 border-t">
              <h3 className="text-xl font-semibold mb-4">¿Querés participar?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                {(activity.contactMethod === 'whatsapp' || activity.contactMethod === 'both') && (
                  <Button onClick={contactWhatsApp} className="flex-1">
                    <Phone className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </Button>
                )}
                {(activity.contactMethod === 'email' || activity.contactMethod === 'both') && (
                  <Button onClick={contactEmail} variant="outline" className="flex-1">
                    <Mail className="mr-2 h-5 w-5" />
                    Contactar por Email
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
