import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, HelpCircle } from "lucide-react";

const Dashboard = () => {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answer, setAnswer] = useState<boolean | null>(null);
  const { toast } = useToast();

  const handleAnswer = (response: boolean) => {
    setAnswer(response);
    setHasAnswered(true);
    toast({
      title: "Respuesta registrada",
      description: `Tu respuesta "${response ? 'Sí' : 'No'}" ha sido guardada correctamente`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header 
        isAuthenticated={true} 
        userName="Juan Pérez" 
        onLogout={() => window.location.href = "/"} 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Dashboard del Usuario
            </h1>
            <p className="text-muted-foreground text-lg">
              Participa en la consulta empresarial actual
            </p>
          </div>

          <Card className="shadow-elegant border-0">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-primary rounded-lg shadow-soft mb-4 mx-auto">
                <HelpCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Consulta Empresarial</CardTitle>
              <CardDescription>
                Tu opinión es importante para el desarrollo del sector
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  ¿Considera que el gremio debería implementar nuevas políticas 
                  de sostenibilidad ambiental para todas las empresas asociadas?
                </h3>
              </div>

              {!hasAnswered ? (
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="success"
                    size="lg"
                    onClick={() => handleAnswer(true)}
                    className="flex-1 max-w-xs"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Sí
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => handleAnswer(false)}
                    className="flex-1 max-w-xs"
                  >
                    No
                  </Button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-foreground">
                      Tu respuesta: <span className="text-primary">{answer ? "Sí" : "No"}</span>
                    </p>
                    <p className="text-muted-foreground">
                      Gracias por participar en la consulta
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;