import Avatar from '../imgs/eu2.jpg'
import SocialNetWork from './SocialNetWork'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const SideBar = () => {
  return (
    // uso do html semântico
    <aside id="sidebar">
       <img src={Avatar} alt="Jean Castor" />
       <p className="title">Desenvolvedor FontEnd</p>
       <SocialNetWork/>
       <InformationContainer/>
       <a href="#" className="btn">Baixar currículo</a>
    </aside>
  )
}

export default SideBar