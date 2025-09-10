import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
const Experiences = () => {
  return <PageWrapper>
      <Helmet>
        <title>Experiências | André Machado</title>
        <meta name="description" content="Conheça as experiências profissionais de André Machado." />
        <meta property="og:title" content="Experiências | André Machado" />
        <meta property="og:description" content="Conheça as experiências profissionais de André Machado." />
      </Helmet>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          Minhas <span className="nathier-blue">Experiências</span>
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
          <h2 className="text-3xl font-semibold text-white mb-4">Jornada Profissional</h2>
          <p>Administrador por formação, construí toda minha carreira na área de tecnologia e atualmente sou estudante de Análise e Desenvolvimento de Sistemas com conclusão em 2026.</p>
          <p>Iniciei minha trajetória como estagiário na indústria têxtil, sendo efetivado e direcionando meu foco para hardware e automação de máquinas industriais. Evoluí até a posição de Coordenador de TI na Sergifil Indústria Têxtil, onde permaneço até hoje. Em paralelo, atuei no setor público, iniciando como estagiário na Gerência de Informática da Adema, sendo posteriormente contratado e, em seguida, promovido a Gerente de Informática me dedicando a gestão pública e atividades transversais a TI.</p>
          <p></p>
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
          <img className="rounded-lg shadow-2xl w-full h-auto object-cover" alt="Pessoas colaborando em um escritório moderno" src="https://itpeople.com.vc/wp-content/uploads/2019/04/shutterstock_782845411-1000x500.jpg" />
        </motion.div>
      </div>
    </PageWrapper>;
};
export default Experiences;