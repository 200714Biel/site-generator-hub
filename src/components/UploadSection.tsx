import { Upload, FileVideo, FileAudio, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const UploadSection = () => {
  const { toast } = useToast();

  const handleUploadClick = () => {
    toast({
      title: "Upload disponível em breve",
      description: "A funcionalidade de upload será habilitada quando o backend estiver conectado.",
    });
  };

  return (
    <section id="upload-section" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comece em <span className="bg-clip-text text-transparent bg-gradient-primary">Segundos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Arraste seus arquivos ou clique para fazer upload
            </p>
          </div>

          <Card className="bg-gradient-card border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors shadow-card">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="inline-flex p-6 rounded-full bg-primary/10 mb-6">
                  <Upload className="w-12 h-12 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">Fazer Upload de Arquivo</h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Suportamos diversos formatos de vídeo, áudio e imagem. Tamanho máximo: 100MB
                </p>

                <Button 
                  size="lg" 
                  onClick={handleUploadClick}
                  className="shadow-glow hover:shadow-glow/50 transition-all"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Selecionar Arquivo
                </Button>

                <div className="flex items-center justify-center gap-6 mt-12 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <FileVideo className="w-4 h-4" />
                    <span>Vídeo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileAudio className="w-4 h-4" />
                    <span>Áudio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4" />
                    <span>Imagem</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Format Support */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Formatos suportados:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['MP4', 'AVI', 'MOV', 'MP3', 'WAV', 'FLAC', 'JPG', 'PNG', 'WebM', 'MKV'].map((format) => (
                <span 
                  key={format} 
                  className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
