import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { posts } from '../data/posts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { format } from 'date-fns';

export const Noticias = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Noticias</h1>
          <p className="text-lg text-gray-600">
            Mantenete al día con las últimas novedades de la asociación
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No hay noticias publicadas aún.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                {post.cover && (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(post.date), "d MMM yyyy")}
                    </span>
                    {post.author && (
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link to={`/noticias/${post.slug}`}>Leer más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            TODO: Migrar a sistema de blog con MDX/Markdown para facilitar la publicación de posts.
          </p>
        </div>
      </div>
    </div>
  );
};
