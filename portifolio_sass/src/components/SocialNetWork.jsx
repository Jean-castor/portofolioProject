import { FaLinkedin, FaGithub} from 'react-icons/fa'

import  '../styles/components/socialnetwork.sass'

const socialNetWorks = [
   { name: 'linkedin', url: 'https://www.linkedin.com/in/jean-castor-0837022ba/' , icon: FaLinkedin},
   { name: 'github', url: 'https://github.com/Jean-castor', icon: FaGithub},
]

const SocialNetWork = () => {
  return (
    <section id="social_networks">
        { socialNetWorks.map((network) => (
            <a 
              className='social_btn' 
              key={network.name} 
              href={network.url} 
              id={network.name} 
              title={network.name}
            >
              <network.icon/>
            </a>
          )
        )}
    </section>
  )
}

export default SocialNetWork