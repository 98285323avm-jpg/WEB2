import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'andre_avm@live.com',
    actionText: 'Envie-me um email',
    href: 'mailto:andre_avm@live.com',
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '+55 (79) 99828-5323',
    actionText: 'Ligue para mim',
    href: 'tel:+5579998285323',
  },
  {
    icon: MapPin,
    title: 'Localização',
    content: 'Aracaju, SE. Brasil',
    actionText: 'Ver no mapa',
    href: 'https://www.openstreetmap.org/search?query=Aracaju%2C%20SE',
  },
];

const Contact = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Contato | André Machado</title>
        <meta name="description" content="Entre em contato com André Machado para discutir seu próximo projeto." />
        <meta property="og:title" content="Contato | André Machado" />
        <meta property="og:description" content="Entre em contato com André Machado para discutir seu próximo projeto." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Entre em <span className="nathier-blue">Contato</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400">Tem um projeto em mente? Vamos conversar e transformar suas ideias em realidade!</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {contactInfo.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-6 bg-[#12223A] rounded-lg shadow-lg hover:bg-[#1b3050] hover:shadow-blue-500/20 transition-all duration-300 group"
            >
              <div className="p-4 bg-blue-600/20 rounded-lg mr-6">
                <item.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.content}</p>
                <p className="text-sm text-blue-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.actionText}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Contact;