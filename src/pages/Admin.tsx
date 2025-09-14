import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { BarChart3, Users, TrendingUp } from "lucide-react";

const Admin = () => {
  // Mock data - será reemplazado con datos reales de Supabase
  const data = [
    { name: 'Sí', value: 65, color: '#10b981' },
    { name: 'No', value: 35, color: '#ef4444' }
  ];

  const stats = {
    totalResponses: 150,
    yesPercentage: 65,
    noPercentage: 35
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      <Header 
        isAuthenticated={true} 
        isAdmin={true}
        userName="Admin" 
        onLogout={() => window.location.href = "/"} 
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Panel de Administración</h1>
          <p className="text-muted-foreground text-lg">Resultados de la consulta empresarial</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Respuestas</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalResponses}</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Respuestas "Sí"</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.yesPercentage}%</div>
            </CardContent>
          </Card>

          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Respuestas "No"</CardTitle>
              <BarChart3 className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{stats.noPercentage}%</div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-elegant border-0">
          <CardHeader>
            <CardTitle>Distribución de Respuestas</CardTitle>
            <CardDescription>
              Gráfico de torta mostrando el porcentaje de respuestas Sí vs No
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;