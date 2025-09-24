import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Ticket, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimeSlot {
  id: string;
  time: string;
  available: number;
  total: number;
  status: "available" | "limited" | "full";
}

const timeSlots: TimeSlot[] = [
  { id: "1", time: "6:00 - 8:00 AM", available: 45, total: 200, status: "available" },
  { id: "2", time: "8:00 - 10:00 AM", available: 15, total: 200, status: "limited" },
  { id: "3", time: "10:00 - 12:00 PM", available: 0, total: 200, status: "full" },
  { id: "4", time: "12:00 - 2:00 PM", available: 85, total: 200, status: "available" },
  { id: "5", time: "2:00 - 4:00 PM", available: 25, total: 200, status: "limited" },
  { id: "6", time: "4:00 - 6:00 PM", available: 120, total: 200, status: "available" },
  { id: "7", time: "6:00 - 8:00 PM", available: 5, total: 200, status: "limited" },
];

export const TicketBooking = () => {
  const { t } = useLanguage();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [tickets, setTickets] = useState(1);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available": return "bg-green-100 text-green-800 border-green-200";
      case "limited": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "full": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "available": return t('available');
      case "limited": return t('limited');
      case "full": return t('full');
      default: return "";
    }
  };

  const handleBooking = () => {
    if (!selectedSlot) {
      toast.error(t('please.select.slot'));
      return;
    }

    toast.success(t('ticket.booked'), {
      icon: "🎫",
      duration: 5000,
    });
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-card/80 shadow-divine border-secondary/20">
      <CardHeader className="p-0 mb-6">
        <div className="flex items-center gap-3">
          <Ticket className="w-6 h-6 text-secondary" />
          <CardTitle className="text-2xl bg-gradient-divine bg-clip-text text-transparent">
            {t('ticket.booking')}
          </CardTitle>
        </div>
      </CardHeader>

      <CardContent className="p-0 space-y-6">
        {/* Date Selection */}
        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <h3 className="font-semibold">{t('select.date')}</h3>
            <p className="text-sm text-muted-foreground">{t('today')}: {new Date().toLocaleDateString('hi-IN')}</p>
          </div>
        </div>

        {/* Ticket Count */}
        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
          <Users className="w-5 h-5 text-primary" />
          <div className="flex-1">
            <h3 className="font-semibold">{t('ticket.count')}</h3>
            <p className="text-sm text-muted-foreground">{t('max.tickets')}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setTickets(Math.max(1, tickets - 1))}
            >
              -
            </Button>
            <span className="w-8 text-center font-semibold">{tickets}</span>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setTickets(Math.min(4, tickets + 1))}
            >
              +
            </Button>
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold">{t('select.timeslot')}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {timeSlots.map((slot) => (
              <Card 
                key={slot.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedSlot === slot.id ? 'ring-2 ring-primary shadow-temple' : ''
                } ${slot.status === 'full' ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => slot.status !== 'full' && setSelectedSlot(slot.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{slot.time}</span>
                    <Badge className={getStatusColor(slot.status)}>
                      {getStatusText(slot.status)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {slot.available} / {slot.total} {t('available')}
                  </div>
                  {selectedSlot === slot.id && (
                    <CheckCircle className="w-5 h-5 text-primary mt-2" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Booking Summary */}
        {selectedSlot && (
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
            <h4 className="font-semibold mb-2">{t('booking.summary')}</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>{t('timeslot')}:</span>
                <span>{timeSlots.find(s => s.id === selectedSlot)?.time}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('tickets')}:</span>
                <span>{tickets} {t('devotees')}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>{t('total')}:</span>
                <span>₹{tickets * 50}</span>
              </div>
            </div>
          </div>
        )}

        {/* Book Button */}
        <Button 
          variant="temple" 
          size="lg" 
          className="w-full"
          onClick={handleBooking}
          disabled={!selectedSlot}
        >
          <Ticket className="w-5 h-5" />
          {t('book.ticket')}
        </Button>
      </CardContent>
    </Card>
  );
};