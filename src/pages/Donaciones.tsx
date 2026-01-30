import { useState } from 'react';
import { Heart, Euro, TrendingUp, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { siteConfig } from '../constants/siteConfig';
import { transparencyRecords } from '../data/transparency';
import { format } from 'date-fns';

export const Donaciones = () => {
  const [donationType, setDonationType] = useState<'unique' | 'monthly'>('unique');
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = (amount: number) => {
    const message = encodeURIComponent(
      `Hola! Quiero hacer una ${donationType === 'unique' ? 'donación única' : 'donación mensual'} de ${amount} EUR. ¿Cómo puedo proceder?`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`, '_blank');
  };

  const handleCustomDonate = () => {
    const amount = parseFloat(customAmount);
    if (amount > 0) {
      handleDonate(amount);
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Donaciones</h1>
          <p className="text-xl text-gray-600">
            Tu apoyo nos ayuda a seguir creciendo y organizando actividades para la comunidad
          </p>
        </div>

        {/* Tipos de donación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card
            className={`cursor-pointer transition-all ${
              donationType === 'unique' ? 'ring-2 ring-blue-600' : ''
            }`}
            onClick={() => setDonationType('unique')}
          >
            <CardHeader>
              <CardTitle>Donación Única</CardTitle>
              <CardDescription>
                Apoyá con una donación puntual
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className={`cursor-pointer transition-all ${
              donationType === 'monthly' ? 'ring-2 ring-blue-600' : ''
            }`}
            onClick={() => setDonationType('monthly')}
          >
            <CardHeader>
              <CardTitle>Donación Mensual</CardTitle>
              <CardDescription>
                Apoyá mensualmente con una donación recurrente
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Montos */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Seleccioná el monto</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {siteConfig.donation.amounts.map((amount) => (
                <Button
                  key={amount}
                  variant={selectedAmount === amount ? 'primary' : 'outline'}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount('');
                  }}
                  className="h-16 text-lg"
                >
                  <Euro className="mr-1 h-5 w-5" />
                  {amount}
                </Button>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="custom-amount">O ingresá otro monto</Label>
                <div className="flex gap-2">
                  <Input
                    id="custom-amount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="Ej: 25"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                  />
                  <Button
                    onClick={handleCustomDonate}
                    disabled={!customAmount || parseFloat(customAmount) <= 0}
                  >
                    Donar
                  </Button>
                </div>
              </div>

              {selectedAmount && (
                <Button
                  onClick={() => handleDonate(selectedAmount)}
                  size="lg"
                  className="w-full"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donar {selectedAmount} EUR
                </Button>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-4">
              TODO: Integrar pasarela de pago (Stripe/PayPal) para pagos online. 
              Por ahora, el botón te redirige a WhatsApp para coordinar el pago.
            </p>
          </CardContent>
        </Card>

        {/* Transparencia */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Eye className="h-6 w-6 text-blue-600" />
            <h2 className="text-3xl font-bold">Transparencia</h2>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Registro de donaciones y gastos</CardTitle>
              <CardDescription>
                Mantenemos un registro público de todas las donaciones recibidas y gastos realizados
              </CardDescription>
            </CardHeader>
            <CardContent>
              {transparencyRecords.length === 0 || transparencyRecords[0].amount === 0 ? (
                <div className="text-center py-8">
                  <TrendingUp className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    El registro de transparencia se actualizará próximamente.
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    TODO: Agregar registros reales cuando estén disponibles.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {transparencyRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{record.description}</p>
                        <p className="text-sm text-gray-500">
                          {format(new Date(record.date), "d MMM yyyy")}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${
                          record.type === 'income' ? 'text-green-600' : 'text-blue-600'
                        }`}>
                          {record.type === 'income' ? '+' : '-'}
                          {record.amount} EUR
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Información adicional */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">¿Cómo se utilizan las donaciones?</h3>
            <p className="text-gray-700 text-sm mb-4">
              Las donaciones se utilizan para organizar actividades, mantener el club deportivo, 
              y apoyar iniciativas solidarias de la comunidad.
            </p>
            <p className="text-sm text-gray-600">
              Todas las donaciones son voluntarias y agradecemos cualquier aporte, por pequeño que sea.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
