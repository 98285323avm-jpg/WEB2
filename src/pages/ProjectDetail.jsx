import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Link as LinkIcon } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// 🔹 Agora cada projeto já tem um "hyperlink" fixo no código
const projectDataMap = {
  'Gestão': {
    title: 'Gestão',
    initialDescription: 'Exerço a função de Gestor de TI tanto na iniciativa privada quanto no setor público. Apesar das diferenças de finalidade entre os segmentos em que atuei — desde a indústria têxtil até um órgão ambiental — muitas das atribuições e conquistas ao longo da minha trajetória se equivalem, revelando a versatilidade e a consistência do meu trabalho. Ao longo da minha carreira, participei ativamente da revitalização de parques tecnológicos, conduzindo processos de atualização de equipamentos e sistemas que impactaram diretamente na eficiência operacional. Também desenvolvi diagnósticos descritivos de infraestrutura e processos, fornecendo relatórios estratégicos que orientaram tomadas de decisão em alto nível. A gestão de pessoas foi outro pilar da minha atuação, promovendo treinamentos, capacitação técnica e liderando equipes multidisciplinares para alcançar resultados coletivos. No âmbito administrativo, realizei o planejamento estratégico e orçamentário do setor de informática, garantindo que os investimentos em tecnologia estivessem alinhados às metas institucionais. Além disso, atuei no fortalecimento da segurança da informação, com a implantação de políticas, monitoramento de riscos e desenvolvimento de planos de recuperação de desastres, assegurando a continuidade das operações diante de eventuais incidentes. Essas experiências consolidaram minha visão de que a gestão de TI vai além da tecnologia, sendo um elo estratégico entre inovação, eficiência e o sucesso organizacional.',
    imageUrl: 'https://blog.accurate.com.br/wp-content/uploads/2023/03/equipe-ti-focada-eficiente-956x538.jpg',
    imageAlt: 'Equipe de TI focada em tela de computador',
    hyperlink: 'https://exemplo.com/projeto-gestao'
  },
  'Automação': {
    title: 'Automação',
    initialDescription: 'A automação foi a primeira área de interesse profissional por conta da iniciação na indústria onde o hardware é tão presente quanto o software. Na linha de produção de uma indústria têxtil a tarefa de emendar o fio é tão recorrente que as máquinas saem de fábrica com um modulo industrial que lembra muito um robô, esse robô identifica fusos com fio partido e vai até o ponto de ruptura para realizar o emendo e seguir a produção do tubete de fio. Na Adema, a automação se faz de outra maneira em outra vertente. Com a finalidade de otimizar outra tarefa recorrente, desenvolvemos ferramentas para automatizar a comunicação da autarquia com a sociedade de uma forma geral, através disparo de emails com licenças emitidas, notificações e informações técnicas relativas aos processos de licenciamento e fiscalização ambiental.',
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop',
    imageAlt: 'Fluxograma de automação de processos',
    hyperlink: 'https://exemplo.com/projeto-automacao'
  },
  'Desenvolvimento WEB': {
    title: 'Desenvolvimento WEB',
    initialDescription: 'O desenvolvimento WEB é a vertente mais recente desse portfólio, no entanto para além do desenvolvimento desta página, tenho um bom projeto para demonstração dessa atribuição. Se trata da Validação de Licenças Ambientais desenvolvido para a Administração Estadual do Meio Ambiente. Essa aplicação serve para que o titular licenciado, demais interessados ou a sociedade como um todo possa ter informações sobre a regularidade de uma licença ambiental emitida.',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    imageAlt: 'Código de programação em um editor de texto',
    hyperlink: 'https://validador.adema.se.gov.br/'
  }
};

const ProjectDetail = ({ projectType }) => {
  const data = projectDataMap[projectType] || { 
    title: 'Projeto', 
    initialDescription: 'Página não encontrada.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop',
    imageAlt: 'Página não encontrada',
    hyperlink: ''
  };
  
  const { toast } = useToast();

  const handleLinkClick = () => {
    if (data.hyperlink) {
      window.open(data.hyperlink, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "Link não configurado!",
        description: "🚧 Esse projeto ainda não possui um link associado.",
      });
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>{data.title} | André Machado</title>
        <meta name="description" content={data.initialDescription} />
        <meta property="og:title" content={`${data.title} | André Machado`} />
        <meta property="og:description" content={data.initialDescription} />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="nathier-blue">{data.title}</span>
        </h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 space-y-4 text-base md:text-lg"
        >
          <p>{data.initialDescription}</p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <img  
            className="rounded-lg shadow-2xl w-full h-auto object-cover"
            alt={data.imageAlt}
            src={data.imageUrl}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop';
            }}
          />
          
          <Button 
            onClick={handleLinkClick} 
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            <LinkIcon className="mr-2 h-4 w-4" /> Ver Projeto
          </Button>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default ProjectDetail;