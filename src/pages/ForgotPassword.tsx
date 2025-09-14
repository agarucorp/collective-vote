import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthCard } from "@/components/auth/AuthCard";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setEmailSent(true);
      toast({
        title: "Email enviado",
        description: "Revisa tu bandeja de entrada para restablecer tu contraseña",
      });
      setIsLoading(false);
    }, 2000);
  };

  if (emailSent) {
    return (
      <AuthCard
        title="Email Enviado"
        description="Sigue las instrucciones en tu correo"
      >
        <div className="text-center space-y-6">
          <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-full">
            <Mail className="h-8 w-8 text-accent" />
          </div>
          
          <div className="space-y-2">
            <p className="text-foreground">
              Hemos enviado un enlace de recuperación a:
            </p>
            <p className="font-medium text-primary">{email}</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Si no recibes el email en unos minutos, revisa tu carpeta de spam 
              o intenta con otra dirección de correo.
            </p>
            
            <Button 
              variant="outline" 
              onClick={() => setEmailSent(false)}
              className="w-full"
            >
              Intentar con otro email
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link 
            to="/login" 
            className="inline-flex items-center text-sm text-primary hover:text-primary-glow transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio de sesión
          </Link>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard
      title="Recuperar Contraseña"
      description="Ingresa tu email para recibir instrucciones"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="tu@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <p className="text-xs text-muted-foreground">
            Te enviaremos un enlace para crear una nueva contraseña
          </p>
        </div>

        <Button type="submit" variant="hero" className="w-full" disabled={isLoading || !email}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              Enviar Enlace
            </>
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link 
          to="/login" 
          className="inline-flex items-center text-sm text-primary hover:text-primary-glow transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio de sesión
        </Link>
      </div>
    </AuthCard>
  );
};

export default ForgotPassword;