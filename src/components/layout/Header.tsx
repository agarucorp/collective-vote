import { Button } from "@/components/ui/button";
import { Building2, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isAuthenticated?: boolean;
  isAdmin?: boolean;
  userName?: string;
  onLogout?: () => void;
}

export const Header = ({ isAuthenticated = false, isAdmin = false, userName, onLogout }: HeaderProps) => {
  const location = useLocation();

  return (
    <header className="bg-card border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-soft group-hover:shadow-glow transition-all duration-300">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Gremio Empresarial</h1>
              <p className="text-sm text-muted-foreground">Panel Corporativo</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className={`px-4 py-2 rounded-md transition-colors ${
                      location.pathname === "/admin"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Panel Admin
                  </Link>
                )}
                <Link
                  to="/dashboard"
                  className={`px-4 py-2 rounded-md transition-colors ${
                    location.pathname === "/dashboard"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Dashboard
                </Link>
                
                <div className="flex items-center space-x-3 pl-4 border-l border-border">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-foreground">{userName}</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={onLogout}>
                    <LogOut className="h-4 w-4" />
                    Salir
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-3">
                <Link to="/login">
                  <Button variant="ghost">Iniciar Sesión</Button>
                </Link>
                <Link to="/register">
                  <Button variant="hero">Registrarse</Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};