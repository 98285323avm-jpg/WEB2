import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-[#0A192F] text-gray-100 font-sans">
      <Helmet>
        <title>André Machado - Gestor de TI</title>
        <meta name="description" content="Portfólio de André Machado, Gestor de Tecnologia da Informação." />
        <meta property="og:title" content="André Machado - Gestor de TI" />
        <meta property="og:description" content="Portfólio de André Machado, Gestor de Tecnologia da Informação." />
      </Helmet>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/quem-sou-eu" element={<About />} />
            <Route path="/experiencias" element={<Experiences />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/projetos/gestao" element={<ProjectDetail projectType="Gestão" />} />
            <Route path="/projetos/automacao" element={<ProjectDetail projectType="Automação" />} />
            <Route path="/projetos/desenvolvimento-web" element={<ProjectDetail projectType="Desenvolvimento WEB" />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;