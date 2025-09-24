import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Users, 
  Clock,
  Heart,
  Share2
} from "lucide-react";
import { toast } from "sonner";

export const LiveDarshan = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLive] = useState(true);

  const handleShare = () => {
    toast.success("लाइव दर्शन लिंक कॉपी हो गया!", {
      icon: "🔗",
    });
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-card/80 shadow-divine border-secondary/20">
      <CardHeader className="p-0 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Video className="w-6 h-6 text-secondary" />
            <CardTitle className="text-2xl bg-gradient-divine bg-clip-text text-transparent">
              लाइव दर्शन
            </CardTitle>
            {isLive && (
              <Badge className="bg-red-500 text-white animate-pulse">
                LIVE
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>2,847 दर्शक</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0 space-y-6">
        {/* Video Player */}
        <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
          {/* Placeholder for video stream */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center text-white">
              <Video className="w-16 h-16 mx-auto mb-4 opacity-60" />
              <p className="text-lg font-semibold mb-2">मुख्य मंदिर - लाइव दर्शन</p>
              <p className="text-sm opacity-80">वास्तविक समय में देवता के दर्शन करें</p>
            </div>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsMuted(!isMuted)}
                className="bg-black/50 hover:bg-black/70 border-0"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="bg-black/50 hover:bg-black/70 border-0"
              >
                <Maximize className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-sm text-white">
                {new Date().toLocaleTimeString('hi-IN')}
              </span>
            </div>
          </div>

          {/* Live indicator */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-white font-medium">लाइव</span>
          </div>
        </div>

        {/* Stream Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">2,847</div>
            <div className="text-sm text-muted-foreground">वर्तमान दर्शक</div>
          </div>
          
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
            <div className="text-2xl font-bold">15,432</div>
            <div className="text-sm text-muted-foreground">आज के दर्शन</div>
          </div>
          
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <Clock className="w-6 h-6 mx-auto mb-2 text-secondary" />
            <div className="text-2xl font-bold">6:30 AM</div>
            <div className="text-sm text-muted-foreground">आरती का समय</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="temple" className="flex-1">
            <Heart className="w-4 h-4" />
            दर्शन पसंद करें
          </Button>
          <Button variant="divine" onClick={handleShare}>
            <Share2 className="w-4 h-4" />
            साझा करें
          </Button>
        </div>

        {/* Schedule */}
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" />
            आज का कार्यक्रम
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>मंगला आरती:</span>
              <span className="font-medium">6:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>श्रृंगार आरती:</span>
              <span className="font-medium">8:00 AM</span>
            </div>
            <div className="flex justify-between">
              <span>भोग आरती:</span>
              <span className="font-medium">12:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>संध्या आरती:</span>
              <span className="font-medium">7:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>शयन आरती:</span>
              <span className="font-medium">9:30 PM</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};