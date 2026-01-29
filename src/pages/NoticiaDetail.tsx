import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { posts } from '../data/posts';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { format } from 'date-fns';

export const NoticiaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Noticia no encontrada</h1>
        <Button asChild>
          <Link to="/noticias">Volver a noticias</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/noticias">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a noticias
          </Link>
        </Button>

        <Card>
          {post.cover && (
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-t-xl"
            />
          )}
          <CardHeader>
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {format(new Date(post.date), "EEEE, d 'de' MMMM 'de' yyyy")}
              </span>
              {post.author && (
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
              )}
            </div>
            <CardTitle className="text-3xl">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
