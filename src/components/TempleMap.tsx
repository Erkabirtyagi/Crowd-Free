import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CrowdArea {
  id: string;
  name: string;
  crowdLevel: "low" | "medium" | "high";
  position: { x: number; y: number };
  currentCount: number;
  maxCapacity: number;
}

const getCrowdAreas = (t: (key: string) => string): CrowdArea[] => [
  { id: "main-darshan", name: t('main.darshan'), crowdLevel: "high", position: { x: 45, y: 40 }, currentCount: 180, maxCapacity: 200 },
  { id: "entry-gate", name: t('entry.gate'), crowdLevel: "medium", position: { x: 20, y: 80 }, currentCount: 75, maxCapacity: 100 },
  { id: "prasad-counter", name: t('prasad.counter'), crowdLevel: "low", position: { x: 70, y: 60 }, currentCount: 25, maxCapacity: 80 },
  { id: "parking", name: t('parking'), crowdLevel: "medium", position: { x: 85, y: 20 }, currentCount: 120, maxCapacity: 150 },
  { id: "exit-gate", name: t('exit.gate'), crowdLevel: "low", position: { x: 75, y: 85 }, currentCount: 30, maxCapacity: 100 },
];

export const TempleMap = () => {
  const { t } = useLanguage();
  const [selectedArea, setSelectedArea] = useState<CrowdArea | null>(null);
  const crowdAreas = getCrowdAreas(t);

  const getCrowdColor = (level: string) => {
    switch (level) {
      case "low": return "bg-green-500";
      case "medium": return "bg-yellow-500";
      case "high": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const getCrowdBadgeColor = (level: string) => {
    switch (level) {
      case "low": return "bg-green-100 text-green-800 border-green-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "high": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCrowdLevelText = (level: string) => {
    switch (level) {
      case "low": return t('low.crowd');
      case "medium": return t('medium.crowd');
      case "high": return t('high.crowd');
      default: return level;
    }
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-background to-background/80 shadow-temple border-primary/10">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold bg-gradient-temple bg-clip-text text-transparent">
          {t('temple.map.title')}
        </h2>
      </div>

      <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden border border-primary/20">
        <img 
          src="https://i.pinimg.com/originals/58/cf/83/58cf83ae972c7debaa1c81e3c4bd8ae6.jpg" 
          alt="Temple Map" 
          className="w-full h-full object-cover"
        />
        
        {/* Crowd density overlays */}
        {crowdAreas.map((area) => (
          <div
            key={area.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${area.position.x}%`, top: `${area.position.y}%` }}
            onClick={() => setSelectedArea(area)}
          >
            <div className={`w-6 h-6 rounded-full ${getCrowdColor(area.crowdLevel)} opacity-80 animate-pulse shadow-lg`} />
            <div className={`w-12 h-12 rounded-full ${getCrowdColor(area.crowdLevel)} opacity-20 absolute -top-3 -left-3 animate-ping`} />
          </div>
        ))}

        {/* Selected area info popup */}
        {selectedArea && (
          <div 
            className="absolute bg-card border border-primary/20 rounded-lg p-4 shadow-divine z-10 min-w-[200px]"
            style={{ 
              left: `${selectedArea.position.x}%`, 
              top: `${selectedArea.position.y - 15}%`,
              transform: 'translateX(-50%)'
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-foreground">{selectedArea.name}</h3>
              <Badge className={getCrowdBadgeColor(selectedArea.crowdLevel)}>
                {getCrowdLevelText(selectedArea.crowdLevel)}
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{selectedArea.currentCount} / {selectedArea.maxCapacity}</span>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setSelectedArea(null)}
              className="mt-2 w-full"
            >
              {t('close')}
            </Button>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full" />
          <span className="text-sm">{t('low.crowd')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full" />
          <span className="text-sm">{t('medium.crowd')}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded-full" />
          <span className="text-sm">{t('high.crowd')}</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 flex gap-3">
        <Button variant="temple" size="sm">
          <Clock className="w-4 h-4" />
          {t('view.timeslots')}
        </Button>
        <Button variant="peaceful" size="sm">
          <MapPin className="w-4 h-4" />
          {t('alternate.route')}
        </Button>
        <Button variant="emergency" size="sm">
          <AlertTriangle className="w-4 h-4" />
          {t('sos')}
        </Button>
      </div>
    </Card>
  );
};