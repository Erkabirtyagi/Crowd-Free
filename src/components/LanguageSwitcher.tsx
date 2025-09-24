import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-4 h-4 text-muted-foreground" />
      <div className="flex items-center gap-1 bg-muted/50 rounded-lg p-1">
        <Button
          variant={language === 'hi' ? 'temple' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('hi')}
          className="h-8 px-3 text-sm"
        >
          हि
        </Button>
        <Button
          variant={language === 'en' ? 'temple' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className="h-8 px-3 text-sm"
        >
          EN
        </Button>
      </div>
      <Badge variant="outline" className="text-xs">
        {language === 'hi' ? 'Hindi' : 'English'}
      </Badge>
    </div>
  );
};
