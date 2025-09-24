import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  Clock, 
  AlertTriangle, 
  MapPin, 
  Camera,
  Shield,
  BarChart3
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Dashboard = () => {
  const { t } = useLanguage();
  
  const stats = [
    { 
      title: t('current.devotees'), 
      value: "1,247", 
      change: "+12%", 
      icon: Users,
      color: "text-primary" 
    },
    { 
      title: t('todays.tickets'), 
      value: "2,850", 
      change: "+8%", 
      icon: TrendingUp,
      color: "text-secondary" 
    },
    { 
      title: t('avg.wait.time'), 
      value: `18 ${t('minutes')}`, 
      change: `-5 ${t('minutes')}`, 
      icon: Clock,
      color: "text-tertiary" 
    },
    { 
      title: t('alerts'), 
      value: "3", 
      change: t('active'), 
      icon: AlertTriangle,
      color: "text-destructive" 
    },
  ];

  const getCrowdAlerts = (t: (key: string) => string) => [
    { area: t('main.darshan'), level: "high", time: `2 ${t('minutes.ago')}` },
    { area: t('entry.gate'), level: "medium", time: `5 ${t('minutes.ago')}` },
    { area: t('parking'), level: "medium", time: `8 ${t('minutes.ago')}` },
  ];

  const crowdAlerts = getCrowdAlerts(t);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case "high": return t('high.crowd');
      case "medium": return t('medium.crowd');
      case "low": return t('low.crowd');
      default: return level;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-temple bg-clip-text text-transparent">
            {t('authority.dashboard')}
          </h1>
          <p className="text-muted-foreground mt-1">
            {t('realtime.monitoring')}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="peaceful" size="sm">
            <Camera className="w-4 h-4" />
            {t('live.view')}
          </Button>
          <Button variant="outline" size="sm">
            <BarChart3 className="w-4 h-4" />
            {t('reports')}
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-peaceful border-primary/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.change}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Crowd Alerts */}
        <Card className="shadow-divine border-secondary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              {t('crowd.alerts')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {crowdAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{alert.area}</p>
                    <p className="text-sm text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
                <Badge className={getLevelColor(alert.level)}>
                  {getLevelText(alert.level)}
                </Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              {t('view.all.alerts')}
            </Button>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-temple border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              {t('quick.actions')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Button variant="temple" className="h-16 flex-col">
                <Users className="w-6 h-6 mb-1" />
                <span className="text-xs">{t('crowd.control')}</span>
              </Button>
              <Button variant="divine" className="h-16 flex-col">
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-xs">{t('camera.view')}</span>
              </Button>
              <Button variant="peaceful" className="h-16 flex-col">
                <AlertTriangle className="w-6 h-6 mb-1" />
                <span className="text-xs">{t('emergency')}</span>
              </Button>
              <Button variant="outline" className="h-16 flex-col">
                <BarChart3 className="w-6 h-6 mb-1" />
                <span className="text-xs">{t('analytics')}</span>
              </Button>
            </div>
            
            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-3">{t('todays.activity')}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{t('morning.crowd')}:</span>
                  <span className="font-medium">850 {t('devotees')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('afternoon.crowd')}:</span>
                  <span className="font-medium">1,200 {t('devotees')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('evening.crowd')}:</span>
                  <span className="font-medium">1,100 {t('devotees')}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};