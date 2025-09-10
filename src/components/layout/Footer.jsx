import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "Link não configurado!",
        description: "🚧 Por favor, aguarde!",
      });
    }
  };

  return (
    <footer className="bg-[#081424] text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="text-xl font-bold text-white">André Machado</p>
            <p className="mt-2 text-sm">Gestor de Tecnologia da Informação</p>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Links Rápidos</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">INÍCIO</Link></li>
              <li><Link to="/quem-sou-eu" className="hover:text-blue-400 transition-colors">QUEM SOU EU</Link></li>
              <li><Link to="/experiencias" className="hover:text-blue-400 transition-colors">EXPERIÊNCIAS</Link></li>
              <li><Link to="/projetos" className="hover:text-blue-400 transition-colors">PROJETOS</Link></li>
              <li><Link to="/contato" className="hover:text-blue-400 transition-colors">CONTATO</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white mb-3">Conecte-se</p>
            <div className="flex space-x-4">
              <button onClick={() => handleSocialClick(null)} className="p-2 bg-gray-700 rounded-full hover:bg-blue-500 transition-colors">
                <Instagram size={20} />
              </button>
              <button onClick={() => handleSocialClick(null)} className="p-2 bg-gray-700 rounded-full hover:bg-blue-500 transition-colors">
                <Linkedin size={20} />
              </button>
              <a href="mailto:andre_avm@live.com" className="p-2 bg-gray-700 rounded-full hover:bg-blue-500 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>Copyright &copy; 2025 André Machado. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;