import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { BarChart3, Shield, Users, Vote } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Plataforma de
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Consulta </span>
            Empresarial
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sistema profesional para la recolección de opiniones y análisis de datos 
            del gremio empresarial. Participa en consultas importantes y visualiza 
            resultados en tiempo real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Users className="mr-2 h-5 w-5" />
                Unirse al Gremio
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Por qué usar nuestra plataforma?
          </h2>
          <p className="text-muted-foreground text-lg">
            Herramientas profesionales para la toma de decisiones empresariales
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-primary rounded-lg shadow-soft mb-4 mx-auto">
                <Vote className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle>Consultas Simples</CardTitle>
              <CardDescription>
                Participa en consultas importantes con respuestas claras y directas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Interfaz intuitiva y fácil de usar</li>
                <li>• Respuestas Sí/No para máxima claridad</li>
                <li>• Participación anónima y segura</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-accent rounded-lg shadow-soft mb-4 mx-auto">
                <BarChart3 className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Análisis en Tiempo Real</CardTitle>
              <CardDescription>
                Visualiza resultados y tendencias con gráficos profesionales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gráficos de torta interactivos</li>
                <li>• Estadísticas actualizadas al instante</li>
                <li>• Dashboard administrativo completo</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0 hover:shadow-elegant transition-all duration-300">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-primary rounded-lg shadow-soft mb-4 mx-auto">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle>Seguridad Total</CardTitle>
              <CardDescription>
                Autenticación segura y protección de datos empresariales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Autenticación con email verificado</li>
                <li>• Roles de usuario diferenciados</li>
                <li>• Datos encriptados y seguros</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-card rounded-2xl shadow-elegant p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            ¿Listo para participar?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Únete a otros empresarios en la toma de decisiones importantes 
            para el desarrollo del sector.
          </p>
          <Link to="/register">
            <Button variant="hero" size="lg">
              Comenzar Ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Gremio Empresarial. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;