import { Upload, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="AI Media Processing" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Powered by AI</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-primary animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          Processamento de Mídia
          <br />
          <span className="text-foreground">Reimaginado</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          Converta, edite e otimize seus arquivos de áudio e vídeo com o poder da inteligência artificial. Rápido, preciso e profissional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
          <Button size="lg" className="text-lg px-8 shadow-glow hover:shadow-glow/50 transition-all">
            <Upload className="w-5 h-5 mr-2" />
            Começar Agora
          </Button>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Ver Recursos
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10x</div>
            <div className="text-sm text-muted-foreground">Mais Rápido</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Precisão</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Formatos</div>
          </div>
        </div>
      </div>
    </section>
  );
};
