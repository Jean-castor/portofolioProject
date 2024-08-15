import { DiCss3, DiJsBadge, DiReact, DiSass, DiHtml5 } from 'react-icons/di';

import '../styles/components/technologies.sass';

const technologies = [
  { id: 'html', name: 'HTML5', icon: DiHtml5 , 
    description: " Base sólida em HTML com capacidade de utilizá-lo de forma semântica e eficaz em projetos modernos de desenvolvimento web. " },
  { id: 'css', name: 'CSS3', icon: DiCss3,
    description: " Tenho uma sólida experiência em CSS, o que me permite criar interfaces de usuário atraentes e funcionais. Tais como: Seletores e Combinadores, Flexbox, Grid, Animações, Transições, etc. " },
  { id: 'javascript', name: 'JavaScript', icon: DiJsBadge,  
    description: " Tenho uma sólida experiência em JavaScript, o que me permite desenvolver aplicações web dinâmicas e interativas. manipulação do DOM, eventos e AJAX para criar interfaces responsivas.  " },
  { id: 'react', name: 'React', icon: DiReact,  
    description: " Tenho uma sólida experiência em React, criando componentes reutilizáveis e gerenciando estado de forma eficiente. Utilizo bibliotecas como react-icons para melhorar a UI. Sou proficiente em mapear dados para componentes dinâmicos." },
  { id: 'sass', name: 'Sass', icon: DiSass,  
    description: " Tenho experiência em Sass, utilizando suas funcionalidades avançadas como variáveis, mixins e aninhamento para escrever CSS modular e eficiente. " },
];

const TechnologiesContainer = () => {
  return (
    <section className='technologies_container'>
      <h2>Tecnologias</h2>
      <div className='technologies_grid'>
        {technologies.map((tech) => (
          <div className='tecnologies_card' key={tech.id} id={tech.id}>
            <tech.icon />
            <div className='tecnology_info'>
              <h3>{tech.name}</h3>
              <p>
                {tech.description}
              </p>
            </div>
          </div>
        ))}
        <p></p>
      </div>
    </section>
  );
};

export default TechnologiesContainer
