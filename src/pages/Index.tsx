import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Calendar, 
  Video, 
  BarChart3, 
  Ticket,
  Users,
  Clock,
  AlertTriangle,
  Smartphone,
  QrCode,
  Shield
} from "lucide-react";
import { TempleMap } from "@/components/TempleMap";
import { TicketBooking } from "@/components/TicketBooking";
import { Dashboard } from "@/components/Dashboard";
import { LiveDarshan } from "@/components/LiveDarshan";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

// Removed missing asset import
// import templeHeroImage from "@/assets/temple-hero.jpg";

type ActiveTab = "map" | "booking" | "dashboard" | "darshan";

const Index = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ActiveTab>("map");

  const features = [
    {
      icon: QrCode,
      title: t('qr.ticket.system'),
      description: t('qr.description'),
    },
    {
      icon: MapPin,
      title: t('interactive.map'),
      description: t('map.description'),
    },
    {
      icon: Video,
      title: t('live.darshan.feature'),
      description: t('darshan.description'),
    },
    {
      icon: Shield,
      title: t('sos.safety'),
      description: t('sos.description'),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://wallpaperaccess.com/full/7201936.jpg" 
            alt="Temple Complex" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="flex justify-center mb-4">
              <Badge className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">
                {t('digital.temple')}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {t('temple.management')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button variant="temple" size="xl" onClick={() => setActiveTab("booking")}>
                <Ticket className="w-5 h-5" />
                {t('book.ticket')}
              </Button>
              <Button variant="divine" size="xl" onClick={() => setActiveTab("darshan")}>
                <Video className="w-5 h-5" />
                {t('live.darshan')}
              </Button>
            </div>
            <div className="flex justify-center">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={activeTab === "map" ? "temple" : "ghost"}
              onClick={() => setActiveTab("map")}
              className="flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              {t('temple.map')}
            </Button>
            <Button
              variant={activeTab === "booking" ? "temple" : "ghost"}
              onClick={() => setActiveTab("booking")}
              className="flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              {t('ticket.booking')}
            </Button>
            <Button
              variant={activeTab === "dashboard" ? "temple" : "ghost"}
              onClick={() => setActiveTab("dashboard")}
              className="flex items-center gap-2"
            >
              <BarChart3 className="w-4 h-4" />
              {t('dashboard')}
            </Button>
            <Button
              variant={activeTab === "darshan" ? "temple" : "ghost"}
              onClick={() => setActiveTab("darshan")}
              className="flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              {t('live.darshan')}
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === "map" && <TempleMap />}
          {activeTab === "booking" && <TicketBooking />}
          {activeTab === "dashboard" && <Dashboard />}
          {activeTab === "darshan" && <LiveDarshan />}
        </div>
      </section>

      {/* Features Section */}
      {activeTab === "map" && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-temple bg-clip-text text-transparent">
                {t('main.features')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('features.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center shadow-peaceful hover:shadow-divine transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <feature.icon className="w-12 h-12 mx-auto text-primary mb-4" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Flow */}
      {activeTab === "booking" && (
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-temple bg-clip-text text-transparent">
                {t('darshan.process')}
              </h2>
              <p className="text-muted-foreground">{t('simple.steps')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-temple rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('step1.book')}</h3>
                <p className="text-muted-foreground text-sm">{t('step1.desc')}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-divine rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('step2.scan')}</h3>
                <p className="text-muted-foreground text-sm">{t('step2.desc')}</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-peaceful rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">{t('step3.darshan')}</h3>
                <p className="text-muted-foreground text-sm">{t('step3.desc')}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SOS Section */}
      <section className="py-12 bg-destructive/5 border-t border-destructive/20">
        <div className="container mx-auto px-4 text-center">
          <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">{t('emergency.help')}</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t('emergency.desc')}
          </p>
          <Button variant="emergency" size="lg">
            <AlertTriangle className="w-5 h-5" />
            {t('emergency.sos')}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">{t('temple.management')}</h4>
              <p className="text-background/80 text-sm">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">{t('services')}</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>{t('online.booking')}</li>
                <li>{t('live.streaming')}</li>
                <li>{t('crowd.monitoring')}</li>
                <li>{t('emergency.support')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">{t('contact')}</h4>
              <div className="space-y-2 text-sm text-background/80">
                <p>{t('helpline')}</p>
                <p>{t('email')}</p>
                <p>{t('support.24x7')}</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-background/20" />
          
          <div className="text-center text-sm text-background/60">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;