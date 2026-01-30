import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, MapPin, Euro } from 'lucide-react';
import { activities } from '../data/activities';
import type { ActivityCategory } from '../types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { format } from 'date-fns';

const categories: { value: ActivityCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'Todas' },
  { value: 'cultura', label: 'Cultura' },
  { value: 'deporte', label: 'Deporte' },
  { value: 'integracion', label: 'Integración' },
  { value: 'solidarias', label: 'Solidarias' },
  { value: 'infantiles', label: 'Infantiles' },
];

export const Activities = () => {
  const [selectedCategory, setSelectedCategory] = useState<ActivityCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredActivities = activities.filter((activity) => {
    const matchesCategory = selectedCategory === 'all' || activity.category === selectedCategory;
    const matchesSearch = activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: ActivityCategory) => {
    const colors = {
      cultura: 'primary',
      deporte: 'success',
      integracion: 'default',
      solidarias: 'warning',
      infantiles: 'primary',
    };
    return colors[category] || 'default';
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Actividades</h1>
          <p className="text-lg text-gray-600">
            Participá en nuestras actividades y eventos comunitarios
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar actividades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de actividades */}
        {filteredActivities.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No se encontraron actividades con los filtros seleccionados.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredActivities.map((activity) => (
              <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                    <Badge variant={getCategoryColor(activity.category) as any}>
                      {categories.find(c => c.value === activity.category)?.label}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(activity.date), "d MMM yyyy")}
                      {activity.time && ` • ${activity.time}`}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {activity.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{activity.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1 font-medium">
                      {activity.price === 'gratis' ? (
                        <span className="text-green-600">Gratis</span>
                      ) : (
                        <>
                          <Euro className="h-4 w-4" />
                          {activity.price}
                        </>
                      )}
                    </span>
                  </div>
                  <Button asChild size="sm" variant="outline" className="w-full">
                    <Link to={`/actividades/${activity.slug}`}>Ver detalles</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
