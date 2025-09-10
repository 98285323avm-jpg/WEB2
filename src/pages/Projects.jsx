import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';

const projectCards = [
  {
    title: 'Gestão',
    link: '/projetos/gestao',
    description: 'Projetos focados em gestão de equipes, processos e infraestrutura de TI.',
    imgText: 'Projetos de Gestão'
  },
  {
    title: 'Automação',
    link: '/projetos/automacao',
    description: 'Soluções para automação de tarefas e otimização de fluxos de trabalho.',
    imgText: 'Projetos de Automação'
  },
  {
    title: 'Desenvolvimento WEB',
    link: '/projetos/desenvolvimento-web',
    description: 'Criação de aplicações web robustas, responsivas e de alta performance.',
    imgText: 'Projetos de Desenvolvimento Web'
  },
];

const Projects = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Meus Projetos | André Machado</title>
        <meta name="description" content="Uma seleção dos trabalhos mais recentes e impactantes de André Machado." />
        <meta property="og:title" content="Meus Projetos | André Machado" />
        <meta property="og:description" content="Uma seleção dos trabalhos mais recentes e impactantes de André Machado." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Meus <span className="nathier-blue">Projetos</span>
        </h1>
        <p className="mt-4 text-lg text-gray-400">Uma seleção dos meus trabalhos mais recentes e impactantes.</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {projectCards.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link to={project.link} className="block group">
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-[#12223A] transform group-hover:scale-105 transition-transform duration-300">
                <div className="h-56 flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600">
                  <img 
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
                    alt={project.imgText}
                   src="https://s32907.pcdn.co/wp-content/uploads/2021/10/departamento-ti-capa.jpg" />
                  <span className="absolute text-3xl lg:text-4xl font-black text-white tracking-widest uppercase">{project.title}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Projects;