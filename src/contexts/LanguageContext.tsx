import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  hi: {
    // Header & Navigation
    'temple.management': 'भीड़मुक्त',
    'digital.temple': 'डिजिटल मंदिर प्रबंधन',
    'temple.map': 'मंदिर मैप',
    'ticket.booking': 'टिकट बुकिंग',
    'dashboard': 'डैशबोर्ड',
    'live.darshan': 'लाइव दर्शन',
    
    // Hero Section
    'hero.subtitle': 'आधुनिक तकनीक के साथ पारंपरिक दर्शन का अनुभव। सुरक्षित, व्यवस्थित और आध्यात्मिक यात्रा।',
    'book.ticket': 'टिकट बुक करें',
    
    // Temple Map
    'temple.map.title': 'मंदिर नक्शा - भीड़ का स्थिति',
    'main.darshan': 'मुख्य दर्शन',
    'entry.gate': 'प्रवेश द्वार',
    'prasad.counter': 'प्रसाद काउंटर',
    'parking': 'पार्किंग',
    'exit.gate': 'निकास द्वार',
    'low.crowd': 'कम भीड़',
    'medium.crowd': 'मध्यम भीड़',
    'high.crowd': 'अधिक भीड़',
    'view.timeslots': 'समय स्लॉट देखें',
    'alternate.route': 'वैकल्पिक रूट',
    'sos': 'SOS',
    'close': 'बंद करें',
    
    // Ticket Booking
    'select.date': 'दिनांक चुनें',
    'today': 'आज',
    'ticket.count': 'टिकट की संख्या',
    'max.tickets': 'अधिकतम 4 टिकट प्रति बुकिंग',
    'select.timeslot': 'समय स्लॉट चुनें',
    'available': 'उपलब्ध',
    'limited': 'सीमित',
    'full': 'भरा हुआ',
    'booking.summary': 'बुकिंग सारांश',
    'timeslot': 'समय स्लॉट',
    'tickets': 'टिकट',
    'devotees': 'श्रद्धालू',
    'total': 'कुल',
    'please.select.slot': 'कृपया समय स्लॉट चुनें',
    'ticket.booked': 'टिकट बुक हो गया! QR कोड आपके फोन पर भेजा जाएगा।',
    
    // Dashboard
    'authority.dashboard': 'प्राधिकरण डैशबोर्ड',
    'realtime.monitoring': 'वास्तविक समय में भीड़ निगरानी और प्रबंधन',
    'current.devotees': 'वर्तमान श्रद्धालू',
    'todays.tickets': 'आज के टिकट',
    'avg.wait.time': 'औसत प्रतीक्षा समय',
    'minutes': 'मिनट',
    'alerts': 'अलर्ट्स',
    'active': 'सक्रिय',
    'live.view': 'लाइव व्यू',
    'reports': 'रिपोर्ट',
    'crowd.alerts': 'भीड़ अलर्ट्स',
    'view.all.alerts': 'सभी अलर्ट्स देखें',
    'quick.actions': 'त्वरित कार्य',
    'crowd.control': 'भीड़ नियंत्रण',
    'camera.view': 'कैमरा व्यू',
    'emergency': 'आपातकाल',
    'analytics': 'एनालिटिक्स',
    'todays.activity': 'आज की गतिविधि',
    'morning.crowd': 'सुबह की भीड़',
    'afternoon.crowd': 'दोपहर की भीड़',
    'evening.crowd': 'शाम की भीड़',
    'minutes.ago': 'मिनट पहले',
    
    // Live Darshan
    'live.darshan.title': 'लाइव दर्शन',
    'live': 'LIVE',
    'viewers': 'दर्शक',
    'main.temple.live': 'मुख्य मंदिर - लाइव दर्शन',
    'realtime.darshan': 'वास्तविक समय में देवता के दर्शन करें',
    'current.viewers': 'वर्तमान दर्शक',
    'todays.darshan': 'आज के दर्शन',
    'aarti.time': 'आरती का समय',
    'like.darshan': 'दर्शन पसंद करें',
    'share': 'साझा करें',
    'todays.schedule': 'आज का कार्यक्रम',
    'mangala.aarti': 'मंगला आरती',
    'shringar.aarti': 'श्रृंगार आरती',
    'bhog.aarti': 'भोग आरती',
    'sandhya.aarti': 'संध्या आरती',
    'shayan.aarti': 'शयन आरती',
    'darshan.link.copied': 'लाइव दर्शन लिंक कॉपी हो गया!',
    
    // Features
    'qr.ticket.system': 'QR टिकट सिस्टम',
    'qr.description': 'ऑनलाइन टिकट बुक करें और QR कोड से प्रवेश पाएं',
    'interactive.map': 'इंटरैक्टिव मैप',
    'map.description': 'वास्तविक समय में भीड़ की स्थिति देखें',
    'live.darshan.feature': 'लाइव दर्शन',
    'darshan.description': 'घर बैठे देवता के दर्शन करें',
    'sos.safety': 'SOS सुरक्षा',
    'sos.description': 'आपातकाल में तुरंत सहायता पाएं',
    'main.features': 'मुख्य सुविधाएं',
    'features.subtitle': 'आधुनिक तकनीक के साथ पारंपरिक मंदिर अनुभव को बेहतर बनाने वाली सुविधाएं',
    
    // Process
    'darshan.process': 'दर्शन की प्रक्रिया',
    'simple.steps': 'सरल चरणों में पूर्ण दर्शन प्रक्रिया',
    'step1.book': 'टिकट बुक करें',
    'step1.desc': 'ऑनलाइन समय स्लॉट चुनकर टिकट बुक करें',
    'step2.scan': 'QR स्कैन करें',
    'step2.desc': 'मंदिर प्रवेश द्वार पर QR कोड स्कैन करें',
    'step3.darshan': 'दर्शन करें',
    'step3.desc': 'निर्धारित समय में शांतिपूर्वक दर्शन करें',
    
    // Emergency
    'emergency.help': 'आपातकालीन सहायता',
    'emergency.desc': 'किसी भी समस्या या आपातकाल की स्थिति में SOS बटन दबाकर तुरंत सहायता प्राप्त करें',
    'emergency.sos': 'SOS - आपातकालीन सहायता',
    
    // Footer
    'services': 'सेवाएं',
    'online.booking': '• ऑनलाइन टिकट बुकिंग',
    'live.streaming': '• लाइव दर्शन स्ट्रीमिंग',
    'crowd.monitoring': '• भीड़ निगरानी',
    'emergency.support': '• आपातकालीन सहायता',
    'contact': 'संपर्क',
    'helpline': '📞 हेल्पलाइन: 1800-XXX-XXXX',
    'email': '📧 ईमेल: support@temple.gov.in',
    'support.24x7': '🕐 24/7 सहायता उपलब्ध',
    'footer.copyright': '© 2024 भीड़मुक्त। सभी अधिकार सुरक्षित।',
    'footer.description': 'डिजिटल तकनीक के साथ पारंपरिक मंदिर अनुभव को बेहतर बनाना',
  },
  en: {
    // Header & Navigation
    'temple.management': 'Crowd-Free',
    'digital.temple': 'Digital Temple Management',
    'temple.map': 'Temple Map',
    'ticket.booking': 'Ticket Booking',
    'dashboard': 'Dashboard',
    'live.darshan': 'Live Darshan',
    
    // Hero Section
    'hero.subtitle': 'Experience traditional darshan with modern technology. Safe, organized, and spiritual journey.',
    'book.ticket': 'Book Ticket',
    
    // Temple Map
    'temple.map.title': 'Temple Map - Crowd Status',
    'main.darshan': 'Main Darshan',
    'entry.gate': 'Entry Gate',
    'prasad.counter': 'Prasad Counter',
    'parking': 'Parking',
    'exit.gate': 'Exit Gate',
    'low.crowd': 'Low Crowd',
    'medium.crowd': 'Medium Crowd',
    'high.crowd': 'High Crowd',
    'view.timeslots': 'View Time Slots',
    'alternate.route': 'Alternate Route',
    'sos': 'SOS',
    'close': 'Close',
    
    // Ticket Booking
    'select.date': 'Select Date',
    'today': 'Today',
    'ticket.count': 'Number of Tickets',
    'max.tickets': 'Maximum 4 tickets per booking',
    'select.timeslot': 'Select Time Slot',
    'available': 'Available',
    'limited': 'Limited',
    'full': 'Full',
    'booking.summary': 'Booking Summary',
    'timeslot': 'Time Slot',
    'tickets': 'Tickets',
    'devotees': 'Devotees',
    'total': 'Total',
    'please.select.slot': 'Please select a time slot',
    'ticket.booked': 'Ticket booked successfully! QR code will be sent to your phone.',
    
    // Dashboard
    'authority.dashboard': 'Authority Dashboard',
    'realtime.monitoring': 'Real-time crowd monitoring and management',
    'current.devotees': 'Current Devotees',
    'todays.tickets': "Today's Tickets",
    'avg.wait.time': 'Average Wait Time',
    'minutes': 'Minutes',
    'alerts': 'Alerts',
    'active': 'Active',
    'live.view': 'Live View',
    'reports': 'Reports',
    'crowd.alerts': 'Crowd Alerts',
    'view.all.alerts': 'View All Alerts',
    'quick.actions': 'Quick Actions',
    'crowd.control': 'Crowd Control',
    'camera.view': 'Camera View',
    'emergency': 'Emergency',
    'analytics': 'Analytics',
    'todays.activity': "Today's Activity",
    'morning.crowd': 'Morning Crowd',
    'afternoon.crowd': 'Afternoon Crowd',
    'evening.crowd': 'Evening Crowd',
    'minutes.ago': 'minutes ago',
    
    // Live Darshan
    'live.darshan.title': 'Live Darshan',
    'live': 'LIVE',
    'viewers': 'Viewers',
    'main.temple.live': 'Main Temple - Live Darshan',
    'realtime.darshan': 'Experience divine darshan in real-time',
    'current.viewers': 'Current Viewers',
    'todays.darshan': "Today's Darshan",
    'aarti.time': 'Aarti Time',
    'like.darshan': 'Like Darshan',
    'share': 'Share',
    'todays.schedule': "Today's Schedule",
    'mangala.aarti': 'Mangala Aarti',
    'shringar.aarti': 'Shringar Aarti',
    'bhog.aarti': 'Bhog Aarti',
    'sandhya.aarti': 'Sandhya Aarti',
    'shayan.aarti': 'Shayan Aarti',
    'darshan.link.copied': 'Live darshan link copied!',
    
    // Features
    'qr.ticket.system': 'QR Ticket System',
    'qr.description': 'Book tickets online and get entry with QR code',
    'interactive.map': 'Interactive Map',
    'map.description': 'View real-time crowd status',
    'live.darshan.feature': 'Live Darshan',
    'darshan.description': 'Experience divine darshan from home',
    'sos.safety': 'SOS Safety',
    'sos.description': 'Get instant help in emergencies',
    'main.features': 'Main Features',
    'features.subtitle': 'Features that enhance traditional temple experience with modern technology',
    
    // Process
    'darshan.process': 'Darshan Process',
    'simple.steps': 'Complete darshan process in simple steps',
    'step1.book': 'Book Ticket',
    'step1.desc': 'Book tickets online by selecting time slot',
    'step2.scan': 'Scan QR',
    'step2.desc': 'Scan QR code at temple entry gate',
    'step3.darshan': 'Darshan',
    'step3.desc': 'Peaceful darshan at designated time',
    
    // Emergency
    'emergency.help': 'Emergency Help',
    'emergency.desc': 'Press SOS button for instant help in any problem or emergency situation',
    'emergency.sos': 'SOS - Emergency Help',
    
    // Footer
    'services': 'Services',
    'online.booking': '• Online Ticket Booking',
    'live.streaming': '• Live Darshan Streaming',
    'crowd.monitoring': '• Crowd Monitoring',
    'emergency.support': '• Emergency Support',
    'contact': 'Contact',
    'helpline': '📞 Helpline: 1800-XXX-XXXX',
    'email': '📧 Email: support@temple.gov.in',
    'support.24x7': '🕐 24/7 Support Available',
    'footer.copyright': '© 2024 Crowd-Free. All rights reserved.',
    'footer.description': 'Enhancing traditional temple experience with digital technology',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};