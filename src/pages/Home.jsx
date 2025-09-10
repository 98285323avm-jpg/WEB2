import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/PageWrapper';

const Home = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Início | André Machado</title>
        <meta name="description" content="Página inicial do portfólio de André Machado, Gestor de Tecnologia da Informação." />
        <meta property="og:title" content="Início | André Machado" />
        <meta property="og:description" content="Página inicial do portfólio de André Machado, Gestor de Tecnologia da Informação." />
      </Helmet>
      <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-6"
        >
          <img 
            className="rounded-full w-48 h-48 object-cover border-4 border-blue-500 shadow-lg"
            alt="Foto de perfil de André Machado"
           src="https://horizons-cdn.hostinger.com/3d9db379-ca6a-4643-afa4-f25a885d5c9d/8e7474c9d458e71e4a89087e7ee5289a.png" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider"
        >
          SEJAM BEM VINDOS, EU SOU <span className="nathier-blue">ANDRÉ MACHADO</span>.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          GESTOR DE TECNOLOGIA DA INFORMAÇÃO
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
            <Link to="/experiencias">Conheça meu trabalho</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 font-semibold">
            <Link to="/contato">Entre em Contato</Link>
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Home;