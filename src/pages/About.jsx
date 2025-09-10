import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
const About = () => {
  return <PageWrapper>
      <Helmet>
        <title>Quem sou eu | André Machado</title>
        <meta name="description" content="Saiba mais sobre André Machado, um apaixonado por tecnologia e inovação." />
        <meta property="og:title" content="Quem sou eu | André Machado" />
        <meta property="og:description" content="Saiba mais sobre André Machado, um apaixonado por tecnologia e inovação." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Sobre <span className="nathier-blue">Mim</span>
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{
        x: -50,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="text-gray-300 space-y-4 text-base md:text-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">Apaixonado por tecnologia e inovação</h2>
          <p>Sou Gestor de Tecnologia da Informação com mais de 3 anos de experiência na liderança de equipes e projetos, além da otimização de infraestruturas de TI para impulsionar resultados e promover o crescimento organizacional, tanto no setor público quanto na iniciativa privada</p>
          <p>
            Minha especialidade é alinhar a tecnologia com os objetivos estratégicos da empresa, garantindo segurança, eficiência e inovação. Busco constantemente soluções que transformem desafios em oportunidades.
          </p>
          <p>
            Fora do ambiente de trabalho, dedico meu tempo a estudar novas tendências tecnológicas, participar de workshops e compartilhar conhecimento com outros profissionais da área.
          </p>
        </motion.div>
        <motion.div initial={{
        x: 50,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <img className="rounded-lg shadow-2xl w-full h-auto object-cover" alt="Ambiente de trabalho com múltiplos monitores exibindo código" src="https://www.tecnicon.com.br/images/large/db165658902371a8776574.jpg" />
        </motion.div>
      </div>
    </PageWrapper>;
};
export default About;