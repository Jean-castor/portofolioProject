import '../styles/components/aboutcontainer.sass'

const AboutContainer = () => {

    const personSkills = [
      {"id": 1, "name": "Criatividade e inovação."},
      {"id": 2, "name": "Comunicação eficaz e trabalho em equipe."},
      {"id": 3, "name": "Facilidade em aprender e ensinar."},
      {"id": 4, "name": "Organização e planejamento."},
      {"id": 5, "name": "Foco e determinação."}
    ];
    const hardSkills = [
      {"id": 1, "name": "Ensino Médio Completo"},
      {"id": 2, "name": "Graduando em Análise e Desenvolvimento de Sistemas"},
      {"id": 3, "name": "Cursos de Front-end"}
    ];

    const personLanguages = [
      {"id": 1, "name": "Português (Nativo)"},
      {"id": 2, "name": "Inglês (Intermediário)"}
    ];
    
  
  return (
    <section className="about_container">
      <h2>
        Sobre mim:
      </h2>
      <p>
        Desenvolvedor web de alta performance com foco em programação Front-end, 
        com conhecimento em HTML, CSS, JavaScript, React.js, Sass, Git, GitHub,
        Atualmente estou aprendendo sobre Next.js, suas ferramentas, propriedades, 
        e impacto para um melhor desenvolvimento de projetos pessoais e profissionais. 
      </p>
      <p>
        Meu objetivo é me tornar um desenvolvedor FullStack,
        para isso estou me dedicando a estudar e praticar diariamente,
        sempre buscando melhorar minhas habilidades e conhecimentos.
      </p>

      <h2>Formação Acadêmica: </h2>
      {hardSkills.map((hard) => (
            <p key={hard.id} id={hard.name}> 
              - {hard.name} 
            </p>
          ))
      }

      <h2> Idiomas:</h2>
      { personLanguages.map((language)=> (
            <p key={language.name} id={language.name} title={language.name}>
              - {language.name}
            </p>
          ))
      }
      <h2>Habilidades Pessoais:</h2>
      { personSkills.map((skill) => (
            <p key={skill.name} id={skill.name} title={skill.name}>
              - {skill.name}
            </p>
          ))
      }
    </section>
  )
}

export default AboutContainer