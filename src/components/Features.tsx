import { Zap, Shield, Cpu, FileVideo, FileAudio, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Processamento Ultra-Rápido",
    description: "Converta e processe seus arquivos em segundos com nossa infraestrutura otimizada.",
  },
  {
    icon: Cpu,
    title: "IA Avançada",
    description: "Algoritmos de última geração para qualidade superior em cada conversão.",
  },
  {
    icon: FileVideo,
    title: "Vídeo Profissional",
    description: "Suporte completo para formatos de vídeo com transcodificação inteligente.",
  },
  {
    icon: FileAudio,
    title: "Áudio de Alta Qualidade",
    description: "Processe áudio com fidelidade máxima e múltiplos formatos de saída.",
  },
  {
    icon: Shield,
    title: "Seguro e Privado",
    description: "Seus arquivos são processados com criptografia e deletados após o uso.",
  },
  {
    icon: Sparkles,
    title: "Otimização Automática",
    description: "IA otimiza automaticamente seus arquivos para melhor performance.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recursos <span className="bg-clip-text text-transparent bg-gradient-primary">Poderosos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para processar mídia de forma profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow/20 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
